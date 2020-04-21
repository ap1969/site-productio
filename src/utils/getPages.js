import _ from "lodash";

export default function(pages, folderPath, includeDrafts = false) {
    // TODO: resolve relative paths relative to current page
    folderPath = folderPath.replace(/^\//, '');
    return _.filter(pages, {relativeDir: folderPath, draft: includeDrafts});
}
