let num = document.getElementById('formnumero')
let select = document.querySelector('#selnumeros')
let res = document.getElementById('res')
let valores = []

function adicionar(){
    if(num.value < 1 || num.value > 100){
    window.alert('[ERRO]')
}else{
    window.alert('OK')
}
}

