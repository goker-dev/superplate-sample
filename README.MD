# A SAMPLE PROJECT

This project was generated with [superplate](https://github.com/pankod/superplate).
[openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen)

## Getting Started

superplate is a Next.js all-in-one project generator. 
Create your project with the tools you need without spending hours on setting them up.

You __SHOULD__ add these packages fist.

```bash
pnpm add -D openapi-typescript-codegen fs request
pnpm add axios react-hook-form iron-session @tailwindcss/forms
```

And then, you __SHOULD__ edit the _generator.js_ file.

So now, __you can generate__ your base api by
```bash
pnpm run codegen
```

The script   download the spec.json and generate the openapi base (models, schemas, services) under the _/rest_ folder.

After then, you can create your api calls under the _pages/api/_ folder.


## Available Scripts

### Running the development server.

```bash
    pnpm dev
```

### Building for production.

```bash
    pnpm build
```

### Running the production server.

```bash
    pnpm start
```

## Learn More

To learn more about **superplate**, please check out the [Documentation](https://github.com/pankod/superplate).

### **TailwindCSS**

A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

[Go To Documentation](https://tailwindcss.com/docs)

### **SASS/SCSS**

Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax.

[Go To Documentation](https://sass-lang.com/documentation)

### **Fetch**

Next.js has a built-in polyfill for the fetch API. You don&#39;t need to worry about using it on either server or client side.

[Go To Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

### **Storybook**

Storybook is an open source tool for developing UI components in isolation for React, Vue, Angular, and more. It makes building stunning UIs organized and efficient.

[Go To Documentation](https://storybook.js.org/docs/react/get-started/introduction)

### **SVGR**

Transform SVGs into React components.

[Go To Documentation](https://react-svgr.com/docs/getting-started/)

### **Environment Variables**

Use environment variables in your next.js project for server side, client or both.

[Go To Documentation](https://github.com/vercel/next.js/tree/canary/examples/environment-variables)

### **Reverse Proxy**

Proxying some URLs can be useful when you have a separate API backend development server and you want to send API requests on the same domain.

[Go To Documentation](https://webpack.js.org/configuration/dev-server/#devserverproxy)

### **Bundle Analyzer**

Use webpack-bundle-analyzer in your Next.js project. Visualize size of webpack output files with an interactive zoomable treemap.

[Go To Documentation](https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer)

### **SWR**

React Hooks library for data fetching from Vercel

[Go To Documentation](https://swr.vercel.app/)

### **React Query**

Hooks for fetching, caching and updating asynchronous data in React.

[Go To Documentation](https://react-query.tanstack.com/overview)

### **react-use**

A Collection of useful React hooks.

[Go To Documentation](https://github.com/streamich/react-use)

### **React Redux**

Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.

[Go To Documentation](https://redux.js.org/introduction/getting-started)

### **RTK Query**

RTK Query is a powerful data fetching and caching tool

[Go To Documentation](https://redux-toolkit.js.org/rtk-query/overview)

### **next-i18next**

next-i18next is a plugin for Next.js projects that allows you to get translations up and running quickly and easily, while fully supporting SSR, multiple namespaces with codesplitting, etc.

[Go To Documentation](https://github.com/isaachinman/next-i18next)

### **ESLint**

A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. Maintain your code quality with ease.

[Go To Documentation](https://eslint.org/docs/user-guide/getting-started)

### **Prettier**

An opinionated code formatter; Supports many languages; Integrates with most editors.

[Go To Documentation](https://prettier.io/docs/en/index.html)

### **lint-staged**

The concept of lint-staged is to run configured linter (or other) tasks on files that are staged in git.

[Go To Documentation](https://github.com/okonet/lint-staged)

### **Testing Library**

The React Testing Library is a very light-weight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils.

[Go To Documentation](https://testing-library.com/docs/)

### **Cypress**

Fast, easy and reliable testing for anything that runs in a browser.

[Go To Documentation](https://docs.cypress.io/guides/overview/why-cypress.html)

### **Docker**

Docker simplifies and accelerates your workflow, while giving developers the freedom to innovate with their choice of tools, application stacks, and deployment environments for each project.

[Go To Documentation](https://www.docker.com/get-started)

### **Github Actions**

GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub.

[Go To Documentation](https://docs.github.com/en/actions)

### **pnpm**

[Go To Documentation]()

## License

MIT
