import path from "path"; // Для создания путей
import webpack, { ResolveOptions } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths, isDev } = options;

  return {
    mode, // Dev разработка или production
    entry: {
      main: paths.entry,
    }, //Стартовая точка нашего приложения. main - название итогового файла (по умолчанию - main)

    output: {
      // Описывает куда будет произведена сборка нашего приложения
      filename: "[name].[contenthash].js", // Как будет называться главный файл в нашей сборке приложения. Name - будет подставлять имя. [contenthash] - автоматическая генерация хеша (для выката новой версии)
      path: paths.build, // Путь сборки
      clean: true, // Старое удаляется
    },

    plugins: buildPlugins(options), // Плагины

    module: {
      rules: buildLoaders(options), // Обычно здесь указываем лоадеры, которые нам позволяют работать с определенными расширениями. По умолчанию только можем работать с js?
    },

    resolve: buildResolvers(options), // Позволяет не указывать расширение у файлов с такими extensions. Пример: import t from "./test" (вместо "./test.ts")
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ?  buildDevServer(options) : undefined,
  };
}
