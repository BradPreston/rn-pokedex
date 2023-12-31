
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://beta.pokeapi.co/graphql/v1beta",
  documents: "graphql/queries.ts",
  generates: {
    "graphql/gql/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
