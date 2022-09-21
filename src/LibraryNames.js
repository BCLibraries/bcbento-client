const map = new Map();

map.set("BAPST", "Bapst Library");
map.set("BURNS", "Burns Library");
map.set("ARCH", "Burns Archives");
map.set("DEV", "Devlin Library");
map.set("ERC", "Educational Resource Center");
map.set("IAJS", "Institute for Advanced Jesuit Studies");
map.set("INT", "Internet Library");
map.set("LAW", "Law Library");
map.set("ONL", "O'Neill Library");
map.set("MICRO", "O'Neill Microforms");
map.set("SWK", "Social Work Library Library");
map.set("BAIC", "Thea Bowman AHANA and Intercultural Center Library");
map.set("TML", "Theology and Ministry Library Library");
map.set("GEO", "Weston Geophysics");

function lookupLibraryName(code) {
    return map.has(code) ? map.get(code) : code;
}

export {lookupLibraryName};