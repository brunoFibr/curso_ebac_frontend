$(document).ready(function() {
    $('form').on('submit', function(e) {
    e.preventDefault();
    const tarefa = $('#tarefa').val();
    const novaTarefa = $(`<li>${tarefa}</li>`);
    $(novaTarefa).appendTo('ul');
    });


   $('ul').on('click', 'li', function() {
    const linha = $(this);
    linha.css('text-decoration', 'line-through');
    });
});
