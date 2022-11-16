'use strict';
chrome.runtime.onStartup.addListener(function () {
    setTimeout(onload, 5000);
});
async function onload() {
    console.log("checkin start");
    try {
        var res = await fetch(
            "https://sg-hk4e-api.hoyolab.com/event/sol/sign?lang=vi-vn",
            { method: "POST", body: JSON.stringify({ act_id: "e202102251931481" }) });
        console.log(await res.text());

        var res2 = await fetch(
            "https://sg-public-api.hoyolab.com/event/mani/sign?lang=vi-vn",
            { method: "POST", body: JSON.stringify({ act_id: "e202110291205111" }) });
        console.log(await res2.text());
    }
    catch (e) {
        console.log(e);
        setTimeout(onload, 5000);
    }
    console.log("checkin done");
}