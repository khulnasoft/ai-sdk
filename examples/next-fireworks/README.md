2# Khulnasoft AI SDK, Next.js, and Fireworks.ai Chat Example

This example shows how to use the [Khulnasoft AI SDK](https://ai-sdk.khulnasoft.com/docs) with [Next.js](https://nextjs.org/) and [Fireworks.ai](https://app.fireworks.ai) to create a ChatGPT-like AI-powered streaming chat bot. Fireworks.ai's APIs are compatible with OpenAI's so we use the OpenAI JS SDK but change its base URL to point to Fireworks's API with an environment variable.

## Deploy your own

Deploy the example using [Khulnasoft](https://khulnasoft.com?utm_source=github&utm_medium=readme&utm_campaign=ai-sdk-example):

[![Deploy with Khulnasoft](https://khulnasoft.com/button)](https://khulnasoft.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fkhulnasoft%2Fai%2Ftree%2Fmain%2Fexamples%2Fnext-fireworks&env=OPENAI_API_KEY&envDescription=Fireworks%20API%20Key&envLink=https%3A%2F%2Fapp.fireworks.ai%2Faccount%2Fapi-keys&project-name=ai.khulnasoft.com-chat-fireworks&repository-name=ai.khulnasoft.com-chat-fireworks)

## How to use

Execute [`create-next-app`](https://github.com/khulnasoft/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/khulnasoft/ai-sdk/tree/main/examples/next-fireworks next-fireworks-app
```

```bash
yarn create next-app --example https://github.com/khulnasoft/ai-sdk/tree/main/examples/next-fireworks next-fireworks-app
```

```bash
pnpm create next-app --example https://github.com/khulnasoft/ai-sdk/tree/main/examples/next-fireworks next-fireworks-app
```

To run the example locally you need to:

1. Sign up at [Fireworks.ai's Developer Platform](https://app.fireworks.ai/login).
2. Go to [Fireworks.ai's dashboard](https://app.fireworks.ai/users?tab=apps) and create an API KEY.
3. Set the required environment variables as shown [the example env file](./.env.local.example) but in a new file called `.env.local`
4. `pnpm install` to install the required dependencies.
5. `pnpm dev` to launch the development server.

## Learn More

To learn more about OpenAI, Next.js, and the Khulnasoft AI SDK take a look at the following resources:

- [Khulnasoft AI SDK docs](https://ai-sdk.khulnasoft.com/docs)
- [Khulnasoft AI Playground](https://play.ai.khulnasoft.com)
- [Fireworks.ai Documentation](https://readme.fireworks.ai/docs) - learn about OpenAI features and API.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
