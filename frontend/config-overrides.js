const path = require("path");

// eslint-disable-next-line no-unused-vars
module.exports = function override(config, env) {
  config.module.rules.push({
    test: /.ttf$/,
    loader: "file-loader",
    include: path.resolve(__dirname, "./static/media/[name].[ext]")
  });

  return config;
};
