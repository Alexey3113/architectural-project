import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins({
    paths,
    isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        // Добавление разных плагинов

        new HtmlWebpackPlugin({
            template: paths.html, // Дефолтные шаблон. В него встраиваются скрипты. + чтобы корректно root отображался
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            // глобальные переменные
            __IS_DEV__: isDev,
        }),

        // new ReactRefreshWebpackPlugin({ overlay: false }),
    ];

    if (isDev) {
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }));
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    return plugins;
}
