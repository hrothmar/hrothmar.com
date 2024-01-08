const moment = require('moment');
 
moment.locale('en');
 
module.exports = function (eleventyConfig) {
	// Outputs current year when calling {% year %}
	// used in footer for copyright
	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

	// Copy `assets/` to `_site/assets`
	eleventyConfig.addPassthroughCopy("assets/"); 	

	// Adds Sass directory as a trigger to recompile the site upon save
	eleventyConfig.addWatchTarget("./src/sass");
	eleventyConfig.addPassthroughCopy("bundle.css");

	// Better Dates
	eleventyConfig.addFilter('dateIso', date => {
		return moment(date).toISOString();
	});
	eleventyConfig.addFilter('dateReadable', date => {
		return moment(date).utc().format('LL'); // E.g. May 31, 2019
	});

	// Create a custom, global "Collection" based on all files that contain `guide` as a tag in their frontmatter (this is great for calling the collection outside of the category)
	eleventyConfig.addCollection("latest_guides", function (collectionApi) {
		return collectionApi.getFilteredByTag("guide").sort(function(a, b) {
			return b.date - a.date;
		}).slice(0,3);
	});
};