// ========================================
// ARQUIVO: js/script.js
// Atividade 3 - JavaScript Básico
// ========================================

// Espera a página carregar completamente
window.onload = function() {
    
    // ========== FUNCIONALIDADE 1 e 5: Alerta + Contador ==========
    var contador = 0;
    
    // Pega todos os botões de compra
    var botoes = document.querySelectorAll('.btn-buy');
    
    // Para cada botão
    for (var i = 0; i < botoes.length; i++) {
        botoes[i].onclick = function() {
            // Pega o nome do produto
            var produto = this.getAttribute('data-product');
            
            // Aumenta contador
            contador = contador + 1;
            
            // Atualiza na tela
            document.getElementById('cart-count').innerHTML = contador;
            
            // Mostra alerta
            alert('Produto adicionado ao carrinho!\n\nProduto: ' + produto + '\n\nTotal: ' + contador + ' itens');
        };
    }
    
    
    // ========== FUNCIONALIDADE 2: Tema Claro/Escuro ==========
    var botaoTema = document.getElementById('theme-toggle');
    
    if (botaoTema) {
        botaoTema.onclick = function() {
            var corpo = document.body;
            
            if (corpo.className === 'dark-theme') {
                corpo.className = '';
            } else {
                corpo.className = 'dark-theme';
            }
        };
    }
    
    
    // ========== FUNCIONALIDADE 3: Mostrar/Esconder Detalhes ==========
    var botoesDetalhes = document.querySelectorAll('.toggle-details');
    
    for (var i = 0; i < botoesDetalhes.length; i++) {
        botoesDetalhes[i].onclick = function() {
            var detalhes = this.nextElementSibling;
            
            if (detalhes.style.display === 'none' || detalhes.style.display === '') {
                detalhes.style.display = 'block';
                this.innerHTML = 'Ocultar Detalhes';
            } else {
                detalhes.style.display = 'none';
                this.innerHTML = 'Ver Detalhes';
            }
        };
    }
    
    
    // ========== FUNCIONALIDADE 4: Data e Hora ==========
    function mostrarDataHora() {
        var agora = new Date();
        
        var dia = agora.getDate();
        var mes = agora.getMonth() + 1;
        var ano = agora.getFullYear();
        var hora = agora.getHours();
        var minuto = agora.getMinutes();
        var segundo = agora.getSeconds();
        
        // Adiciona zero à esquerda
        if (dia < 10) dia = '0' + dia;
        if (mes < 10) mes = '0' + mes;
        if (hora < 10) hora = '0' + hora;
        if (minuto < 10) minuto = '0' + minuto;
        if (segundo < 10) segundo = '0' + segundo;
        
        var dataHora = dia + '/' + mes + '/' + ano + ' - ' + hora + ':' + minuto + ':' + segundo;
        
        var elementoData = document.getElementById('current-datetime');
        if (elementoData) {
            elementoData.innerHTML = dataHora;
        }
    }
    
    // Atualiza imediatamente
    mostrarDataHora();
    
    // Atualiza a cada segundo
    setInterval(mostrarDataHora, 1000);
    
};

// ========================================
// FIM DO ARQUIVO
// ========================================