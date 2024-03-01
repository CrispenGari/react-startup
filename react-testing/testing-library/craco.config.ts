import { CracoConfig } from "@craco/types";

const cracoConfig: CracoConfig = {
  jest: {
    configure: (jestConfig, { env, paths, resolve, rootDir }) => {
      jestConfig.setupFiles = [`${rootDir}/src/jest.polyfills.ts`];
      return jestConfig;
    },
  },
  typescript: { enableTypeChecking: true },
};

export { cracoConfig as default };
