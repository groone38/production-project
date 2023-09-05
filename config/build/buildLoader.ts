import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";

export function buildLoader(options: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  // const styleLoader = {
  //   test: /\.s[ac]ss$/i,
  //   use: [
  //     options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
  //     {
  //       loader: "css-loader",
  //       options: {
  //         modules: {
  //           auto: (resPath: string) => Boolean(resPath.includes(".module.")),
  //           localIdentName: options.isDev
  //             ? "[path][name]__[local]--[hash:base64:5]"
  //             : "[hash:base64:8]",
  //         },
  //       },
  //     },
  //     "sass-loader",
  //   ],
  // };
  const styleLoader = buildCssLoader(options.isDev);
  const typscriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const babelLoader = {
    test: /\.(js|ts|tsx )$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [
          [
            "i18next-extract",
            { locales: ["ru", "en"], keyAsDefaultValue: true },
          ],
        ],
      },
    },
  };

  // return [typscriptLoader, styleLoader, babelLoader, svgLoader, fileLoader];
  return [fileLoader, svgLoader, babelLoader, typscriptLoader, styleLoader];
}
