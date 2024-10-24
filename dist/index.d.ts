import type { Config } from '@jest/types';
export type { Spec } from './parsers/suite';
declare const _default: {
    canInstrument: boolean;
    getCacheKey: (fileData: any, filename: any, { configString }: {
        configString: any;
    }, instrument: any) => string;
    process(src: string, filePath: Config.Path, jestConfig: Config.ProjectConfig): import("@babel/core").BabelFileResult;
};
export default _default;
