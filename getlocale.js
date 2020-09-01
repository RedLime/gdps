function getLocale() {
    var type = navigator.appName;
    if (type=="Netscape") {
        var lang = navigator.language;
    } else {
        var lang = navigator.userLanguage;
    }
    var lang = lang.substr(0,2);
    return lang;
}

function moveLocalePage(lang, url) {
    console.log("test")
    if (getLocale() == lang) {
        window.location.replace(url);
        console.log("test2")
    }
}

// en - English
// ko - Korean