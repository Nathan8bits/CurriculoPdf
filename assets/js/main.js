function addEscolaridade() {
    const container = document.getElementById('escolaridade-container');
    const index = container.children.length;
  
    const div = document.createElement('div');
    div.classList.add('mb-2', 'border', 'p-2', 'rounded');
    div.innerHTML = `
      <input class="form-control mb-1" placeholder="Curso" id="curso-${index}">
      <input class="form-control mb-1" placeholder="Instituição" id="instituicao-${index}">
      <input class="form-control mb-1" placeholder="Localização" id="local-${index}">
      <input class="form-control mb-1" placeholder="Período (ex: 2018 - 2022)" id="periodo-${index}">
    `;
    container.appendChild(div);
  }
  
  function addHabilidade() {
    const container = document.getElementById('habilidades-container');
    const index = container.children.length;
  
    const input = document.createElement('input');
    input.classList.add('form-control', 'mb-1');
    input.placeholder = 'Ex: JavaScript, Liderança, SQL...';
    input.id = `habilidade-${index}`;
    container.appendChild(input);
  }
  
  function gerarPDF() {
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const redes = document.getElementById('redes').value;
    const descricao = document.getElementById('descricao').value;
  
    const escolaridadeElements = document.querySelectorAll('#escolaridade-container > div');
    const escolaridade = Array.from(escolaridadeElements).map((div, i) => {
      return {
        curso: document.getElementById(`curso-${i}`).value,
        instituicao: document.getElementById(`instituicao-${i}`).value,
        local: document.getElementById(`local-${i}`).value,
        periodo: document.getElementById(`periodo-${i}`).value
      };
    });
  
    /*
    const habilidades = [];
    let i = 0;
    while (document.getElementById(`habilidade-${i}`)) {
      habilidades.push(document.getElementById(`habilidade-${i}`).value);
      i++;
    }*/
      const habilidades = [];
      let i = 0;
      while (document.getElementById(`habilidade-${i}`)) {
        const valor = document.getElementById(`habilidade-${i}`).value.trim();
        if (valor) habilidades.push(valor); // só adiciona se não for vazio
        i++;
      }
      
  
    const docDefinition = {
      content: [
        //{ text: 'Currículo', style: 'header' },
        { text: `${nome}`, style: 'header' },
        { text: `Endereço: ${endereco}` },
        { text: `Telefone: ${telefone}` },
        { text: `Email: ${email}` },
        { text: `Redes Sociais: ${redes}` },
        //{ text: 'Descrição', margin: [0, 10, 0, 0], bold: true },
        { text: descricao, margin: [0, 15, 0, 10] },
  
        { text: 'Formação Acadêmica', style: 'subheader' },
        {
            canvas: [
              { type: 'line', x1: 0, y1: 0, x2: 500, y2: 0, lineWidth: 1, lineColor: '#cccccc' }
            ],
            margin: [0, 2, 0, 10] // margem em volta da linha (topo, dir, baixo, esq)
          },
        ...escolaridade.map(e => {
            return {
            margin: [0, 5],
            stack: [
                { text: `${e.curso}`, bold: true },
                { text: `${e.instituicao}` },
                { text: `(${e.local}, ${e.periodo})`, style: 'textoCinza' }
            ]
        }
        }),
  
        { text: 'Habilidades e Competências:', style: 'subheader', margin: [0, 10, 0, 0] },
        {
            canvas: [
              { type: 'line', x1: 0, y1: 0, x2: 500, y2: 0, lineWidth: 1, lineColor: '#cccccc' }
            ],
            margin: [0, 2, 0, 10] // margem em volta da linha (topo, dir, baixo, esq)
        },
        
          /*...habilidades.map(h => ({
            text: h, 
            margin: [0, 2, 0, 0]
          }))*/
         {
          ul: habilidades,
          margin: [20, 0, 0, 0]
         }
        
      ],
      styles: {
        header: {
          fontSize: 22,
          bold: true,
          //alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        textoCinza: {
            color: '#666666'  // ou 'gray' se quiser nome direto
          }
      },
      pageMargins: [40, 40, 40, 40],
      pageSize: 'A4'
    };
  
    pdfMake.createPdf(docDefinition).download(`curriculo_${nome.replace(/\s+/g, '_')}.pdf`);
  }
  