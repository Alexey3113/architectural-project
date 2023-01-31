import { ResolveOptions } from "webpack";

export function buildResolvers(): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"], // Позволяет не указывать расширение у файлов с такими extensions. Пример: import t from "./test" (вместе "./test.ts")
  };
}
