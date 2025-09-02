module.exports = function (eleventyConfig) {
    // Copy static assets straight through
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/images");

    return {
        // If this is a GitHub *project* page, set pathPrefix to "/your-repo-name/"
        // For a user/org page (username.github.io) use "/"
        pathPrefix: "/portfolio/",
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "_site"
        }
    };
};