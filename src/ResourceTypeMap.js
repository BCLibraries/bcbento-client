const map = new Map();

map.set('newsletterarticle', 'newsletter article');
map.set('magazinearticle', 'magazine article');

function lookupTypeName(code) {
    return map.has(code) ? map.get(code) : code.replace('_', ' ');
}

export {lookupTypeName};
