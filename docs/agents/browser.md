# Browser access

Agents drive a real browser through the Playwright MCP server declared in `.mcp.json`. Its tools are named `mcp__playwright__browser_*`. Common ones are `browser_navigate`, `browser_snapshot`, `browser_click`, `browser_take_screenshot` and `browser_resize`.

- The server is pinned to `@playwright/mcp@0.0.83` and uses Playwright's bundled Chromium. Each MCP release expects one specific Chromium build, so `@latest` breaks as soon as a new release comes out.
- One-time setup per machine (no sudo needed): `npx -y @playwright/mcp@0.0.83 install-browser chrome-for-testing`. Run it again whenever you bump the pinned version.
- The browser window is headed. On WSL it opens through WSLg. Add `"--headless"` to the args if no display is available.
- Origine is mobile-first, so check layouts at phone width with `browser_resize` to 390×844.
- Snapshots and screenshots are written to `.playwright-mcp/`, which git ignores.
