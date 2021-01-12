
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
ScrollReveal({ reset: true });
ScrollReveal().reveal('.display-2', { interval: 50 });
ScrollReveal().reveal('.row', { interval: 70 });
ScrollReveal().reveal('.green', { delay: 1300, interval: 100 });
ScrollReveal().reveal('.blue', { delay: 1300, interval: 100 });

