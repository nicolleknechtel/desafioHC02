function onlynumber(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  //var regex = /^[0-9.,]+$/;
  var regex = /^[0-9.]+$/;
  if( !regex.test(key) ) {
     theEvent.returnValue = false;
     if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

const getLocalStorage = () =>JSON.parse(localStorage.getItem('Cliente')) ?? []
  
const createData = (data) => {
  console.log(data)
  const dbData = getLocalStorage()
  dbData.push(data)
  
  
  
  
  localStorage.setItem("Cliente",JSON.stringify(dbData))
}

document.getElementById("clickMe").onclick = function (){ 
    
   
 if( (nome.value ) = "" ){
   alert('Preencha todos os campos.')
 }

 else{
    
    let data = {
    nome: document.getElementById('nome').value,
    email: document.getElementById('email').value,
    celular: document.getElementById('celular').value,
    rua: document.getElementById('rua').value,
    numero: document.getElementById('numero').value,
    bairro: document.getElementById('bairro').value,
    }

    createData(data)

    alert('Dados cadastrados com sucesso!')

    window.open("https://p22nicolle.netlify.app/");}
}
