import _ from "lodash";

export default function(pages, folderPath) {
    // TODO: resolve relative paths relative to current page
    folderPath = folderPath.replace(/^\//, '');
    console.log("Pages", pages);
    //return _.filter(pages, {relativeDir: folderPath, frontmatter.draft: includeDrafts});
     var pagesOut = _.filter(pages, function(page) {
        return (page.relativeDir == folderPath && page.frontmatter.draft != true);
    });
    console.log("PagesOut", pagesOut);
    return pagesOut;
}
