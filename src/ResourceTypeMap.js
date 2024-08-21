const map = new Map();

map.set('newsletterarticle', 'newsletter article');
map.set('magazinearticle', 'magazine article');

map.set('Local1_archival_materials', 'Archives & Manuscripts');
map.set('Local2_theses', 'Theses & Dissertations ');
map.set('Local3_data', 'Data');
map.set('Local4_journals', 'Journals');
map.set('Local6_kits_realia', 'Kits & Realia');
map.set('Local7_audio_music', 'Musical recordings');
map.set('Local8_audio_spoken', 'Spoken recordings');

function lookupTypeName(code) {
    return map.has(code) ? map.get(code) : code.replace('_', ' ');
}

export {lookupTypeName};
