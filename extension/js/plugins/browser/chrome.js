/**
 * @description chrome urls
 * @author  tomasy
 * @mail solopea@gmail.com
 */

import util from '../../common/util'

const version = 1;
const name = 'chrome';
const type = 'search';
const icon = chrome.extension.getURL('img/chrome.png');
const title = chrome.i18n.getMessage(`${name}_title`);
const settingUrls = [];
const chromeUrls = settingUrls.concat([]);
const chromeDebug = [];

function onInput(text) {
    const filterByName = suggestions => util.getMatches(suggestions, text);
    const mapTo = key => item => {
        return {
            icon,
            key,
            title: item.split('//')[1].replace('/', ' '),
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
    name: 'Chrome',
    type,
    icon,
    title,
    onInput,
    onEnter,
    canDisabled: false
};