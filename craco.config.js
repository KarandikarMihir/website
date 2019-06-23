const _ = require('lodash')

module.exports = {
    babel: {
        "plugins": [
            "babel-plugin-styled-components",
            ["babel-plugin-prismjs", {
                "languages": ["javascript", "css", "markup"],
                "plugins": ["line-numbers"],
                "theme": "default",
                "css": true
            }]
        ]
    },
    webpack: {
        configure: (config) => {
            config.resolve.modules.push('src')
            const rules = _.find(config.module.rules, x => x.oneOf)
            const fileLoaderRuleIndex = _.findIndex(
                rules, x => _.includes(x.loader, 'file-loader'))
            rules.oneOf.splice(fileLoaderRuleIndex, 0, {
                test: /\.md$/,
                loader: 'raw-loader'
            })
            return config
        }
    }
}