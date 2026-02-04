document.getElementById('tele').addEventListener('input', function(e) {
    // Trata o valor passado, no caso os números!
    let v = e.target.value.replace(/\D/g, '');
    
    // Formata a máscara com os parênteses no DDD!
    v = v.replace(/^(\d{2})(\d)/g, '($1) $2');

    // Formata a máscara colocando o traço!
    v = v.replace(/(\d{5})(\d{4})$/, '$1-$2');
    e.target.value = v; // atualiza o campo
});