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
/*
    try {
// Icon in the URL bar
    uuid = PageActions.add({
        icon: "drawable://alert_app",
        title: "My page action",
        clickCallback: () => { window.alert("Clicked!"); }
    });
    }
    catch (err) {
        window.alert(err);
    }
 */

/*
    const p = new Prompt({
        window: window,
        title: "My title",
        message: "This is the text on my prompt",
        buttons: ["OK", "Cancel"]
    }).show(function(data) {
            window.alert("Clicked on: " + data.button);
        });
*/
/*
    var uuid = null;
        if (!uuid) {
            uuid = Pageactions.add({
                icon: "drawable://alert_app",
                title: "My page action",
                clickCallback: function() { win.alert("Clicked!"); }
            });
        } else if (uuid) {
            PageActions.remove(uuid);
        }
        */
    /*
     toggleLabel: menu toggleLabel
     icon: file:// or data: URI for an icon
     onConversionButtonClick: JS function called when menu is tapped
     returns a menu ID that can be used to remove the menu
     */

    try {
        // TODO use _("Open settings")
        const openSettingsLabel = "DCC Open settings";
        const onToolsButtonChange = () => {
            eventAggregator.publish("showSettingsTab");
        };
    //    const openSettingsMenuId = window.NativeWindow.menu.add(openSettingsLabel, icon, onToolsButtonChange);
        const openSettingsMenuId = window.NativeWindow.menu.add(openSettingsLabel, null, onToolsButtonChange);

        const toggleLabel = "DCC Toggle";
        const icon = null;
        var state = true;
        const onConversionButtonClick = () => {
            state = !state;
            eventAggregator.publish("toggleConversion", state);
        };
        const toggleMenuId = window.NativeWindow.menu.add(toggleLabel, null, onConversionButtonClick);

        const openTestPageLabel = "DCC Test page";
        const openTestPage = () => {
            const tabs = require("sdk/tabs");
            tabs.open({
                url: "./common/prices.html"
            });
        };
        const openTestPageMenuId = window.NativeWindow.menu.add(openTestPageLabel, null, openTestPage);



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
