require.config({
    paths: {
        'jquery': '../bower_components/jquery/jquery',
		'magnific': '../bower_components/magnific-popup/dist/jquery.magnific-popup',
		'raphael': '../bower_components/raphael/raphael'
    },
	shim: {
		'magnific': {
            deps: ['jquery']
        }
	}
});

require(['app']);
