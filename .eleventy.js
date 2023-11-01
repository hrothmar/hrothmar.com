const moment = require('moment');
 
moment.locale('en');
 
module.exports = function (eleventyConfig) {

	// Adds Sass directory as a trigger to recompile the site upon save
	eleventyConfig.addWatchTarget("./src/sass");
	eleventyConfig.addPassthroughCopy("bundle.css");

	eleventyConfig.addFilter('dateIso', date => {
		return moment(date).toISOString();
	});

	eleventyConfig.addFilter('dateReadable', date => {
		return moment(date).utc().format('LL'); // E.g. May 31, 2019
	});
};