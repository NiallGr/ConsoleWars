if(screen.width>=1680) {document.write("<style>body{zoom:130%;}</style>");}

psnMore.addEventListener("click", function(){
    document.getElementById('PSNFeatures').style.display = "initial";
    document.getElementById('PSNDescription').style.display = "none";
    document.getElementById('psnMore').style.display = "none";
    document.getElementById('psnLess').style.display = "initial";
    
});
psnLess.addEventListener("click", function(){
    document.getElementById('PSNDescription').style.display = "initial";
    document.getElementById('PSNFeatures').style.display = "none";
    document.getElementById('psnMore').style.display = "initial";
    document.getElementById('psnLess').style.display = "none";
});


xboxMore.addEventListener("click", function(){
    document.getElementById('xboxFeatures').style.display = "initial";
    document.getElementById('xboxDescription').style.display = "none";
    document.getElementById('xboxMore').style.display = "none";
    document.getElementById('xboxLess').style.display = "initial";
    
});
xboxLess.addEventListener("click", function(){
    document.getElementById('xboxDescription').style.display = "initial";
    document.getElementById('xboxFeatures').style.display = "none";
    document.getElementById('xboxMore').style.display = "initial";
    document.getElementById('xboxLess').style.display = "none";
});

comparison.addEventListener("click", function(){
    document.getElementById('comparisonPvsX').style.display = "initial";
    document.getElementById('comparisonLess').style.display = "initial";
    document.getElementById('comparison').style.display = "none";
    
})
comparisonLess.addEventListener("click", function(){
    document.getElementById('comparisonPvsX').style.display = "none";
    document.getElementById('comparisonLess').style.display = "none";
    document.getElementById('comparison').style.display = "initial";
})
