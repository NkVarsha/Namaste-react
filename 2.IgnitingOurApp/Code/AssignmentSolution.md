# Assignment-02

## Ques): What is NPM?
**Ans:** It is a tool used for package management and the default package manager for Node projects. <br/>
`NPM is installed when NodeJS` is installed on a machine. It comes with a command-line interface (CLI) used to interact with the online database of NPM. This database is called the NPM Registry, and it hosts public and private 'packages.' To add or update packages, we use the NPM CLI to interact with this database. 
- `npm` alternative is `yarn`

### How to initialize `npm`?
```sh
  npm init
```
`npm init -y` can be used to skip the setup step, `npm` takes care of it and creates the `package.json` json file automatically , but without configurations.

## Ques): What is `Parcel/Webpack`? Why do we need it?
**Ans:** Parcel and Webpack are web application bundlers that simplify the development and production of applications. They offer fast performance using multicore processing and require minimal configuration to get started. While Parcel can work with various file types, it’s best to start with an HTML or JavaScript file.
### Features of Parcel:
- **Hot Module Replacement (HMR)**: Parcel tracks file changes and updates your application in real-time without needing a full reload.
- **File Watcher Algorithm**: Built using C++, it monitors changes to files efficiently.
- **Minification**: Reduces file sizes by removing unnecessary characters from your code.
- **Code Cleaning**: Helps improve code quality by removing unused code.
- **Development and Production Builds**: Easily create builds for different environments.
- **Super Fast Build Algorithm**: Optimizes build times for efficiency.
- **Image Optimization**: Automatically optimizes images for better performance.
- **Caching During Development**: Speeds up the development process by caching files.
- **Compression**: Compresses files for improved loading times.
- **Compatibility with Older Browsers**: Ensures your application works on older versions of web browsers.
- **HTTPS in Development**: Provides secure connections during development.
- **Port Number Configuration**: Allows you to specify which port to use.
- **Consistent Hashing Algorithm**: Ensures reliable file management.
- **Zero Configuration**: Minimal setup is needed to start using Parcel.
- **Automatic Code Splitting**: Splits your code into smaller chunks for better performance.

### Installation Commands
To install Parcel, use the following command:

```bash
npm install -D parcel
```
(The -D flag indicates that Parcel is a development dependency.)
Parcel Commands:

For a development build, use:

```bash

npx parcel <entry_point>
```

For a production build, use:

```bash
npx parcel build <entry_point>
```
These commands help streamline the process of building and running your applications with Parcel.


## Ques):  What is `.parcel-cache`?
**Ans:** `.parcel-cache` is used by parcel(bundler) to reduce the building time.<br/>
It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.


## Ques):  Difference between Dependencies and devDependencies?
**Ans:**

### Dependencies

- **Purpose:** Packages required for the application to run in production.
- **Installation:** Installed by default when running npm install. Necessary for deployed applications.
- **Example:** Libraries like Express.js or React.

### devDependencies

- **Purpose:** Packages needed only during development, such as testing or build tools.
- **Installation:** Installed by default unless the --production flag is used. Not required in production environments.
- **Example:** Tools like Jest, ESLint, or Webpack.

### Summary

- **Dependencies:** Essential for production.
- **devDependencies:** Only needed for development tasks.

## Ques):  What is Tree Shaking?
**Ans:** Tree shaking is a JavaScript technique that removes unused code from JavaScript bundles to make code more efficient and faster-loading. It's an important step in preparing code for production. 

Tree shaking uses import and export statements to identify which code modules are imported and exported between JavaScript files. It starts at the entry point and only includes functions that are likely to be executed

## What is HRM (Hot Module Replacement)?
**Ans:** Hot Module Replacement (HMR) is a feature in JavaScript bundlers that enables live updates of modules in a running application without a full page reload. It enhances development speed by preserving application state and allowing real-time code changes to be applied instantly in the browser.

## Ques): List down your favorite `5 superpowers of Parcel` and describe any 3 of them in your own words.
**Ans:** `5 superpowers of Parcel`:

- 1. Hot Module Replacement
  2. Tree Shaking
  3. Differential Bundling
  4. Diagnostics
  5. Image Optimization
 
