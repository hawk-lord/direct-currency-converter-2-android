/*
 * © 2014-2015 Per Johansson
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 */
const AndroidChromeInterface = function() {
    "use strict";
    const { Cc, Ci, Cu } = require('chrome');
    Cu.import("resource://gre/modules/PageActions.jsm");
    Cu.import("resource://gre/modules/Services.jsm");
    // Note: Prompt.jsm is still under development. The API may change. Use with care!
    Cu.import("resource://gre/modules/Prompt.jsm");
    const _ = require("sdk/l10n").get;
    const eventAggregator = require("./dcc-common-lib/eventAggregator");


    const window = Services.wm.getMostRecentWindow("navigator:browser");
    var uuid = null;

    try {
        const openSettingsLabel = _("Open settings");
        const openSettingsIcon = null;
        const onToolsButtonChange = () => {
            eventAggregator.publish("showSettingsTab");
        };
        const openSettingsMenuId = window.NativeWindow.menu.add(openSettingsLabel, openSettingsIcon, onToolsButtonChange);

        const toggleLabel = _("Toggle currency conversion");
        const toggleIcon = null;
        // TODO get state from program state
        var state = true;
        const onConversionButtonClick = () => {
            state = !state;
            eventAggregator.publish("toggleConversion", state);
        };
        const toggleMenuId = window.NativeWindow.menu.add(toggleLabel, toggleIcon, onConversionButtonClick);

        const openTestPageLabel = _("Open test page");
        const openTestPageIcon = null;
        const openTestPage = () => {
            const tabs = require("sdk/tabs");
            tabs.open({
                url: "./common/prices.html"
            });
        };
        const openTestPageMenuId = window.NativeWindow.menu.add(openTestPageLabel, openTestPageIcon, openTestPage);



    }
    catch(err) {
        console.error(err);
        window.alert(err);
    }
    return {
        setConversionButtonState: (anEnabled) => {
            //conversionButton.checked = anEnabled;
        },
        setToolsButtonText: (aQuoteString) => {
            // toolsButton.label = _("Open settings") + "\n" + aQuoteString;
        }
    }


};

if (typeof exports === "object") {
    exports.AndroidChromeInterface = AndroidChromeInterface;
}
