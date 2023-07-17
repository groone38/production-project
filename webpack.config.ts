import path from 'path';
import webpack from 'webpack';
import { BuildWebpackConfig } from './config/build/BuildWebpackConfig';
import { BuildEnv, BuildParths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildParths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const PORT = env.port || 3000;
  const isDev = mode === 'development';

  const config: webpack.Configuration = BuildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });
  return config;
};
