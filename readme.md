# Gerador de Currículo em PDF com JavaScript

Este projeto é uma aplicação web simples que permite ao usuário preencher dados pessoais, formação acadêmica e habilidades, e gerar um **currículo em PDF** de forma dinâmica usando [pdfMake](https://pdfmake.github.io/docs/).

- Para ver clique aqui: [Currículo PDF](https://nathan8bits.github.io/CurriculoPdf/)
---

## 📋 Funcionalidades

- Adicionar múltiplas formações acadêmicas dinamicamente.
- Adicionar múltiplas habilidades ou competências.
- Coletar informações pessoais do usuário.
- Gerar um currículo personalizado em formato PDF diretamente no navegador.

## 🚀 Tecnologias utilizadas

- HTML
- JavaScript Puro (Vanilla JS)
- [pdfMake](https://github.com/bpampuch/pdfmake) para geração de PDFs

## 🧠 Como funciona

### 1. `addEscolaridade()`
Adiciona dinamicamente um bloco de campos para preencher:
- Curso
- Instituição
- Localização
- Período

Cada novo bloco é indexado para manter os IDs únicos.

### 2. `addHabilidade()`
Adiciona um campo de texto para inserir uma nova habilidade. Cada habilidade recebe um ID baseado em sua posição.

### 3. `gerarPDF()`
Coleta os dados inseridos pelo usuário:
- Dados pessoais (nome, endereço, telefone, email, redes sociais, descrição)
- Escolaridade (múltiplos blocos)
- Habilidades (múltiplas entradas)

E então:
- Formata os dados usando o `docDefinition` do pdfMake.
- Aplica estilos e margens para o layout do currículo.
- Gera e baixa o PDF com o nome: `curriculo_NOME.pdf`.

## 📦 Estrutura esperada do HTML

Certifique-se de que seu HTML tenha os seguintes elementos com os IDs apropriados:

```html
<input id="nome" />
<input id="endereco" />
<input id="telefone" />
<input id="email" />
<input id="redes" />
<textarea id="descricao"></textarea>

<div id="escolaridade-container"></div>
<div id="habilidades-container"></div>

<button onclick="addEscolaridade()">Adicionar Escolaridade</button>
<button onclick="addHabilidade()">Adicionar Habilidade</button>
<button onclick="gerarPDF()">Gerar PDF</button>
```
É importante incluir a biblioteca pdfMake via CDN no seu HTML:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/pdfmake.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/vfs_fonts.js"></script>
```

## 📝 Licença

Este projeto é livre para uso e modificação.