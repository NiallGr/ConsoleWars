

psnMore.addEventListener("click", function () {
    document.getElementById('PSNFeatures').style.display = "initial";
    document.getElementById('PSNDescription').style.display = "none";
    document.getElementById('psnMore').style.display = "none";
    document.getElementById('psnLess').style.display = "initial";

});
psnLess.addEventListener("click", function () {
    document.getElementById('PSNDescription').style.display = "initial";
    document.getElementById('PSNFeatures').style.display = "none";
    document.getElementById('psnMore').style.display = "initial";
    document.getElementById('psnLess').style.display = "none";
});


xboxMore.addEventListener("click", function () {
    document.getElementById('xboxFeatures').style.display = "initial";
    document.getElementById('xboxDescription').style.display = "none";
    document.getElementById('xboxMore').style.display = "none";
    document.getElementById('xboxLess').style.display = "initial";

});
xboxLess.addEventListener("click", function () {
    document.getElementById('xboxDescription').style.display = "initial";
    document.getElementById('xboxFeatures').style.display = "none";
    document.getElementById('xboxMore').style.display = "initial";
    document.getElementById('xboxLess').style.display = "none";
});

comparisonbtn.addEventListener("click", function () {
    document.getElementById('comparisonPvsX').style.display = "initial";
    document.getElementById('comparisonLess').style.display = "initial";
    document.getElementById('comparisonbtn').style.display = "none";
    document.getElementById('comp1').style.display = "none";

})
comparisonLess.addEventListener("click", function () {
    document.getElementById('comparisonPvsX').style.display = "none";
    document.getElementById('comparisonLess').style.display = "none";
    document.getElementById('comparisonbtn').style.display = "initial";
})
// Scrool
ScrollReveal().reveal('.display-2', { interval: 40 });
ScrollReveal().reveal('#border-right', { interval: 140 });
ScrollReveal().reveal('#border-left', { interval: 140 });
ScrollReveal().reveal('#border1', { interval: 200 });
ScrollReveal().reveal('#border2', { interval: 200 });
ScrollReveal().reveal('#psControler', { delay: 700});
ScrollReveal().reveal('#xboxController', { delay: 700});
ScrollReveal().reveal('.green', { delay: 1400, interval: 100 });
ScrollReveal().reveal('.blue', { delay: 1400, interval: 100 });






