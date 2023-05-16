'use strict';
chrome.runtime.onStartup.addListener(function () {
    setTimeout(onload, 5000);
});
async function onload() {
    console.log("checkin genshin start");
    try {
        var checkInGI = await fetch(
            "https://sg-hk4e-api.hoyolab.com/event/sol/sign?lang=vi-vn",
            { method: "POST", body: JSON.stringify({ act_id: "e202102251931481" }) });
        console.log(await checkInGI.text());

    }
    catch (e) {
        console.error("checkin genshin error\n" + e);
        setTimeout(onload, 5000);
    }

    console.log("checkin genshin done");

    try {
        var checkInHI = await fetch(
            "https://sg-public-api.hoyolab.com/event/mani/sign?lang=vi-vn",
            { method: "POST", body: JSON.stringify({ act_id: "e202110291205111" }) });
        console.log(await checkInHI.text());
    }
    catch (e) {
        console.error("checkin honkai error\n" + e);
        setTimeout(onload, 5000);
    }

    try {
        var checkInHR = await fetch(
            "https://sg-public-api.hoyolab.com/event/luna/os/sign",
            { method: "POST", body: JSON.stringify({ act_id: "e202303301540311", lang: "vi-vn" }) });
        console.log(await checkInHR.text());
    }
    catch (e) {
        console.error("checkin honkai R error\n" + e);
        setTimeout(onload, 5000);
    }
}
