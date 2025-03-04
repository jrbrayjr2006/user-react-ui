This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Github Repository Setup

```
git@github.com:jrbrayjr2006/user-react-ui.git
```

### …or create a new repository on the command line
```
echo "# user-react-ui" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:jrbrayjr2006/user-react-ui.git
git push -u origin main
```

### …or push an existing repository from the command line
```
git remote add origin git@github.com:jrbrayjr2006/user-react-ui.git
git branch -M main
git push -u origin main
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## UI Dependencies

Install Tailwind CSS:

```sh
npm install tailwindcss @tailwindcss/postcss postcss --save
```

## Testing

Setup the testing environment.

```sh
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node

npm install --save-dev @types/jest

npm install --save-dev ts-jest

npm install --save-dev @jest/globals

npm install --save-dev ts-node

npm init jest@latest
```

Create a `jest.config.ts` configuration file at the root of the project.

```json
const nextJest = require('next/jest')
 
// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: './' })
 
// Any custom config you want to pass to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['./jest.config.ts'],
}
 
// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig)
```

## Containerization

Build the docker image with the following command: `docker image build -t user-ui .`

`docker run -p 3000:3000 user-ui`

## Troubleshooting

Nextjs uses the SWC library instead of Babel.  When attempting to use Babel, the following error may occur:

```cmd
Syntax error: "next/font" requires SWC although Babel is being used due to a custom babel config being present.
Read more: https://nextjs.org/docs/messages/babel-font-loader-conflict
```

This can be resolved by removing the `babel.config.json` and `.babelrc` files.

## References

- [Create a simple web application using AWS Amplify](https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/)
- [How to Dockerize a React App: A Step-by-Step Guide for Developers](https://www.docker.com/blog/how-to-dockerize-react-app/)



