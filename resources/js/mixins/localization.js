module.exports = {
    methods: {
        /**
         * Translate the given key.
         */
        __(key, replace) {
            if (window.swiftCallbackTranslations) {
                var translation = window.swiftCallbackTranslations[key] ? window.swiftCallbackTranslations[key] : '';

                _.forEach(replace, (value, key) => {
                    translation = translation.replace(':' + key, value)
                });

                return translation;
            } else {
                return '';
            }
        },
    },
};
