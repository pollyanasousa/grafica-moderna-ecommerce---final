# Projeto Final – E-commerce com API, JavaScript e Clean Code

## Descrição do Projeto

Este projeto consiste em um e-commerce desenvolvido com **HTML, CSS e JavaScript**, com foco em boas práticas de organização de código, acessibilidade e consumo de **APIs públicas**.  
A aplicação simula uma gráfica online, permitindo a visualização de produtos, adição ao carrinho, cálculo de frete e finalização de compra.

O projeto foi desenvolvido como atividade final do curso, aplicando conceitos de **Clean Code**, **manipulação do DOM** e **integração com APIs externas**.

---

## Funcionalidades Principais

- Exibição de catálogo de produtos  
- Adição de produtos ao carrinho  
- Contador dinâmico de itens  
- Modal de checkout com resumo do pedido  
- Cálculo de frete baseado no CEP  
- Consumo de API pública para busca de endereço  
- Alternância entre tema claro e escuro  
- Exibição de data e hora em tempo real  
- Simulação de formas de pagamento (PIX, boleto e cartão)  

---

## Tecnologias Utilizadas

- HTML5 (semântico)  
- CSS3 (responsivo)  
- JavaScript (Vanilla JS)  
- API ViaCEP  

---

## Estrutura de Pastas

/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── img/
│   └── imagens dos produtos
└── README.md

---

## Consumo de API Pública

### API Utilizada

- ViaCEP  
- Endpoint: https://viacep.com.br/ws/{CEP}/json/

### Finalidade

A API é utilizada para:

- Buscar o endereço com base no CEP informado pelo usuário  
- Calcular o valor do frete de acordo com a região  
- Definir o prazo de entrega dinamicamente  

O consumo da API é feito utilizando o método fetch(), com validação de dados e tratamento de erros.

---

## Acessibilidade

O projeto aplica princípios básicos de acessibilidade, como:

- Uso de HTML semântico  
- Uso de atributos alt em imagens  
- Contraste adequado entre cores  
- Labels associados aos inputs  
- Estrutura clara de navegação  

---

## Aplicação do Clean Code

Durante o desenvolvimento do projeto, foram aplicados os seguintes princípios de Clean Code:

- Nomes de variáveis e funções claros e descritivos  
- Separação de responsabilidades por módulos  
- Funções pequenas e objetivas  
- Comentários curtos e úteis  
- Código organizado e bem indentado  
- Evita duplicação de código  
- Uso de uma única fonte de verdade para dados compartilhados  

---

## Reflexão sobre Clean Code

/*
Durante o desenvolvimento deste projeto, procurei aplicar os princípios
do Clean Code organizando o JavaScript em módulos bem definidos, com
funções pequenas e nomes claros que facilitam a leitura e manutenção.

Evitei duplicação de lógica, centralizando cálculos importantes como
frete e prazo de entrega em funções específicas.

Como melhoria futura, o código pode ser refatorado para uso de módulos
ES6, classes e separação do JavaScript em múltiplos arquivos.
*/

---

## Como Executar o Projeto

1. Faça o download ou clone o projeto  
2. Abra o arquivo index.html em um navegador  
3. Navegue pelo site e teste as funcionalidades  

---

## Considerações Finais

Este projeto consolida conceitos fundamentais de desenvolvimento front-end,
consumo de APIs públicas e organização de código, simulando um cenário real
de e-commerce com foco em boas práticas e experiência do usuário.

## Acesso ao Projeto (GitHub Pages)

O projeto está disponível online através do GitHub Pages no link abaixo:

🔗 https://pollyanasousa.github.io/grafica-moderna-ecommerce---final/

