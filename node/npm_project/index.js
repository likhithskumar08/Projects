const franc = require(franc);
const langcode = franc(input);

const langs = require(langs);
const input = process.argv[2];

if (languagecode === 'und') {
    console.log("sorry, could not find the language")
} else {
    const language = langs.where("3", langcode);
    console.log(language.name)
}

