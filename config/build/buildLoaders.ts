import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader, // Генерация /css
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")), // Чтобы применялась только с расширением .module
            localIdentName: isDev // Название классов в зависимости от мода
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          }, 
        },
      },
      "sass-loader",
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/, // К каким расширениям
    use: "ts-loader", // Использование лоадера
    exclude: /node_modules/, // Что исключаем
  };

  // Имеет значение порядок
  return [
    // Обычно здесь указываем лоадеры, которые нам позволяют работать с определенными расширениями. По умолчанию только можем работать с js?
    typescriptLoader,
    cssLoader,
  ];
}
