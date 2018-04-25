/**
 * @description chrome urls
 * @author  tomasy
 * @mail solopea@gmail.com
 */

import util from '../../common/util'

const version = 1;
const name = 'firefox';
const type = 'search';
const icon = chrome.extension.getURL('img/firefox.png');
const title = chrome.i18n.getMessage(`${name}_title`);
const settingUrls = [];
const chromeUrls = settingUrls.concat(["about:about", "about:accounts", "about:addons", "about:app-manager", "about:buildconfig", "about:cache", "about:checkerboard", "about:compartments", "about:config", "about:crashes", "about:credits", "about:customizing", "about:debugging", "about:downloads", "about:healthreport", "about:home", "about:license", "about:logo", "about:memory", "about:mozilla", "about:networking", "about:newtab", "about:performance", "about:permissions", "about:plugins", "about:preferences", "about:privatebrowsing", "about:profiles", "about:reader", "about:rights", "about:robots", "about:serviceworkers", "about:sessionrestore", "about:support", "about:sync-log", "about:sync-progress", "about:sync-tabs", "about:telemetry", "about:webrtc", "about:welcomeback"]);
const chromeDebug = [];

function onInput(text) {
    const filterByName = suggestions => util.getMatches(suggestions, text);
    const mapTo = key => item => {
        return {
            icon,
            key,
            title: item.split(':')[1],
            desc: item,
            url: item
        }
    };

    const pages = filterByName(chromeUrls).map(mapTo('url'));
    const actions = filterByName(chromeDebug).map(mapTo('copy'));

    return Promise.resolve(pages.concat(actions));
}

function onEnter({ url }) {
    chrome.tabs.create({
        url
    });
}

export default {
    version,
    name: 'Firefox',
    type,
    icon,
    title,
    onInput,
    onEnter,
    canDisabled: false
};