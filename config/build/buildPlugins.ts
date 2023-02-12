import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({
    paths,
    isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
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
        new webpack.HotModuleReplacementPlugin(),
        // new ReactRefreshWebpackPlugin({ overlay: false }),
    ];
}
