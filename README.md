# Cloudflare Datamining

## Intro

This repository mines a lot of publicly available data from [Cloudflare](https://www.cloudflare.com/), including their customer dashboard, NPM/GitHub repos, marketing site, and more. Automated commits will be made frequently and will show how the data changes over time.

Some of the data can be visualised on the [website](https://cfdata.lol).

You can join the [Discord](https://discord.gg/Z94Hn6qVDm) for notifications of changes.

## Structure
- Scripts are in `scripts`
- Data is in `data`

## Data

- `account`: Tracks a free account's entitlements and flags
- `api-schemas`: This extracts the API schemas from `api.cloudflare.com`, and tracks their changes over time.
- `blog`: This tracks blog post content over time.
- `cdn-cgi`: This tracks various changes to `cdn-cgi` endpoints on Cloudflare's CDN, as well as `request.cf` keys for any additions or changes. This also tracks component changes throughout Cloudflare's network and their different datacenters.
- `coveo`: This tracks updates to the Coveo Cloudflare indexes, which are used for searching the blog, learning center, etc.
- `dashboard-subroutes`: This extracts subroutes from the dashboard which can be useful for determining undocumented APIs.
- `dashboard-translations`: This extracts the translations from the dashboard, and tracks their changes over time. This is useful for seeing new features and changes in the dashboard.
- `dashboard`: This extracts other miscellaneous data from the dashboard, and tracks their changes over time, including URLs, generic strings/callees/regexes, etc.
- `doh`: This tracks the DOH schema returned by 1.1.1.1
- `domains`: This tracks domains that Cloudflare owns. It's not perfect, but it does pick up a lot of domains owned by Cloudflare.
- `entitlements`: This isn't automated, but tracks a list of all known entitlements for accounts and zones.
- `icons`: This tracks the `@cloudflare/component-icon` NPM package.
- `gates`: This tracks the active gates used for A/B experiments on the dash, etc.
- `github-repos`: This tracks updates, additions, etc. to all GitHub repos under the Cloudflare org.
- `jobs`: This tracks Cloudflare job post listings, which can reveal upcoming projects.
- `marketing`: This extracts the raw JSON data for the marketing site, cloudflare.com.
- `other`: This tracks some other miscellaneous data (like IPs), not tracked by other scripts.
- `packages`: This tracks updates and any new packages owned by Cloudflare.
- `products`: This tracks specific products API endpoints and their response keys.
- `registrar`: This tracks Cloudflare Registrar available TLDs and pricing over time.
- `types`: This tracks the `@cloudflare/types` NPM package, which can be useful for spotting changes to new billing subscriptions, etc.
- `workerd`: This tracks various capnp schemas from `workerd`
- `zt-dashboard-translations`: This extracts the translations from the Zero Trust dashboard, and tracks their changes over time. This is useful for seeing new features and changes in the ZT dashboard.
- `zt-dashboard`: This extracts other miscellaneous data from the Zero Trust dashboard, and tracks their changes over time.

## Contributing

PRs are welcome! If you have an interesting Cloudflare account and would like to contribute your account/zone entitlements to grow the known list, please send me a JSON dump of your entitlements either via Discord (`CherryJimbo#0001`) or [Twitter (X)](https://twitter.com/cherryjimbo?lang=de) (`@CherryJimbo`).
