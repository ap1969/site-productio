import _ from "lodash";

export default function(pages, folderPath, includeDrafts = false) {
    // TODO: resolve relative paths relative to current page
    folderPath = folderPath.replace(/^\//, '');
    console.log("Pages", pages);
    //return _.filter(pages, {relativeDir: folderPath, frontmatter.draft: includeDrafts});
    pagesOut = _.filter(pages, function(page) {
        return (page.relativeDir == folderPath && page.frontmatter.draft == includeDrafts);
    })
    console.log("PagesOut", pagesOut);
    return pagesOut;
}
