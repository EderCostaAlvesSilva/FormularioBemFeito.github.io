const firstname = document.getElementById('firstName');
const lastName = document.getElementById('LastName');
const email = document.getElementById('Email');
const password = document.getElementById('password')
const btn = document.getElementById('btn');

    function verificarEspaco(){
        
      
        sen = password.value;
        if(firstname == '' || lastName == '' || email == '' || sen == ''){
            alert('informe todos os dados!!');
            firstname.focus();
           return
        } 

        if(sen.length > 6){
            alert('Coloque uma senha com 6 caracteres');
            firstname.focus();
           return
        }

        let verificaEmail = email.value;

         verificaEmail = verificaEmail.replace('@gmail.com', '@gmail.com')
        
        if(email.value != verificaEmail){
            alert('informe corretamente os dados de seu email');
            firstname.focus();
            return
        } else{
            firstname.value = '';
            lastName.value = '';
            email.value = '';
            password.value = '';
            firstname.focus();
            return
        }
}

btn.addEventListener('click', verificarEspaco)
