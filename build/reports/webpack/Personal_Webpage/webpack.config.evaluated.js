{
  mode: 'development',
  resolve: {
    modules: [
      '/home/constantin/IdeaProjects/Personal_Webpage/build/js/packages/Personal_Webpage/kotlin-dce-dev',
      'node_modules'
    ]
  },
  plugins: [
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      '/home/constantin/IdeaProjects/Personal_Webpage/build/js/packages/Personal_Webpage/kotlin-dce-dev/Personal_Webpage.js'
    ]
  },
  output: {
    path: '/home/constantin/IdeaProjects/Personal_Webpage/build/distributions',
    filename: [Function: filename],
    library: 'Personal_Webpage',
    libraryTarget: 'umd'
  },
  devtool: 'eval-source-map',
  stats: {
    warningsFilter: [
      /Failed to parse source map/
    ],
    warnings: false,
    errors: false
  },
  devServer: {
    inline: true,
    lazy: false,
    noInfo: true,
    open: true,
    overlay: false,
    contentBase: [
      '/home/constantin/IdeaProjects/Personal_Webpage/build/processedResources/js/main'
    ]
  }
}