const diacritic = require('diacritic');

function crocodiles(text) {
    let slug = diacritic.clean(text).replaceAll(/(\.|,|!)+/g, "").replaceAll(/\s+/g, "_")
    console.log(slug);
    return `https://wiadomosci.gazeta.pl/wiadomosci/1,114885,15474104,${slug}.html`;
}
/// dodanie knefla
let button_row = document.querySelector("div.BBButtons.BBButtons_normal");
let comment_text = document.querySelector("textarea[name='com']")
let label_span = document.createElement("span");
label_span.innerText = "Krokodyle";
let croc_button = document.createElement("button");
croc_button.classList.add("BBButton", "BBButton_crocodiles");
croc_button.tabIndex = -1;
croc_button.type = "button";
// logika knefla
croc_button.onclick = () => {
    let selStart = comment_text.selectionStart;
    let selEnd = comment_text.selectionEnd;
    let text = comment_text.value.substring(selStart, selEnd);
    console.log(text);
    let output = comment_text.value.substring(0, selStart) + crocodiles(text) + comment_text.value.substring(selEnd);
    comment_text.value = output;
}
croc_button.appendChild(label_span);
button_row.appendChild(croc_button);
console.log("Załadowano generator krokodyli.");