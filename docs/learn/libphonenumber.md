# libphonenumber

**What it is:** a free, open-source library from Google that knows how phone numbers are written in every country: country codes, area codes, valid lengths and the usual spacing. It's the same library Android uses. There's a JavaScript/TypeScript port (`libphonenumber-js`).

**How Origine uses it:** when a Member types a phone number on a Person's Contact details, the library checks that it's a real number for its country:

- A number starting with `0` is read as Romanian (`0721 234 567` → `+40 721 234 567`).
- A foreign number must start with `+` and its country code (for example `+39` for Italy).
- Invalid numbers are refused with a plain hint.

The number is **stored** in international form (called E.164, e.g. `+40721234567`), so every number has one unambiguous spelling, and **shown** grouped the way that country normally writes it.

**Why not just check for digits?** Romanian and foreign numbers differ in length and area codes, so a simple "digits only" rule would accept typos and reject valid foreign numbers.
