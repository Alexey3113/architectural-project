import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { buildBabelLoaders } from './loaders/buildBabelLoaders';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const babelLoader = buildBabelLoaders(options);

    const cssLoader = buildCssLoaders(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/, // К каким расширениям
        use: 'ts-loader', // Использование лоадера
        exclude: /node_modules/, // Что исключаем
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    // Имеет значение порядок
    return [
    // Обычно здесь указываем лоадеры, которые нам позволяют работать с определенными расширениями. По умолчанию только можем работать с js?
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ];
}
