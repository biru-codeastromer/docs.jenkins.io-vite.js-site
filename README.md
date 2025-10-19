# Jenkins Documentation Site (Vite.js Version)

This repository contains the source code for a modern version of the [Jenkins documentation website](https://www.jenkins.io/), built using Vite.js and React.

## Purpose

This project aims to provide a faster, more modern, and developer-friendly platform for Jenkins documentation and related content, including:

* Core Jenkins documentation
* Blog posts
* Security advisories
* Changelogs (Stable/LTS and Weekly)
* Event information
* Contributor guidelines
* And more related Jenkins project information (Awards, Artwork, Books, etc.)

This project is part of Google Summer of Code (GSoC) 2025, focusing on modernizing the Jenkins documentation infrastructure and improving the developer experience.

## Tech Stack

* **Framework:** React
* **Build Tool:** Vite
* **Styling:** Primarily Material UI (MUI) components and custom CSS
* **Routing:** React Router
* **Content:** Data often fetched from static JSON/YAML files
* **Web Components:** Uses `@jenkinsci/jenkins-io-components`

## Getting Started

### Prerequisites

* Node.js (check `package.json` for version compatibility if needed)
* npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running Locally

1.  Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    This command will also run pre-dev scripts (`scripts/blog-assets.mjs`).
2.  Open your browser to `http://localhost:3000` (or the port specified in `vite.config.js` or terminal output).

### Building for Production

1.  Run the build command:
    ```bash
    npm run build
    # or
    yarn build
    ```
    This command runs pre-build scripts (`scripts/blog-assets.mjs`, `scripts/security-build.mjs`) and the Vite build, followed by a post-build script (`scripts/blog-build.mjs`).
2.  The production-ready files will be generated in the `dist` directory.

## Project Structure (Overview)

```text
├── content/             # Datas of blog and authors to load
├── public/              # Static assets and data files (JSON, YAML)
├── scripts/             # Build-related scripts (blog, security data processing)
├── src/
│   ├── components/      # Reusable React components
│   ├── images/          # Source images
│   ├── pages/           # Page components corresponding to routes
│   ├── styles/          # Global CSS
│   ├── theme.js         # MUI theme configuration
│   ├── utils/           # Utility functions (e.g., data loading)
│   ├── App.jsx          # Main application component with routing
│   └── main.jsx         # Application entry point
├── vite.config.js       # Vite configuration
├── package.json         # Project dependencies and scripts
└── README.md            # This file
```


## Contributing

We welcome contributions from the community! Here's how you can contribute to this Jenkins Documentation Site:

### How to Contribute

1. **Report Issues**: If you find bugs or have suggestions for improvements, please open an issue with a clear description and steps to reproduce.

2. **Submit Pull Requests**:
   - Fork the repository
   - Create a feature branch (`git checkout -b feature/amazing-feature`)
   - Make your changes
   - Commit your changes (`git commit -m 'Add some amazing feature'`)
   - Push to the branch (`git push origin feature/amazing-feature`)
   - Open a Pull Request

3. **Content Contributions**:
   - For documentation updates, modify the relevant content files in the appropriate directories
   - For blog posts, follow the existing structure and format in the blog content directories
   - Ensure all content follows Jenkins documentation standards

4. **Code Contributions**:
   - Follow the existing code style and project structure
   - Add tests for new functionality when applicable
   - Update documentation to reflect your changes
   - Ensure your code passes all existing tests

5. **Review Process**:
   - All contributions will be reviewed by maintainers
   - Address feedback and requested changes promptly
   - Be patient and responsive during the review process

### Development Setup

1. Set up your local development environment as described in the "Getting Started" section
2. Make sure all tests pass before submitting changes
3. Test your changes thoroughly in different browsers if applicable

### Communication

- Join the Jenkins developers mailing list for discussions
- Participate in Jenkins community meetings
- Reach out to maintainers for guidance on larger contributions

We appreciate all contributions, whether it's fixing typos, adding new features, or improving documentation!