# typescript-express-docker-template
This is a minimal initial Boilerplate code for start any nodejs based app. This repo can be used as a starting point for backend development with Nodejs. It comes bundled with Docker and is CI/CD optimized. The development environment uses docker-compose to start dependent services like mongo.

## Features
* **[Github Actions Workflows](https://github.com/atk81/typescript-express-docker-template/tree/main/.github/workflows)** - Pre-configured Github Actions to run automated builds and publish image to Github Packages
* **[Dockerfile](https://github.com/atk81/typescript-express-docker-template/blob/main/Dockerfile)** - Dockerfile to generate docker builds.
* **[docker-compose](https://github.com/atk81/typescript-express-docker-template/blob/main/docker-compose.yml)** - Docker compose script to start service in production mode.
* **[docker-compose-dev](https://github.com/atk81/typescript-express-docker-template/blob/main/docker-compose.dev.yml)** - Docker compose script to start service in development mode.
* **[renovate](https://github.com/atk81/typescript-express-docker-template/blob/main/renovate.json)** - Update dependencies automatically.

# I. Installation
## 1. Clone the repo
```bash
git clone git@github.com:atk81/typescript-express-docker-template.git your-repo-name
cd your-repo-name
```

## 2. Install dependencies
```bash
npm install 
or
yarn install
```


# II. Development
## 1. Run development environment
```bash
npm run dev-server
```

# III. Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_ENV`

`PORT`


## File structure
```file
.
├── .git
├── .github
├── .husky
├── .nyc_output
├── coverage
├── dist
├── node_modules
├── openAPI
├── scripts
├── src
├── test
├── .c6db7e175ad45200efcda277ed681fa151a8fa5e-audit.json
├── .env
├── .env.default
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .nycrc
├── .prettierrc
├── Dockerfile
├── Dockerfile.dev
├── LICENSE
├── README.md
├── application-2022-04-29-21.log
├── docker-compose.dev.yml
├── docker-compose.yml
├── exception.log
├── nodemon.json
├── package-lock.json
├── package.json
├── rejections.log
├── renovate.json
└── tsconfig.json

11 directories, 22 files
```

## File explanation

- `.git`: git repository
- `node_modules`: node_modules
- `.eslintignore`: ignore file for eslint
- `.eslintrc`: [eslint](https://eslint.org/docs/user-guide/getting-started) configuration
- `.gitignore`: ignore file for git, Install using [gitignore.io](https://gitignore.io/) to generate this file
- `.prettierrc`: [prettier](https://prettier.io/) configuration
- `LICENSE`: license file
- `README.md`: readme file
- `nodemon.json`: nodemon configuration
- `package-lock.json`: npm package lock file
- `package.json`: npm package file
- `tsconfig.json`: [typrscript](https://aka.ms/tsconfig.json) configuration

## Contributing

Contributions are always welcome!
