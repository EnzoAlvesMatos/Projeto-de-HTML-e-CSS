function menuTamanho(){
    if(window.innerWidth >= 768){
        itens.style.display = "block";
    }
    else{
        itens.style.display = "none";
    }
}
function abrirMenu(){
    if(itens.style.display == "block"){
     itens.style.display = "none"; 
    }
    else{
itens.style.display = "block"; 
    }
}