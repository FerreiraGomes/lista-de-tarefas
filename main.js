$(document).ready(function() {

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $("#tarefas").val(); //esse é o valor colocado no input e guardando na vaiavel novaTarefa
        const novoItem = $('<li></li>'); //aqui criamos o elemento e guardamos na variavel novoItem
    
        $(`<li>${novaTarefa}</li>`)     //Aqui estamos add o elemento novaTarefa ao novoItem 
        .appendTo(novoItem)
        .click(() => $(event.target).toggleClass('riscado')); //Aqui está a função que aplica na class riscado para add ou remover o risco 
        $(novoItem).appendTo('ul');
        $('#tarefas').val("")
    })
})