// Desłowofiltryzacja linków z "kobietą" w nazwie strony.

function ho2housewife(link) {
    let new_href = link.getAttribute("href").replace("kurw", "kobiet");
    link.setAttribute("href", new_href);
}
// Zdekurwienie istniejących linków do kurwa.wp.pl
let ho_links = Array.from(document.querySelectorAll("a")).filter((each) => (
    /https*:\/\/.*kurw.*/.test(each.getAttribute("href"))
));

ho_links.forEach((each) => {
    ho2housewife(each);
});
console.log("Zdekurwiono istniejące linki");