# KhulnaSoft AI SDK, Next.js, and Replicate (Llama 2) Chat Example

This example shows how to use the [KhulnaSoft AI SDK](https://ai.khulnasoft.com/docs) with [Next.js](https://nextjs.org/) and [Meta's Llama 2 70b Chat model](https://replicate.com/replicate/llama-2-70b-chat) hosted on [Replicate](https://replicate.com) to create a ChatGPT-like AI-powered streaming chat bot.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=ai-sdk-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fai%2Ftree%2Fmain%2Fexamples%2Fnext-replicate&env=REPLICATE_API_KEY&envDescription=Replicate%20API%20Key&envLink=https://replicate.com/account/api-tokens&project-name=vercel-ai-chat-replicate&repository-name=vercel-ai-chat-replicate)

## How to use

Execute [`create-next-app`](https://github.com/khulnasoft/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/khulnasoft/ai-sdk/tree/main/examples/next-replicate next-replicate-app
```

```bash
yarn create next-app --example https://github.com/khulnasoft/ai-sdk/tree/main/examples/next-replicate next-replicate-app
```

```bash
pnpm create next-app --example https://github.com/khulnasoft/ai-sdk/tree/main/examples/next-replicate next-replicate-app
```

To run the example locally you need to:

1. Sign up at [Replicate's Platform](https://replicate.com/signin).
2. Go to [Replicate's dashboard](https://replicate.com/account/api-tokens) and create an API token.
3. Set the required Replicate environment variable as the token value as shown [the example env file](./.env.local.example) but in a new file called `.env.local`
4. `pnpm install` to install the required dependencies.
5. `pnpm dev` to launch the development server.

## Learn More

To learn more about OpenAI, Next.js, and the KhulnaSoft AI SDK take a look at the following resources:

- [KhulnaSoft AI SDK docs](https://ai.khulnasoft.com/docs)
- [Vercel AI Playground](https://play.vercel.ai)
- [Replicate Documentation](https://replicate.com/docs) - learn about Replicate features and API.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
