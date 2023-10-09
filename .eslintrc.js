module.exports = {
    root: true,
    // This tells ESLint to load the config from the package `eslint-config-vercel-ai`
    extends: ['khulnasoft-ai'],
    settings: {
      next: {
        rootDir: ['apps/*/'],
      },
    },
  };