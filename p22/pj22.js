const getLocalStorage = () =>JSON.parse(localStorage.getItem('Produto')) ?? [] 

var valor1=0;
var valor2= 0;
var valor3=0;
var ctl = false
var Form1 = document.getElementById("Form1")
var Form2 = document.getElementById("Form2")

Form1.style.visibility = "visible"
Form2.style.visibility = "hidden"

const createData = (produto) => {
    console.log(produto)
    const dbData = getLocalStorage()
    dbData.push(produto)
    localStorage.setItem("Produto",JSON.stringify(dbData))
  }
  
    
    document.getElementById("ice").onclick = function(){
if ( document.getElementById('qtd').value >= 0 ){
    valor1 = document.getElementById('qtd').value * 25;
    vt=valor1;
    let produto = {"Torta de Sorvete" : valor1,}
    createData(produto);
    
    document.getElementById("p1").innerHTML = "R$" + "" + valor1;

 }
 else { 
     alert('Quantidade nula')
     document.getElementById("p1").innerHTML = " ";
    
    
}};


document.getElementById("doce").onclick = function(){
    if ( document.getElementById('qtd2').value >= 0 ){
        let valor2 = document.getElementById('qtd2').value * 80;
        let uni= document.getElementById('qtd2').value* 100;
        let produto = {"Docinhos" : valor2,}
        vt = vt+valor2;
        createData(produto)
        document.getElementById("p2").innerHTML = "R$" + "" + valor2 + "<br>"
        + "Unidades =" + "" + uni;
                 }

     else {
      document.getElementById("p2").innerHTML = "";
         alert('Quantidade nula')        
    };
  } 
    document.getElementById("naked").onclick = function (){
        if ( document.getElementById('qtd3').value >= 0 ){;
            let valor3 = document.getElementById('qtd3').value * 50;
            let produto = {"Naked Cake de Morango" : valor3,}
            vt= vt+valor3
            createData(produto)
            
           document.getElementById("p3").innerHTML = "R$" + "" + valor3;
               
         }
         else {  document.getElementById("p3").innerHTML = "";
             alert('Quantidade nula')
             
            }};
                   

             document.getElementById("Next").onclick = function test (){
               
                if(ctl==false){
                    Form1.style.visibility= "hidden"
                    Form2.style.visibility= "visible"


document.getElementById("fp").innerHTML = 
"O valor total da sua compra é R$" + vt ;

document.getElementById("fp1").innerHTML = 
"Produtos:"+ " " +  "Torta de Sorvete R$" +  document.getElementById("qtd").value * 25;

document.getElementById("fp2").innerHTML = "Docinhos R$" + document.getElementById("qtd2").value* 80;
document.getElementById("fp3").innerHTML = "Naked Cake de Morango R$" + document.getElementById("qtd3"). value * 50 ;


}else{
                    Form1.style.visibility= "visible"
                    Form2.style.visibility= "hidden"
                    
                }

                ctl = !ctl;
              }