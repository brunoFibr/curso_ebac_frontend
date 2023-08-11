$(document).ready(function () {

    $('#telefone').mask('(00) 00000-0000');
    $('#cep').mask('00000-000')

    $('#cpfCnpj').on('input', function(){

        let cpfCnpj = $(this).val().length;
        let cpfCnpjMascara = '000.000.000-00';

        if(cpfCnpj > 11){
            cpfCnpjMascara = '00.000.000/0000-00'
        }

        $('#cpfCnpj').mask(cpfCnpjMascara);
        


    })
})