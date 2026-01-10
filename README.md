# Gráfica Premium - E-commerce (Versão com JavaScript)

## Sobre o Projeto

Este é um projeto de e-commerce para uma gráfica online, desenvolvido como parte da **Atividade 3** do curso, focado em adicionar interatividade com **JavaScript**.

Esta versão inclui funcionalidades dinâmicas implementadas com JavaScript puro (vanilla JS), diferente da versão anterior que continha apenas HTML e CSS.

## Funcionalidades JavaScript

Este projeto implementa as seguintes funcionalidades dinâmicas:

### 1. Alerta de Confirmação
- Ao clicar no botão "Comprar", exibe um alerta com o nome do produto adicionado
- Mostra o total de itens no carrinho

### 2. Contador de Itens no Carrinho
- Conta quantos produtos foram adicionados ao carrinho
- Exibe o número total de itens na tela
- Atualiza dinamicamente a cada clique

### 3. Alternância de Tema Claro/Escuro
- Botão no cabeçalho para alternar entre tema claro e escuro
- Salva a preferência do usuário no navegador
- Transições suaves entre os temas

### 4. Mostrar/Ocultar Detalhes do Produto
- Botão "Ver Detalhes" em cada produto
- Exibe especificações técnicas completas
- Alterna dinamicamente o texto do botão

### 5. Data e Hora em Tempo Real
- Exibe data e hora atual no rodapé
- Atualiza automaticamente a cada segundo
- Formato brasileiro: DD/MM/AAAA - HH:MM:SS

## Estrutura de Arquivos

```
grafica-moderna-ecommerce2/
│
├── index.html          # Estrutura HTML da página
│
├── css/
│   └── styles.css      # Estilos CSS (tema claro e escuro)
│
├── js/
│   └── script.js       # Funcionalidades JavaScript
│
├── img/                # Imagens dos produtos
│   ├── cartao-4x4.png
│   ├── Panfleto.png
│   ├── 178_a68j2qh5pjq04hsay65ea.jpg
│   └── adesivo-impresso-em-qualquer-tamanho-16297543425868808612413e6a78df.png
│
└── README.md           # Documentação do projeto
```

## Tecnologias Utilizadas

- **HTML5** - Estrutura semântica da página
- **CSS3** - Estilização e layout responsivo
- **JavaScript (Vanilla)** - Interatividade e funcionalidades dinâmicas

## Como Executar o Projeto

1. Clone este repositório
2. Abra o arquivo `index.html` em seu navegador
3. Ou use um servidor local como Live Server no VS Code

## Diferenças da Versão Anterior

Esta é a **versão 2** do projeto, que adiciona:

- Arquivo `script.js` com JavaScript
- Funcionalidades interativas (alerta, contador, tema, etc.)
- Seção de detalhes expansível nos produtos
- Relógio com data e hora em tempo real
- Botão de alternância de tema claro/escuro

A **versão 1** (repositório anterior) contém apenas HTML e CSS estáticos.

## Requisitos da Atividade

Este projeto atende aos seguintes requisitos da Atividade 3:

- [x] Arquivo JavaScript separado (js/script.js)
- [x] Integração com HTML usando tag script
- [x] Mínimo de 2 funcionalidades dinâmicas (implementadas 5)
- [x] Código organizado e comentado
- [x] Uso de JavaScript puro (sem bibliotecas externas)
- [x] Nomes de variáveis compreensíveis
- [x] Indentação e formatação adequadas

## Funcionalidades Implementadas vs Sugeridas

**Implementadas neste projeto:**
- a) Exibir alerta de confirmação ao clicar no botão "Comprar"
- b) Mostrar data e hora atual no rodapé
- c) Alternar entre modo claro e escuro com botão
- d) Mostrar/esconder seção de detalhes do produto
- e) Contar número de cliques no botão de compra e exibir na tela

## Conceitos JavaScript Utilizados

- Variáveis com `var`
- Estruturas de repetição `for`
- Condicionais `if/else`
- Eventos `onclick` e `addEventListener`
- Manipulação do DOM (`getElementById`, `querySelectorAll`)
- Funções
- `setInterval()` para atualização periódica
- Objeto `Date()` para data e hora
- `alert()` para mensagens ao usuário

## Autor

Desenvolvido como projeto acadêmico - Atividade 3

## Licença

Este projeto é de uso educacional.