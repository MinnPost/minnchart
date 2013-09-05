# MinnChart

An instance of [ChartBuilder](https://github.com/Quartz/Chartbuilder/) for MinnPost.  Deployed at [code.minnpost.com/minnchart](http://code.minnpost.com/minnchart/).

## Development

ChartBuilder does not use templates, so the HTML is copied from the Chartbuilder `index.html` to the one here.  Customizing should be down in `js/app.js` and `css/styles.css` as much as possible.

ChartBuilder/GneissChart reads in CSS names `gneisschart.css` and embeds them into the SVG chart.  So, for chart specific styles use the `css/gneisschart.css`.

## Running locally

1. Simple go to `index.html` in your browser.
    * You can run a simple web server with Python: `python -m SimpleHTTPServer`
    * Or you can use a NodeJS one: `npm install -g http-server` then just run `http-server`