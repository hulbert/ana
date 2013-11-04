require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
		'svg': '../bower_components/svg.js/dist/svg',
		'svg-import': '../bower_components/svg.import.js/svg.import',
		'svg-filter': '../bower_components/svg.filter.js/svg.filter'
    }
});

require(['app', 'jquery'], function (app, $) {
    'use strict';
});
