module.exports = {
    methods: {
        /**
         * Translate the given key.
         */
        __(file, key, replace) {
            var translation = window.translations[file] &&
            window.translations[file][key]
                ? window.translations[file][key]
                : key;

            _.forEach(replace, (value, key) => {
                translation = translation.replace(':' + key, value)
            });

            return translation;
        },
    },
};
