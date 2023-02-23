$(document).ready(function() {

    $('form').on('submit', function(e){
        e.preventDefault();

        const novaTarefa = $("#tarefas").val(); //esse é o valor colocado no input e guardando na vaiavel novaTarefa
        const novoItem = $('<li></li>'); //aqui criamos o elemento e guardamos na variavel novoItem
    
        $("{novaTarefa}").appendTo(novoItem); //estamos adicionando <li> para o nosso elemento .appendTo(novoItem)
        $(novoItem).appendTo('ul');
        $("li").click (function () {
            $(this).addClass("riscado");
        });
        $('#lista-tarefas').val("");
    })
})
