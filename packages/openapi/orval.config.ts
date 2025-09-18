import { defineConfig } from 'orval';

export default defineConfig({
  api: {
    input: './schemas/opneapi.yaml',        // OpenAPI 仕様書
    output: {
      mode: 'tags-split',
      indexFiles: true,
      target: '../api-client/src/endpoints',  // SDK 出力先
      client: 'react-query',
      clean: true, 
      biome: true,
      mock: true,
      httpClient: 'fetch',
      schemas: '../api-client/src/model',
      fileExtension: '.gen.ts',
      namingConvention:'snake_case'
    },
  },
});