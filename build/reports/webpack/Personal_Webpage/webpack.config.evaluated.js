{
  mode: 'development',
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'kotlin-source-map-loader'
        ],
        enforce: 'pre'
      }
    ]
  },
  entry: {
    main: [
      '/home/constantin/IdeaProjects/Personal_Webpage/build/js/packages/Personal_Webpage/kotlin/Personal_Webpage.js'
    ]
  },
  output: {
    path: '/home/constantin/IdeaProjects/Personal_Webpage/build/distributions',
    filename: [Function: filename],
    library: 'Personal_Webpage',
    libraryTarget: 'umd'
  },
  devtool: 'eval-source-map',
  devServer: {
    inline: true,
    lazy: false,
    noInfo: true,
    open: true,
    overlay: false,
    port: 8080,
    contentBase: [
      '/home/constantin/IdeaProjects/Personal_Webpage/build/processedResources/Js/main'
    ]
  }
}