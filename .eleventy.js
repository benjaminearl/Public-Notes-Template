import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { DateTime } from "luxon";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function(eleventyConfig) {

    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
        extensions: 'html',
        transformOnRequest: false,
        formats: ['auto'],
        outputDir: "./_site/img/",
        defaultAttributes: {
			loading: "lazy",
			sizes: "auto",
		},
    });

    eleventyConfig.addPlugin(feedPlugin, {
		type: "rss", // or "atom", "json"
		outputPath: "/feed.xml",
		collection: {
			name: "post", // iterate over `collections.posts`
			limit: 0, // 0 means no limit
		},
		metadata: {
			language: "en", //language of your feed
			title: "Title of Your Site",
			subtitle: "a subtitle for your rss",
			base: "https://yourdomain.com/",
			author: {
				name: "Your Name",
			}
		}
	});

    eleventyConfig.addFilter("postDate", dateObj => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd'.'MM'.'yyyy");
    });


    eleventyConfig.addPassthroughCopy("src/css/");
    eleventyConfig.addPassthroughCopy("src/posts/**/*.mp3");

    eleventyConfig.addWatchTarget("src/css/");
    eleventyConfig.addWatchTarget("src/posts/**/*.{svg,webp,png,jpeg}");

    eleventyConfig.addCollection("posts", function (collectionApi) {
        return collectionApi.getFilteredByTag("post").reverse(); // Newest first
      });

    eleventyConfig.addGlobalData('generated', () => {
        let now = new Date();
        return new Intl.DateTimeFormat(
          'en-US', { dateStyle: 'full', timeStyle: 'short' }
        ).format(now);
      });

    eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
      return (tags || []).filter(tag => ["all", "posts", "post"].indexOf(tag) === -1);
    }); 

    return {
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dir: {
            input: 'src',
            includes: '_includes',
            output: '_site',
        },
    };
};