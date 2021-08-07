# AsaurusEdu Mitra App

[![Lint Code Base](https://github.com/asaurusedu/educlient-mitraapp/actions/workflows/linter.yml/badge.svg)](https://github.com/asaurusedu/educlient-mitraapp/actions/workflows/linter.yml)
[![Deploy to Production Server](https://github.com/asaurusedu/educlient-mitraapp/actions/workflows/deploy.yml/badge.svg)](https://github.com/asaurusedu/educlient-mitraapp/actions/workflows/deploy.yml)
[![Code Analysis and Security Check](https://github.com/asaurusedu/educlient-mitraapp/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/asaurusedu/educlient-mitraapp/actions/workflows/codeql-analysis.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/70ba7425-0370-47a1-adb5-3964788d63dc/deploy-status)](https://app.netlify.com/sites/asaurusedu-mitraapp/deploys)

## Quick Description

AsaurusEdu Mitra App is an application used by partners in developing media and working with the AsaurusEdu team. This application is the main gateway for partners in completing their tasks as well as an information center related to the development of the AsaurusEdu platform.

## Working Features

Below is current supported features that in stable state and enough for production build.

### 1. Send Message To Discord

This app able to send user form input to the discord channel message using webhook. The application path is `GET /submit-materi`.

## Getting Started

To get started running the project locally, please follow the steps below.

First, clone the repository:

```bash
git clone https://github.com/asaurusedu/educlient-mitraapp.git
```

Then, install dependencies and fetch data to your local machine:

```bash
cd educlient-mitraapp
yarn install
```

Finally, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Frequently Used Tools

- [Measure Web Performance](https://web.dev/measure)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind UI](https://tailwindui.com/)
