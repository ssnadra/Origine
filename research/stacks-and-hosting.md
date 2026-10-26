# Stacks and hosting for Origine V1

Research for [issue #3](https://github.com/ssnadra/Origine/issues/3), part of the V1 map ([issue #1](https://github.com/ssnadra/Origine/issues/1)).
All sources were accessed on **2026-10-26** and are official docs or official pricing pages. Prices and limits change often, so check the linked page again before committing.

This file recommends an option but does not decide. The decision belongs to a later grilling ticket, and the choice should then be recorded as an ADR.

## The question

Which two or three stacks fit Origine V1 best, and what does each trade away? The constraints come from issue #3:

- The driver knows TypeScript and React, and a little Python.
- Free tiers to start, with a ceiling of about **$10 a month** as photos pile up. A Namecheap account already holds the domain.
- **Passwordless email sign-in links**: invite-only, sessions that last **180 days**, and responses that never reveal whether an email belongs to a Member.
- **Photo storage** that serves resized versions to phones.
- A **relational store** (tables linked by IDs) for People and their parent, partner and sibling links, with every change attributed to a Member.
- English and Romanian UI. Mobile-first web, with no native app.

## Words used below

- **Stack**: the set of tools the app is built with, meaning the framework for pages, the database, sign-in and file storage.
- **Hosting**: the company whose computers run the app and keep the data.
- **Full-stack framework**: one project that holds both the pages people see and the server code that reads the database. Next.js and React Router (formerly Remix) are both React-based.
- **Backend-as-a-service (BaaS)**: a hosted product that bundles the database, sign-in and file storage behind a ready-made API, so less server code has to be written. Supabase, Firebase and PocketBase are all BaaS products.
- **Postgres / SQLite**: two relational databases. Postgres runs as a separate server. SQLite is a single file. Both use SQL.
- **Object storage**: a "bucket" for files such as photos, priced per GB stored. Cloudflare R2 and Supabase Storage are examples.
- **Image transformation**: making a smaller copy of an image on request (for example, 400 px wide WebP for a phone) instead of sending the 4 MB original.
- **HEIC**: the default photo format on iPhones. Most browsers outside Safari cannot display it, so it has to be converted.
- **Egress**: data sent out of a service to visitors. Some hosts charge for it.
- **Lock-in**: how hard it would be to leave a vendor later.
- **Enumeration**: when a sign-in page answers differently for known and unknown emails, which lets a stranger find out who is a Member.

## Sizing assumption

The cost figures use the issue's target of about 100 Members and 5,000 photos. The estimate below is mine, not a vendor figure.

- A phone photo is roughly 2–4 MB. 5,000 originals come to roughly **10–20 GB**, call it **15 GB**.
- The database (People, links, change records) stays well under 100 MB.
- Sign-in emails are rare because sessions last 180 days. Invitations total about 100 over the life of the site. That is far below any free email tier.

Photo storage is the cost driver. It decides which free tiers survive.

## Options considered

### 1. Cloudflare all-in: React Router on Workers + D1 + R2 + Images (+ Better Auth, Resend)

**In plain language:** the whole app lives on Cloudflare. The pages and server code run on **Workers**, Cloudflare's hosted servers. The family tree data sits in **D1**, which is SQLite run by Cloudflare. Photos go in **R2**, Cloudflare's file bucket. **Cloudflare Images** makes the phone-sized copies. Sign-in links come from **Better Auth**, an open-source TypeScript sign-in library that lives inside the app. The emails themselves are sent through **Resend**, an email-sending service.

- **Framework:** Cloudflare's guide scaffolds "a full-stack app using React Router" with server rendering on by default (`npm create cloudflare@latest -- my-react-router-app --framework=react-router`) ([CF React Router guide](https://developers.cloudflare.com/workers/framework-guides/web-apps/react-router/)). React Router is where Remix went: "What we planned to release as Remix v3 is now going to be released as React Router v7" ([Remix blog](https://remix.run/blog/merging-remix-and-react-router)). It is plain React with "loaders" (read data) and "actions" (save data).
- **Cost:**
  - Workers Free gives 100,000 requests a day, with requests for static files free and unlimited. Workers Paid is **$5/month** ([Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/)).
  - D1 Free gives 5 GB of storage, 5 million rows read and 100,000 rows written per day ([D1 pricing](https://developers.cloudflare.com/d1/platform/pricing/)).
  - R2 includes 10 GB-month free, then $0.015/GB-month, and egress is free ([R2 pricing](https://developers.cloudflare.com/r2/pricing/)). At 15 GB that is about **$0.08/month**.
  - Images Free gives 5,000 unique transformations a month. Past that, new transformations fail with error 9422 but cached ones keep working, and nothing is charged. The Paid plan charges $0.50 per 1,000 ([Images pricing](https://developers.cloudflare.com/images/pricing/)).
  - Resend Free sends 3,000 emails a month and 100 a day ([Resend pricing](https://resend.com/pricing)).
  - **Estimate at target size: $0–5/month.** That is $0 if the free limits hold, or $5 for Workers Paid to get longer backups and remove the daily caps.
- **Auth fit:**
  - Better Auth's magic-link plugin has `disableSignUp` ("users cannot create an account through a magic link"), which gives invite-only sign-in. Links expire after 300 seconds by default (`expiresIn`), and the app supplies its own `sendMagicLink` function ([Better Auth magic link](https://www.better-auth.com/docs/plugins/magic-link)).
  - Sessions default to 7 days and are set with `session.expiresIn`. The docs show a 180-day example ([Better Auth sessions](https://www.better-auth.com/docs/concepts/session-management)).
  - Better Auth runs on Cloudflare Workers with the `nodejs_compat` flag, and works with Drizzle for SQLite ([Better Auth installation](https://www.better-auth.com/docs/installation)). Drizzle "fully supports the Cloudflare D1 database" ([Drizzle D1](https://orm.drizzle.team/docs/connect-cloudflare-d1)).
  - *Not confirmed in the docs:* whether the endpoint answers differently for an unknown email when `disableSignUp` is on. The app should show the same "Check your email" screen whatever happens, and a prototype should check this.
- **Photos:**
  - Images accepts **HEIC as input**, along with JPEG, PNG, WebP and GIF ([Images limits](https://developers.cloudflare.com/images/get-started/limits/)). It outputs `auto`, AVIF, WebP or JPEG ([Images features](https://developers.cloudflare.com/images/optimization/features/)), so iPhone photos can be shown on Android without converting them first.
  - Transformations are served from a Cloudflare zone (a domain managed by Cloudflare) ([Transform images](https://developers.cloudflare.com/images/transform-images/)). The domain's nameservers therefore have to move from Namecheap to Cloudflare. The domain stays registered at Namecheap ([Namecheap guide](https://www.namecheap.com/support/knowledgebase/article.aspx/9607/2210/how-to-set-up-dns-records-for-your-domain-in-a-cloudflare-account/)).
- **Backups and export:**
  - D1 Time Travel restores the database to any point in the last **7 days on Free, or 30 days on Paid** ([D1 Time Travel](https://developers.cloudflare.com/d1/reference/time-travel/)).
  - `wrangler d1 export <db> --remote --output=./database.sql` writes the whole database to a plain SQL file ([D1 import/export](https://developers.cloudflare.com/d1/best-practices/import-export-data/)).
  - R2 has an S3-compatible API ([R2 pricing](https://developers.cloudflare.com/r2/pricing/)), so photos can be copied out with standard tools.
- **Learning curve:** medium. There is one vendor and one dashboard. In exchange, the pieces are assembled by hand: framework, Drizzle for the database, Better Auth for sign-in, Resend for email. Workers is not quite Node.js, which is why `nodejs_compat` is needed.
- **Lock-in:** medium-low. The data leaves as a SQL file and S3-style files. The code is tied to Workers "bindings" (how the app reaches D1 and R2), but React Router and Better Auth are portable.

### 2. Next.js on Vercel + Supabase (Postgres + Auth), with photos on R2

**In plain language:** **Next.js** is the most widely used React full-stack framework, and **Vercel** (the company behind it) hosts it. **Supabase** is a hosted Postgres database that comes with sign-in and file storage. Supabase's free file storage is too small for 5,000 photos, so the photos would go in Cloudflare R2.

- **Cost:**
  - Supabase Free is $0 with a 500 MB database, **1 GB file storage**, 5 GB egress and 50,000 monthly active users. Pro starts at **$25/month** ([Supabase pricing](https://supabase.com/pricing)), which is over the ceiling.
  - Vercel Hobby is $0 with 100 GB transfer, 1M function calls and 5K image transformations a month. Hobby cannot buy more usage ([Vercel pricing](https://vercel.com/pricing)). It is for "non-commercial personal use only" ([Vercel fair use](https://vercel.com/docs/limits/fair-use-guidelines)). A private family site fits that, as long as no one is paid to build or host it.
  - R2 for 15 GB of photos is about $0.08/month (see option 1). Resend Free covers email.
  - **Estimate at target size: about $0/month,** but only because the photos are moved off Supabase. Keeping photos on Supabase would mean Pro at $25.
- **Auth fit:**
  - Supabase magic links are built in. Setting `shouldCreateUser: false` stops automatic sign-up ([Supabase passwordless](https://supabase.com/docs/guides/auth/auth-email-passwordless)). Links expire after 1 hour by default, and a user can request one every 60 seconds.
  - The built-in email sender only delivers to the project's own team, at 2 messages an hour. **Custom SMTP (an email-sending service such as Resend) is required** for magic links in production ([Supabase SMTP](https://supabase.com/docs/guides/auth/auth-smtp)).
  - Sessions last until sign-out by default. Refresh tokens "never expire". Time-boxed sessions and inactivity timeouts are **Pro only** ([Supabase sessions](https://supabase.com/docs/guides/auth/sessions)). On Free, a strict 180-day limit would have to be enforced in app code.
  - Enumeration: the sign-in request has to run on the server, and its errors must not reach the browser. Supabase's error list includes `signup_disabled` ([Supabase error codes](https://supabase.com/docs/guides/auth/debugging/error-codes)), so the server must reply "Check your email" whatever happens.
- **Photos:**
  - Supabase image transformations are **Pro only**, at $5 per 1,000 origin images after 100 included. They accept HEIC as input only ([Supabase image transformations](https://supabase.com/docs/guides/storage/serving/image-transformations)).
  - Vercel Image Optimization optimizes only JPEG, PNG, WebP and AVIF. "Other formats will be served as-is", so **HEIC would not be resized**. Past the Hobby limit, new images fail with a 402 error ([Vercel image limits](https://vercel.com/docs/image-optimization/limits-and-pricing)).
  - In practice this option needs HEIC converted in the browser or at upload, or Cloudflare Images in front of R2. Either way, the "two vendors" become three.
- **Backups and export:**
  - Free has **no automatic backups**. Supabase recommends free projects "regularly export their data" with `supabase db dump` ([Supabase backups](https://supabase.com/docs/guides/platform/backups)).
  - Backups never include Storage files.
  - Postgres is the most portable database there is.
- **Risk:** "Free projects are paused after 1 week of inactivity" ([Supabase pricing](https://supabase.com/pricing)). A paused project can be restored from the dashboard ([Supabase upgrading](https://supabase.com/docs/guides/platform/upgrading)), but a quiet week in the family would take the site offline until someone restores it.
- **Learning curve:** lowest for the first screens. Next.js and Supabase have the most tutorials, and the Supabase dashboard shows tables like a spreadsheet. The extra pieces (R2, SMTP, HEIC handling, homemade backups) add work back.
- **Lock-in:** low for data (Postgres and S3-style files). It is medium for code if it leans on Supabase-specific features such as Row Level Security rules and its client library.

### 3. PocketBase on Fly.io (+ React SPA, Resend)

**In plain language:** **PocketBase** is one small program (about 12 MB) that contains a SQLite database, sign-in, file storage and an admin dashboard. It runs on a small rented server. **Fly.io** is one company that rents such servers. The React app is a plain single-page app (SPA): one bundle of browser code that talks to PocketBase's API.

- **Maturity warning:** the docs say PocketBase is "not yet v1.0.0", backward compatibility isn't guaranteed, and it is "NOT recommended for production critical applications yet". The current version is v0.41.0 ([PocketBase docs](https://pocketbase.io/docs/)).
- **Cost:**
  - Fly.io has **no free tier for new organizations**. The smallest machine is $2.19/month (256 MB) or $3.69/month (512 MB), and disk volumes cost $0.15/GB-month ([Fly.io pricing](https://docs.fly.io/about/pricing)).
  - 15 GB of photos on a volume adds about $2.25. PocketBase can store files in an S3-compatible bucket instead ([PocketBase files](https://pocketbase.io/docs/files-handling/)), but R2 isn't in its example list.
  - **Estimate at target size: about $4–6/month.**
- **Auth fit:**
  - PocketBase supports password, **OTP** (a one-time code by email), OAuth2 and MFA. Magic links are not listed. Its OTP request returns an id even for unknown emails, which the docs call "a very rudimentary enumeration protection" ([PocketBase auth](https://pocketbase.io/docs/authentication/)).
  - A code rather than a link changes the sign-in screens in `prompts/01-wireframe.md`.
  - The auth docs read did not say how to set token lifetime.
  - SMTP is "strongly recommended" for production ([PocketBase production](https://pocketbase.io/docs/going-to-production/)).
- **Photos:** thumbnails come from `?thumb=WxH` but are "limited to jpg, png, gif … and partially webp". **There is no HEIC support** ([PocketBase files](https://pocketbase.io/docs/files-handling/)).
- **Relational fit:** relation fields hold record IDs. Rules can follow them, "including back-relations" ([PocketBase collections](https://pocketbase.io/docs/collections/)).
- **Backups:** there is a built-in ZIP snapshot of `pb_data`, stored locally or in an S3 bucket. Large data (about 5 GB or more) "may need a different strategy" ([PocketBase production](https://pocketbase.io/docs/going-to-production/)). Photos cross that size.
- **Learning curve:** least code, but the most operations work. The driver becomes responsible for a Linux server, disk space, restarts and upgrades through pre-1.0 breaking changes.
- **Lock-in:** low. It is open source, and the data is a SQLite file on a disk you control.

### Not shortlisted: Firebase

- The no-cost **Spark plan does not include Cloud Storage** ([Firebase pricing](https://firebase.google.com/pricing)).
- Spark caps email sign-in links at **5 a day** ([Firebase Auth limits](https://firebase.google.com/docs/auth/limits)).
- The pay-as-you-go Blaze plan lifts both limits, but Firestore "is a NoSQL, document-oriented database … there are no tables or rows" ([Firestore data model](https://firebase.google.com/docs/firestore/data-model)). That conflicts with the requirement for a relational store of People and links.

### Not shortlisted: SvelteKit

SvelteKit would mean learning a new UI language on top of everything else, with no V1 feature that needs it. React-based options cover the same ground. This is a judgement call, not a sourced fact.

## Comparison at a glance

| | 1. Cloudflare all-in | 2. Next.js + Supabase (+R2) | 3. PocketBase on Fly |
|---|---|---|---|
| Monthly cost at 100 Members / 5,000 photos | $0–5 | about $0 (photos on R2), $25 if on Supabase | about $4–6 |
| Invite-only magic links | Yes, `disableSignUp` | Yes, `shouldCreateUser: false` + SMTP | OTP code, not link |
| 180-day session | Set directly | Indefinite by default; limit is Pro-only | Not confirmed |
| No email enumeration | App must reply the same way (to verify) | Server must hide errors | Built-in, "rudimentary" |
| Resized photos for phones, incl. HEIC | Yes (Images, HEIC input) | Needs extra work (no HEIC on Vercel; Supabase Pro) | No HEIC thumbs |
| Automatic backups on the cheap tier | DB: 7 days (30 on $5) | None; manual `db dump` | ZIP snapshots; strain above 5 GB |
| Data export | SQL file + S3 | Postgres dump + S3 | SQLite file |
| Number of vendors | 2 (Cloudflare, Resend) | 4 (Vercel, Supabase, Cloudflare, Resend) | 2–3 (Fly, Resend, maybe a bucket) |
| Beginner learning curve | Medium | Low at start, rises | Low code, high operations |
| Biggest risk | Assembling auth yourself | Free project pauses after 1 quiet week | Pre-1.0; you run the server |

## Ranked shortlist

1. **Cloudflare all-in (React Router + D1 + R2 + Images + Better Auth + Resend). Recommended.**
   - *Wins:* it is the only option where every hard requirement (invite-only links, 180-day sessions, HEIC photos resized for phones, point-in-time backups) is met inside the free or $5 tier. It never pauses, and photo egress is free.
   - *Costs:* more parts to wire together by hand. D1 is SQLite rather than Postgres. The Namecheap nameservers must move to Cloudflare.
2. **Next.js on Vercel + Supabase, with photos on R2.**
   - *Wins:* the gentlest start and the most tutorials, Postgres with a spreadsheet-like dashboard, and built-in magic links.
   - *Costs:* the free project pauses after a week without activity. There are no automatic backups. Photos and HEIC need a second and third vendor. Session limits and image transformations sit behind the $25 Pro plan, which breaks the ceiling.
3. **PocketBase on Fly.io.**
   - *Wins:* the least code, one self-contained program, and full ownership of the data.
   - *Costs:* pre-1.0 with an explicit "not for production critical" warning. It costs money from day one, has no HEIC thumbnails, and uses sign-in codes rather than links. The driver also becomes a server administrator.

**Why option 1 is recommended:** losing the tree would be the worst possible failure (issue #1, "Backups and data export"), and option 1 is the only one with automatic point-in-time database backups at $0–5. It also handles iPhone photos without extra code and stays under the $10 ceiling as photos grow. The price is a steeper first week, and the learning notes in `docs/learn/` can absorb that.

## Open questions for the grilling ticket

- With Better Auth and `disableSignUp`, is the response for an unknown email the same as for a Member's email? Prototype it. Whatever the answer, the app should always show "Check your email".
- Do iPhone browsers already convert HEIC to JPEG when a file is picked for upload? If so, the HEIC differences between the options shrink.
- Is $5/month for Workers Paid (30-day Time Travel instead of 7) worth paying from day one, given the "worst failure" framing?
- Off-site backups: a scheduled job (for example GitHub Actions) that runs `wrangler d1 export` or `supabase db dump` and copies R2 elsewhere. This is needed whichever option is chosen.

## Notes

- `GLOSSARY.md` does not exist yet. Domain terms here (Member, Person, Invitation, Family site) follow issue #1.
- Third-party write-ups seen while searching were not used as sources.

## Sources (all accessed 2026-10-26)

- Cloudflare: [Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/), [D1 pricing](https://developers.cloudflare.com/d1/platform/pricing/), [D1 Time Travel](https://developers.cloudflare.com/d1/reference/time-travel/), [D1 import/export](https://developers.cloudflare.com/d1/best-practices/import-export-data/), [R2 pricing](https://developers.cloudflare.com/r2/pricing/), [Images pricing](https://developers.cloudflare.com/images/pricing/), [Images limits](https://developers.cloudflare.com/images/get-started/limits/), [Images features](https://developers.cloudflare.com/images/optimization/features/), [Transform images](https://developers.cloudflare.com/images/transform-images/), [React Router on Workers](https://developers.cloudflare.com/workers/framework-guides/web-apps/react-router/)
- Remix / React Router: [Merging Remix and React Router](https://remix.run/blog/merging-remix-and-react-router)
- Better Auth: [Magic link](https://www.better-auth.com/docs/plugins/magic-link), [Session management](https://www.better-auth.com/docs/concepts/session-management), [Installation](https://www.better-auth.com/docs/installation)
- Drizzle: [Cloudflare D1](https://orm.drizzle.team/docs/connect-cloudflare-d1)
- Resend: [Pricing](https://resend.com/pricing)
- Supabase: [Pricing](https://supabase.com/pricing), [Passwordless email](https://supabase.com/docs/guides/auth/auth-email-passwordless), [Sessions](https://supabase.com/docs/guides/auth/sessions), [Custom SMTP](https://supabase.com/docs/guides/auth/auth-smtp), [Auth error codes](https://supabase.com/docs/guides/auth/debugging/error-codes), [Image transformations](https://supabase.com/docs/guides/storage/serving/image-transformations), [Backups](https://supabase.com/docs/guides/platform/backups), [Upgrading / paused projects](https://supabase.com/docs/guides/platform/upgrading)
- Vercel: [Pricing](https://vercel.com/pricing), [Fair use guidelines](https://vercel.com/docs/limits/fair-use-guidelines), [Image Optimization limits](https://vercel.com/docs/image-optimization/limits-and-pricing)
- PocketBase: [Introduction](https://pocketbase.io/docs/), [Authentication](https://pocketbase.io/docs/authentication/), [Files](https://pocketbase.io/docs/files-handling/), [Collections](https://pocketbase.io/docs/collections/), [Going to production](https://pocketbase.io/docs/going-to-production/)
- Fly.io: [Pricing](https://docs.fly.io/about/pricing)
- Firebase: [Pricing](https://firebase.google.com/pricing), [Auth limits](https://firebase.google.com/docs/auth/limits), [Firestore data model](https://firebase.google.com/docs/firestore/data-model), [Email link auth](https://firebase.google.com/docs/auth/web/email-link-auth)
- Namecheap: [Pointing a domain to Cloudflare](https://www.namecheap.com/support/knowledgebase/article.aspx/9607/2210/how-to-set-up-dns-records-for-your-domain-in-a-cloudflare-account/)
