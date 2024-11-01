# ***Assignment 01-(Inception)***
---
### 1. What is `Emmet`?
**Ans**: Emmet is a web development tool that uses shorthand to quickly expand HTML and CSS code boosting coding speed and efficiency. 

Ex:
Input:
```sh
div.container>ul>li*3
```
Output:
```html
<div class="container">
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>
```

### 2. What is `CDN`? Why do we `use` it?
**Ans:** 
- CDN stands for Content Delivery Network
- It is a network of servers distributed globally to deliver web content (Images, stylesheets,scripts and videos) to users from server nearest to their location. 
- Improves loading speed, reduces  latency and enhances User Experience.
-  To use react in HTML, we use react and react-dom CDN.

### 3. Why is `React known as React`?
 - It reacts quickly to changes without reloading the whole page.
 - Derived from the idea of components reacting to state changes.
 - It was designed to be declarative, efficient and flexible.

### 4. What is `crossorigin in script tag`?
The crossorigin attribute in a <script> tag tells the browser how to handle scripts that are loaded from a different website or server. It’s useful when loading scripts from places like CDNs (content delivery networks) or third-party sources.

Here's what the crossorigin options do:

**1.anonymous:** Loads the script without sending any extra login information (like cookies) along with the request. This is good for most public scripts where you don’t need special permissions.
```js
<script src="https://example.com/script.js" crossorigin="anonymous"></script>
```
**2.use-credentials:** Sends extra login information (like cookies) with the script request. This is only needed if the other server specifically requires it to allow access.

```js
<script src="https://example.com/script.js" crossorigin="use-credentials"></script>
```
You’d use crossorigin to ensure the script loads correctly and securely, especially if it’s from another server or website.
### 5. What is difference between `React and ReactDOM`?
The difference between React and ReactDOM lies in their roles within a React application:

**React:** This is the core library of React, which provides the tools and functions for creating components, managing component state, and defining the component lifecycle. Essentially, React lets you build and structure the user interface. For example, functions like React.createElement, useState, and useEffect are all part of React.

```js
import React from 'react';
function App() {
    return <h1>Hello, world!</h1>;
}
```

**ReactDOM:** This library handles rendering React components to the actual DOM (Document Object Model) on web browsers. ReactDOM has methods specific to working with the browser DOM, such as ReactDOM.render, which attaches a React component tree to a specific element in the HTML document (usually a div with id="root").

```js
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```
**Summary:**
- React is for building UI components and managing state.
- ReactDOM is for rendering those components to the web page in the browser.



### 6. What is difference between `react.development.js` and `react.production.js` files via CDN?
The difference between react.development.js and react.production.js files lies in their purpose and optimizations:

1. **react.development.js:** This is the development version of React. It includes helpful warnings, error messages, and developer tools to assist with debugging. It’s designed to make it easier to catch mistakes during the development process. However, this file is larger and slower because of all the extra debugging information, so it’s not suitable for live, production websites.

2. **react.production.js:** This is the production version of React. It’s optimized to be smaller and faster by removing development-only features like detailed error messages and warnings. This version is intended for deployment, so it’s the recommended file to use in live environments to improve performance and reduce file size.

Summary:

 -   **Development file** (react.development.js): Bigger, with extra debugging tools for development.
 -   **Production file** (react.production.js): Smaller and optimized for performance, intended for live sites.

### 7.Library Vs FrameWork

**Ans:**
 -   Frameworks and libraries are both code written by someone else that helps you perform some common tasks in a less verbose way.

-  A framework inverts the control of the program. It tells the developer what they need. A library doesn’t. The programmer calls the library where and when they need it.

  -  The degree of freedom a library or framework gives the developer will dictate how “opinionated” it is.
