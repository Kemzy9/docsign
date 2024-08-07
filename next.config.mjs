// next.config.mjs

export default {
  async redirects() {
    return [
      {
        source: '/api:path*',
        destination: 'http://127.0.0.1:5000/api/:path*',
        permanent: true,
      },
    ];
  },
  
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|otf|svg|pdf)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          
            publicPath: '/_next/static/files', // Adjust the public path as needed
            outputPath: 'static/files', // Adjust the output path as needed
          },
        },
      ],
    });
    
    return config;
  },
};
