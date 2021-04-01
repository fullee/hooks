const {when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES} = require("@craco/craco");
const CracoLessPlugin = require('craco-less');

module.exports = {
    reactScriptsVersion: "react-scripts" /* (default value) */,
    style: {
        modules: {
            localIdentName: ""
        },
        css: {
            loaderOptions: (cssLoaderOptions, {env, paths}) => {
                return cssLoaderOptions;
            }
        },
        sass: {
            loaderOptions: (sassLoaderOptions, {env, paths}) => {
                return sassLoaderOptions;
            }
        },
        postcss: {
            mode: "extends" /* (default value) */ || "file",
            plugins: [],
            env: {
                autoprefixer: { /* Any autoprefixer options: https://github.com/postcss/autoprefixer#options */},
                stage: 3, /* Any valid stages: https://cssdb.org/#staging-process. */
                features: { /* Any CSS features: https://preset-env.cssdb.org/features. */}
            },
            loaderOptions: (postcssLoaderOptions, {env, paths}) => {
                return postcssLoaderOptions;
            }
        }
    },
    babel: {
        presets: [],
        plugins: [
            ["@babel/plugin-proposal-decorators", { legacy: true }]
        ],
        loaderOptions: (babelLoaderOptions, {env, paths}) => {
            return babelLoaderOptions;
        }
    },
    webpack: {
        alias: {},
        plugins: {
            add: [], /* An array of plugins */
            remove: [],  /* An array of plugin constructor's names (i.e. "StyleLintPlugin", "ESLintWebpackPlugin" ) */
        },
        configure: (webpackConfig, {env, paths}) => {
            return webpackConfig;
        }
    },
    jest: {
        babel: {
            addPresets: true, /* (default value) */
            addPlugins: true  /* (default value) */
        },
        configure: (jestConfig, {env, paths, resolve, rootDir}) => {
            return jestConfig;
        }
    },
    devServer: {
        port: 9091,
        hot: true,/* 开启热更新 */
        proxy: {
            '/user': {
                target:'https://graph.qq.com',
                secure: false,
                changeOrigin: true,
            }
        }
    },
    plugins: [
        {
            plugin: {
                overrideCracoConfig: ({cracoConfig, pluginOptions, context: {env, paths}}) => {
                    return cracoConfig;
                },
                overrideWebpackConfig: ({webpackConfig, cracoConfig, pluginOptions, context: {env, paths}}) => {
                    return webpackConfig;
                },
                overrideDevServerConfig: ({devServerConfig, cracoConfig, pluginOptions, context: {env, paths, proxy, allowedHost}}) => {
                    return devServerConfig;
                },
                overrideJestConfig: ({jestConfig, cracoConfig, pluginOptions, context: {env, paths, resolve, rootDir}}) => {
                    return jestConfig
                },
            },
            options: {}
        },
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        // 修改主题色
                        // modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                },
            },
        }
    ]
};
