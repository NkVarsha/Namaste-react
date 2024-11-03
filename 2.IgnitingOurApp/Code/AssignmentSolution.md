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
- 2. Tree Shaking
- 3. Differential Bundling
- 4. Diagnostics
- 5. Image Optimization

**Differential Bundling:** When we use <script type="module"> parcel automatically generates nomodule fallback for old browsers as well, depending on your browser target. 
This results in much smaller bundles for a majority of users in modern browsers, while still supporting older browsers as well!
**Diagnostics:** If you make any error in your code, then parcel displays beautiful diagnostics in the terminal and browser as well. Displays in which line error occured and how to fix them.
**Image Optimization:** Parcel supports resizing, converting, and optimizing images! Just pass query parameters for the format and size you need when referencing the image file in your HTML, CSS, JavaScript, etc.
You can even request multiple sizes or formats of the same source image for different devices or browsers!

## Ques): What is `.gitignore`? What should we `add and not add` into it?
**Ans:** The `.gitignore file` is a text file that tells `Git` which files or folders to `ignore` in a project during `commit to the repository`.<br/>
The types of files you should consider adding to a .gitignore file are any files that do not need to get committed. for example, For security, the security key files and API keys should get added to the gitignore.<br/>
`package.json` and `package-lock.json` should `not add` into your `.gitignore` file.<br/>

The entries in this file can also follow a matching pattern.
```
  * is used as a wildcard match
  / is used to ignore pathnames relative to the .gitignore file
  # is used to add comments to a .gitignore file
```

This is an example of what the .gitignore file could look like:
```
  # Ignore Mac system files
  .DS_store

   # Ignores the node_modules folder only at the root level
  node_modules/

  # Ignores any file or folder named node_modules anywhere in the repo     
  node_modules       

  # Ignore all text files
  *.txt

  # Ignore files related to API keys
  .env

  # Ignore SASS config files
  .sass-cache
```



## Ques): Difference between `package.json` and `package-lock.json`?
**Ans:**

| Feature               | `package.json`                               | `package-lock.json`                                    |
|-----------------------|----------------------------------------------|--------------------------------------------------------|
| **Purpose**           | Project metadata and high-level dependencies | Locks exact versions of all dependencies               |
| **Version Control**   | Stores version ranges                        | Stores exact versions                                  |
| **Created/Updated by**| Developers manually                          | Automatically by npm                                  |
| **Usage**             | Required to define a Node project            | Used for reproducible builds and dependency locking    |

**~** or **^** in `package.json` file :
These are used with the versions of the package installed.

For example  in `package.json` file:
```json
  "dependencies": {
      "react": "^18.2.0",
      "react-dom": "^18.2.0"
  }
```

* **~** : `Approximately equivalent to version`, will update you to all future patch versions, without incrementing the minor version.
* **^** : `Compatible with version`, will update you to all future minor/patch versions, without incrementing the major version.

> If none of them is present, that means only the version specified in `package.json` file is used in the development.

## Ques): Why should I not modify `package-lock.json`?
**Ans:** `package-lock.json` file contains the information about the dependencies and their versions used in the project. Deleting it would cause `dependencies issues` in the production environment. So don't modify it, It's being handled automatically by NPM.

## Ques): What is `node_modules` ? Is it a good idea to push that on git?
**Ans:** The `node_modules` folder contains all the installed dependencies (packages) required by a Node.js project.

**It’s not recommended** to push `node_modules` to Git because:

1. It’s large and can bloat the repository.
2. Dependencies can be recreated from `package.json` and `package-lock.json`, ensuring consistent installs without needing `node_modules`.

Instead, add `node_modules` to your `.gitignore` file to keep the repository clean and manageable.

## Ques): What is the `dist` folder?
**Ans:** The `/dist` folder contains the minimized version of the source code. The code present in the `/dist` folder is actually the code which is used on production web applications. Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.


## Ques): What is `browserslist`?
**Ans:** `Browserslist` is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.
