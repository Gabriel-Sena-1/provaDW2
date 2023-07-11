window.onload = ()=>{
    var campoTexto = document.getElementById("campoTexto");

    campoTexto.focus();
    campoTexto.addEventListener("keyup", function(){
        var msg = document.querySelector("#msg");

        if(event.key == "Enter"){
        msg.innerHTML += " " + campoTexto.value + "<br/>";
        campoTexto.value = '';
        }
    });
    campoTexto.addEventListener("change", function(){
        campoTexto.value = campoTexto.value.toLowerCase();
    });
    
    

}


function conta(valor, desconto){
    var valor = document.querySelector("#valor");
    var desconto = document.querySelector("#desconto");
    var result = 0;

    
    
    if(valor.value == "" && desconto.value == ""){
        alert("Preencha todos os campos!");

        valor.style.backgroundColor = 'rgb(255, 155, 155)';
        desconto.style.backgroundColor = 'rgb(255, 155, 155)';
    }else if(desconto.value == ""){
        alert("Preencha todos os campos!");

        desconto.style.backgroundColor = 'rgb(255, 155, 155)';
    }else if(valor.value == ""){
        alert("Preencha todos os campos!");

        valor.style.backgroundColor = 'rgb(255, 155, 155)';
    }else{
        valor.style.backgroundColor = '';
        desconto.style.backgroundColor = '';

        parseFloat(result = valor.value - (valor.value * (desconto.value/100)));

        alert("O total líquido após descontos é de: " + result);
    }
        
}
    

