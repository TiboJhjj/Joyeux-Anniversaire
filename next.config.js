const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(mp3)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        publicPath: "/_next",
                        name: "static/media/[name].[hash].[ext]",
                    },
                },
            ],
        });

        return config;
    },
};

module.exports = nextConfig;