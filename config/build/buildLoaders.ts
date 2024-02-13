import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {
  const typescriptLodaer = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [typescriptLodaer];
}