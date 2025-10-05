# The Dating Cheatsheet

Welcome to **The Dating Cheatsheet** – the ultimate tea-spilling platform for relationships. 🚨 Got a cheating ex? Wanna make sure the person you are currently chatting with isn’t hiding a shady past? This site's got you covered. 

Here, you can share and check out stories about people who’ve been caught cheating. The goal? To keep it real, promote honesty, and help everyone dodge unnecessary heartbreak. 💔✨

**Disclaimer:** Keep it 100% truthful and respectful. This isn’t a place for drama, harassment, or fake accusations. 

<hr></hr>
</br>

### For developers

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

#### `npm run deploy`

This app is currently deployed with gh-pages and live at https://jasmineishere.github.io/the-dating-cheatsheet/

### Getting Started with gh-pages

1. Install the gh-pages package: In your project's root, run npm install gh-pages --save-dev.

2. Edit your package.json file:

    - Add a homepage property with your repository URL. For a project site, the format is "https://your-username.github.io/your-repo-name". For a user site, use "https://your-username.github.io".
    - Add predeploy and deploy scripts to the scripts section:
    ```json
    "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
    }
    ```

3. Run the deploy command: Run `npm run deploy` in your terminal. This will build your app and push it to a new gh-pages branch on your repository.

4. Configure GitHub Pages:
    - In your GitHub repository, go to Settings > Pages.
    - Under "Source," choose the gh-pages branch and click Save.
    - Your site will be live at the URL specified in your homepage property.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
