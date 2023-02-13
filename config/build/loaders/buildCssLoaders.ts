import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoaders = (isDev: boolean) => ({
    test: /\.s[ac]ss$/i,
    use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // Генерация /css
        {
            loader: 'css-loader',
            options: {
                modules: {
                    auto: (resPath: string) => Boolean(resPath.includes('.module.')), // Чтобы применялась только с расширением .module
                    localIdentName: isDev // Название классов в зависимости от мода
                        ? '[path][name]__[local]--[hash:base64:5]'
                        : '[hash:base64:8]',
                },
            },
        },
        'sass-loader',
    ],
});
