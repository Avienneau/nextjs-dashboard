## Next JS Dashboard + Playwright E2E by Aaron Vienneau

The `nextjs-dashboard` project is an demonstrative application using nextjs, tailwind, and postgres to build an interactive invoice tracking dashboard, complete with authentication and authorization. This project also uses `playwright` to perform end-to-end testing to ensure proper application functionality. You can view the application [here](https://nextjs-dashboard-three-steel-99.vercel.app/). 

### Features

* Complete, production-quality application implemented with nextjs; built and deployed by Vercel.
* Heavily utilizes server-side rendering for faster response times and tighter security.
* Continuous integration environment setup via Vercel + Github actions.
* End-to-end testing with Playwright in both local and continuous integration environments.

### Local Build

`git clone` the `nextjs-dashboard` project to your local machine

```
git clone git@github.com:Avienneau/nextjs-dashboard.git
```

`cd ` into the newly cloned project

```
cd nextjs-dashboard
```

install the project dependencies

```
pnpm i
```

run the development server

```
pnpm dev
```

pnpm can be downlaoded [here](https://pnpm.io/installation). The console will output the port on which the application is running on localhost.

### Local Test

first, generate the `auth.json` file necessary to test the authenticated portions of the application

```
pnpm test:setup
```

then, run the tests headlessly

```
pnpm test
```
