/*global define */
define(['jquery', 'svg', 'svg-import', 'svg-filter'], function ($, SVG) {
    'use strict';

	if (!SVG.supported) {
		$('#no_svg').show();
		return;
	}
	
	var frontEl, backEl;
	
	var svgDoc = null;
	
	
	var init = function() {
		var drawSvgImport = function(rawSvg) {
			var draw = SVG('mycanvas');
			var store = draw.svg(rawSvg);
			backEl = SVG.get('g5815');
			frontEl = SVG.get('g5692');

			backEl.hide();
			svgDoc = draw;
		
			$('body').on('mousemove', function(ev) {
				$('#mouse_coordinates').html('X: ' +ev.offsetX + '&nbsp;&nbsp;Y: ' + ev.offsetY);
			});
			
			drawPoint(90,43);
		}

		$.ajax('/images/silhouette_plain.svg', {
			dataType: 'text'
		}).done(function(data, textStatus, jqXHR) {
			drawSvgImport(data);
		});
	
		if (window.location.href.indexOf('debug') > -1) {
			$('#mouse_coordinates').show();
		}
	}
	
	$(init); // dom ready
	
	function drawPoint(coordX, coordY) {
		if (svgDoc == null) return;
		
		var c = svgDoc.circle(15);
		c.attr({
			cx: coordX,
			cy: coordY,
			class: 'click-point'
		});
	}

});
