import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { BuildPaths, ProjectType } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        buildLocales: '',
        locales: '',
    };

    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push('.tsx', '.ts');
    config!.module!.rules!.push(buildCssLoaders(true));

    // eslint-disable-next-line no-param-reassign
    // @ts-ignore
    config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
        if (/.svg/.test(rule.test as string)) {
            return {
                ...rule,
                exclude: /\.svg$/i,
            };
        }
        return rule;
    });

    config!.module!.rules!.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config!.plugins!.push(new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API_URL__: JSON.stringify(''),
        __PROJECT__: JSON.stringify('storybook' as ProjectType),
    }));

    return config;
};
