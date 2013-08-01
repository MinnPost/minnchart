/**
 * Custom JS and configuration for MinnChart.
 */

// Define all colors.
ChartBuilder.allColors = [
  'BF0053','FF70B0','E15D98','C44B81','A63869','882551','6B133A','4D0022',
  'BF600A','FFC07E','E1A76A','C48D55','A67341','885A2D','6B4118','4D2704',
  'BFAA00','FFF270','E1D55D','C4B84B','A69C38','887F25','6B6213','4D4500',
  '00BFA5','70FFF7','5DE1D9','4BC4BC','38A69E','258880','136B63','004D45',
  '006DBF','70B8FF','5DA1E1','4B89C4','3871A6','255A88','13436B','002B4D',
  '9300BF','E770FF','CB5DE1','AE4BC4','9238A6','752588','59136B','3C004D'
]

// No credit line is necessary
chartConfig.creditline = '';
chartConfig.colors = [
  '#ff4cf4','#ffb3ff','#e69ce6','#cc87cc','#b373b3',
  '#995f99','#804c80','#665266','#158eff','#99cdff',
  '#9cc2e6','#87abcc','#7394b3','#5f7d99','#466780',
  '#525c66'
];

// Some hacks
(function($, undefined) {
  
  // Update chart container
  function updateChartDims() {
    var wH = $(window).height();
    var hH = $('.minnchart-header').height();
    var $lC = $('#interactiveContent #leftColumn .inner-column');
    
    $('#chartContainer')
      .css('height', wH - hH - 100)
      .css('width', $lC.width() - 10);
  };
  
  // Override set chart area function
  ChartBuilder.setChartArea = function() {
		var hasBargrid = false;
		for (var i = chart.g.series.length - 1; i >= 0; i--){
			if(chart.g.series[i].type == "bargrid") {
				hasBargrid = true;
				break;
			}
		};
		
		if(hasBargrid) {
			$("#chartContainer").css("height",
				chart.g.series[0].data.length*22 + 
				chart.g.padding.top + 
				chart.g.padding.bottom
				)
		}
		else {
			updateChartDims();
		}
	},

  updateChartDims();
  $(document).ready(function() {
    updateChartDims();
  });
})(jQuery);