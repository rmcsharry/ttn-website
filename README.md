# The Thorium Network website

Built using Gatsby (a ReactJs based static site generator)


Static sites are scalable, secure and have very little required maintenance. They come with a drawback though. Not everybody feels good editing files, building a project and uploading it somewhere. This is where Contentful comes into play!

This website uses [Contentful](https://www.contentful.com) for generating content inside Gatsby.

With Contentful and Gatsby you can connect your favorite static site generator with an API that provides an easy to use interface for people writing content and automate the publishing using services like [Travis CI](https://travis-ci.org/) or [Netlify](https://www.netlify.com/).

## Contentful features - a must read

* Simple content model and structure. Easy to adjust to your needs.
* Contentful integration using our [Sync API](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/synchronization/initial-synchronization-of-entries-of-a-specific-content-type)
* Using our [Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/).
* Responsive/adaptive images via [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/)

## Contribution

Speak to TTN CTO.

## Requirements

To use this project you have to have a Contentful account. If you don't have one yet you can register at [www.contentful.com/sign-up](https://www.contentful.com/sign-up/).

## Getting started

Install Gatsby:
`npm install -g gatsby`

### Get the source code and install dependencies.

```
$ git clone <repo url>
$ npm install
```

Learn to use the [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli).

## Crucial Commands

This project comes with a few handy commands for linting and code fixing. The most important ones are the ones to develop and ship code. You can find the most important commands below.

### `npm run dev`

Run in the project locally.

### `npm run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `npm run deploy` - TODO: we need to change this to deploy to Netlify

Run a production build into `./public` and publish the site to GitHub pages.

### `npm run cleanup-repository`

Removes all dependencies, scripts and data from the installation script.

## Roadmap

TBD
