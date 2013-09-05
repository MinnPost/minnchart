/**
 * Custom JS and configuration for MinnChart.
 */

(function($, undefined) {
  // Colors for chart lines
  var palette = [
    '#B61624', 
    '#1673B6', '#1624B6', '#5916B6', '#A816B6', '#B61673',
    '#B65916', '#B6A816', '#73B616', '#24B616', '#16B659',
    '#E42535', '#EB5C68'
  ];
  var paletteHash = palette.map(function(p) {
    return p.replace('#', '');
  });

  // Override the inline styling function to reverse order so that
  // the cascading affect of CSS is handled the usual way and styles are
  // applied in a non-destructive way.
  ChartBuilder.inlineAllStyles = function() {
    var chartStyle, selector, cssText;

    // Get rules from gneisschart.css
    for (var i = 0; i <= document.styleSheets.length - 1; i++){
      if(document.styleSheets[i].href && document.styleSheets[i].href.indexOf('gneisschart.css') != -1) {
        if (document.styleSheets[i].rules != undefined) {
          chartStyle = document.styleSheets[i].rules 
        }
        else {
          chartStyle = document.styleSheets[i].cssRules
        }
      }
    }

    if (chartStyle != null && chartStyle != undefined) {
      for (var i=0; i < chartStyle.length; i++) {
        if (chartStyle[i].type == 1) {
          selector = chartStyle[i].selectorText;
          styles = ChartBuilder.makeStyleObject(chartStyle[i]);
          d3.selectAll(selector).style(styles)
        }
      };
    }
  };

  ChartBuilder.makeStyleObject = function(rule) {
    var styleDec = rule.style;
    var output = {};
    var s;

    for (s = 0; s < styleDec.length; s++) {
      output[styleDec[s]] = styleDec[styleDec[s]];
    }

    return output;
  };

  // Override all colors for colorpicker
  ChartBuilder.allColors = paletteHash;

  // This starts Chartbuilder and can be passed a configuration
  // object.  See the Gneiss charting options.
  ChartBuilder.start({
    colors: palette,
    creditline: ''
  });
})(jQuery);