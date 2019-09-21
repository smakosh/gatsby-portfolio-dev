# Portfolio for developers

[![Netlify Status](https://api.netlify.com/api/v1/badges/57c04515-1d1b-46e8-b531-213fabca9cc4/deploy-status)](https://app.netlify.com/sites/gatsby-portfolio-dev/deploys)

## Theme
[Gatsby-theme-portfolio](https://github.com/smakosh/gatsby-theme-portfolio)

## Features

- Eslint/Prettier configured
- Scores 100% on a11y / Performance / PWA / SEO
- PWA (desktop & mobile)
- Easy to customize
- Nice project structure
- Amazing illustrations by [Undraw.co](https://undraw.co)
- Tablet & mobile friendly
- Continuous deployment with [Netlify](https://netlify.com)
- A contact form protected by Google Recaptcha
- Can be deployed with one click
- Functional components with ~~Recompose~~ React Hooks! ~~ready to migrate to React hooks!~~
- Fetches your Github pinned projects with most stars (You could customize this if you wish)

## Design

Project on [Behance](https://www.behance.net/gallery/74172961/Free-Gatsby-portfolio-for-developers)

## Structure

```bash
.
├── data
│   └── config              # SEO related tags
├── src
│   ├── components          # Components
│   │   │── common          # Common components
│   │   │── landing         # Components used on the landing page
│   │   └── theme           # Header & Footer
│   └── pages               # Pages
└── static                  # Icons, favicon & SVG illustrations
```

## Prerequisites

[Yarn](https://yarnpkg.com/en/)

Please create a new file `.env.development` and put this env variable with your GitHub token

> If you're building locally, you will have to create a new file `.env.production` and put the same env variable

```bash
GITHUB_TOKEN=xxxxxxxxxx
```

Don't forget to edit your site's data on `data/config.js` file with your Google Recaptcha public key

When deploying on Netlify, you will have to set the private key as well

```bash
SITE_RECAPTCHA_KEY=xxxxx

SITE_RECAPTCHA_SECRET=xxxxx
```

I highly recommend you check this [repository](https://github.com/imorente/gatsby-netlify-form-example) for more details about the Google Recaptcha and Netlify forms

## Installing

Installing the dependencies

```bash
yarn
```

## Start the dev server

```bash
yarn start
```

### Clean the cache

This removes the `.cache/` & `public/` folders

```bash
yarn reset
```

## Built with

- Adobe XD
- Gatsby
- React & GraphQL
- VSCode
- And these useful of JavaScript libraries & Gatsby plugins [package.json](package.json)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Contributors

- [Ajay NS](https://github.com/ajayns) https://github.com/smakosh/gatsby-portfolio-dev/pull/3
- [Ryan Lee](https://github.com/drdgvhbh) https://github.com/smakosh/gatsby-portfolio-dev/pull/6
- [David](https://github.com/davidavz) https://github.com/smakosh/gatsby-portfolio-dev/pull/8
- [Myself](https://smakosh.com)

## Support

If you love this Gatsby template and want to support me, you can do so through my Patreon

[![Support me on Patreon](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/smakosh)
