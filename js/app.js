/**
 * Custom JS and configuration for MinnChart.
 */

(function($, undefined) {

  // Override the inline styling function to reverse order so that
  // the cascading affect of CSS is handled the usual way
  ChartBuilder.inlineAllStyles = function() {
    var chartStyle, selector, cssText;

    for (var i = 0; i <= document.styleSheets.length - 1; i++){
      if(document.styleSheets[i].href && document.styleSheets[i].href.indexOf("gneisschart.css") != -1) {
        console.log(document.styleSheets[i]);
        if (document.styleSheets[i].rules != undefined) {
          chartStyle = document.styleSheets[i].rules 
        }
        else {
          chartStyle = document.styleSheets[i].cssRules
        }
      }
    }
    if(chartStyle != null && chartStyle != undefined)
    {
      for (var i=0; i < chartStyle.length; i++) {
        if(chartStyle[i].type == 1) {
          //cssRule is a style rule
          selector = chartStyle[i].selectorText;
          cssText = chartStyle[i].style.cssText;
          d3.selectAll(selector).attr("style",cssText)
        }
      };
    }
  };

  // This starts Chartbuilder and can be passed a configuration
  // object.  See the Gneiss charting options.
  ChartBuilder.start({
    colors: [
      '#ff4cf4','#ffb3ff','#e69ce6','#cc87cc','#b373b3',
      '#995f99','#804c80','#665266','#158eff','#99cdff',
      '#9cc2e6','#87abcc','#7394b3','#5f7d99','#466780',
      '#525c66'
    ],
    allColors: [
      'BF0053','FF70B0','E15D98','C44B81','A63869','882551','6B133A','4D0022',
      'BF600A','FFC07E','E1A76A','C48D55','A67341','885A2D','6B4118','4D2704',
      'BFAA00','FFF270','E1D55D','C4B84B','A69C38','887F25','6B6213','4D4500',
      '00BFA5','70FFF7','5DE1D9','4BC4BC','38A69E','258880','136B63','004D45',
      '006DBF','70B8FF','5DA1E1','4B89C4','3871A6','255A88','13436B','002B4D',
      '9300BF','E770FF','CB5DE1','AE4BC4','9238A6','752588','59136B','3C004D'
    ],
    creditline: ''
  });
})(jQuery);