var config = {
    map: {
        '*': {
            'slick': 'js/lib/slick.min'
        }
    },
    deps: [
        'js/main'
    ],

    shim: {
        'slick': {
            'deps': ['jquery']
        }
    },

    config: {
        mixins: {
            'Magento_Catalog/js/product/list/listing': {
                'Magento_Catalog/js/product/list/listing-mixin': true
            }
        }
 }

};

