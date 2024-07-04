'use strict';
chrome.runtime.onStartup.addListener(function () {
    setTimeout(onload, 5000);
});
async function onload() {
    console.log("checkin genshin start");
    try {
        var checkInGI = await fetch(
            "https://sg-hk4e-api.hoyolab.com/event/sol/sign",
            { method: "POST", body: JSON.stringify({ act_id: "e202102251931481" }) });
        console.log(await checkInGI.text());
		}
    catch (e) {
        console.error("checkin GI error\n" + e);
        setTimeout(onload, 5000);
		}
	console.log("checkin GI done");

    try {
        var checkInHI = await fetch(
            "https://sg-public-api.hoyolab.com/event/mani/sign",
            { method: "POST", body: JSON.stringify({ act_id: "e202110291205111" }) });
        console.log(await checkInHI.text());
		}
    catch (e) {
        console.error("checkin HI3 error\n" + e);
        setTimeout(onload, 5000);
		}
	console.log("checkin HI3 done");

    try {
        var checkInHR = await fetch(
            "https://sg-public-api.hoyolab.com/event/luna/os/sign",
            { method: "POST", body: JSON.stringify({ act_id: "e202303301540311" }) });
        console.log(await checkInHR.text());
		}
    catch (e) {
        console.error("checkin HSR error\n" + e);
        setTimeout(onload, 5000);
		}
	console.log("checkin HSR done");
		
	try {
        var checkInZZZ = await fetch(
            "https://sg-act-nap-api.hoyolab.com/event/luna/os/sign",
            { method: "POST", body: JSON.stringify({ act_id: "e202406031448091" }) });
        console.log(await checkInZZZ.text());
    }
    catch (e) {
        console.error("checkin ZZZ error\n" + e);
        setTimeout(onload, 5000);
		}
	console.log("checkin ZZZ done");
}
