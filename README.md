# Google Chrome Extension React Tailwind Template

This is a template for building a Google Chrome extension using React and Tailwind CSS. The project is structured to streamline development and facilitate easy setup and deployment.

## Project Setup

Before starting, ensure that you've replaced the following placeholders with your project's information:

- `src/static/manifest.json`: Update the extension's metadata, including name, description, version, and permissions.
- `src/static/icon.png`: Replace with your own extension icon.
- `webpack.common.js`: Adjust paths or configurations if necessary.
- `package.json`: Modify the project name, version, author, and other relevant details.

## Installation

Clone the repository and navigate to the project directory:

```bash
git clone <your-repository-url>
cd google-chrome-extension-react-tailwind-template
```

## Running in DevContainer

This project supports running in a DevContainer for a consistent development environment.

### Steps to Reopen in Container

1. Make sure you have Docker installed and running on your system.
2. Open the project in Visual Studio Code.
3. If the project contains a `.devcontainer` directory with the necessary configuration files, you will see a popup at the bottom right corner of the screen.
4. Click on "Reopen in Container" when prompted.
5. If you don't see the prompt, you can manually reopen the project in the container:
   - Press `Ctrl+Shift+P` to open the command palette.
   - Type `Dev Containers: Reopen in Container` and select the option from the list.
6. VS Code will build the Docker container and reopen the project inside the container.

Once the container is running, you can proceed with development as usual by following the [Development](#development) instructions above.


Install the dependencies:

```bash
npm install
```

## Development

To start the development server, run:

```bash
npm start
```

This will start a local development server with live reloading enabled. You can view the changes in real-time as you develop your extension.

## Building for Production

To create a production build, run:

```bash
npm run build
```

This will generate the optimized files in the `/dist` directory, ready to be uploaded as a Chrome extension.

## Deploying the Extension

After building your extension, you'll find the files in the `/dist` directory. To deploy:

1. Open the Chrome browser and go to `chrome://extensions/`.
2. Enable "Developer mode" in the top right corner.
3. Click "Load unpacked" and select the `/dist` directory.

Your extension should now be loaded and ready to use in Chrome.

