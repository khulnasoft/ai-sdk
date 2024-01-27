# Khulnasoft AI SDK, Next.js, and Cohere Example

This example shows how to use the [Khulnasoft AI SDK](https://ai-sdk.khulnasoft.com/docs) with [Next.js](https://nextjs.org/) and [Cohere](https://docs.cohere.com/docs).

## Deploy your own

Deploy the example using [Khulnasoft](https://khulnasoft.com?utm_source=github&utm_medium=readme&utm_campaign=ai-sdk-example):

[![Deploy with Khulnasoft](https://khulnasoft.com/button)](https://khulnasoft.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fkhulnasoft%2Fai%2Ftree%2Fmain%2Fexamples%2Fnext-cohere&env=COHERE_API_KEY&envDescription=Cohere_API_Key&envLink=https://dashboard.cohere.com/api-keys&project-name=ai.khulnasoft.com-cohere&repository-name=ai.khulnasoft.com-cohere)

## How to use

Execute [`create-next-app`](https://github.com/khulnasoft/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/khulnasoft/ai-sdk/tree/main/examples/next-cohere next-cohere-app
```

```bash
yarn create next-app --example https://github.com/khulnasoft/ai-sdk/tree/main/examples/next-cohere next-cohere-app
```

```bash
pnpm create next-app --example https://github.com/khulnasoft/ai-sdk/tree/main/examples/next-cohere next-cohere-app
```

To run the example locally you need to:

1. Go to [the Cohere Dashboard](https://dashboard.cohere.com/) and create an API token.
2. Set the required Cohere environment variable as the token value as shown [the example env file](./.env.local.example) but in a new file called `.env.local`
3. `pnpm install` to install the required dependencies.
4. `pnpm dev` to launch the development server.

## Learn More

To learn more about OpenAI, Next.js, and the Khulnasoft AI SDK take a look at the following resources:

- [Khulnasoft AI SDK docs](https://ai-sdk.khulnasoft.com/docs)
- [Khulnasoft AI Playground](https://play.ai.khulnasoft.com)
- [Cohere Documentation](https://docs.cohere.com/docs) - learn about Cohere features and API.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
