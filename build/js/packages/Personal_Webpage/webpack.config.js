var config = {
  mode: 'development',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: ["/home/constantin/IdeaProjects/Personal_Webpage/build/js/packages/Personal_Webpage/kotlin/Personal_Webpage.js"]
};

config.output = {
    path: "/home/constantin/IdeaProjects/Personal_Webpage/build/distributions",
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "Personal_Webpage.js"
            : "Personal_Webpage-[name].js";
    },
    library: "Personal_Webpage",
    libraryTarget: "umd",
};

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["kotlin-source-map-loader"],
        enforce: "pre"
});
config.devtool = 'eval-source-map';

// dev server
config.devServer = {
  "inline": true,
  "lazy": false,
  "noInfo": true,
  "open": true,
  "overlay": false,
  "port": 8080,
  "contentBase": [
    "/home/constantin/IdeaProjects/Personal_Webpage/build/processedResources/Js/main"
  ]
};

// save evaluated config file
var util = require('util');
var fs = require("fs");
var evaluatedConfig = util.inspect(config, {showHidden: false, depth: null, compact: false});
fs.writeFile("/home/constantin/IdeaProjects/Personal_Webpage/build/reports/webpack/Personal_Webpage/webpack.config.evaluated.js", evaluatedConfig, function (err) {});

module.exports = config
