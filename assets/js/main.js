console.log('hello')

const textInput = document.getElementById('text-input');
const downloadButton = document.getElementById('download-button');

downloadButton.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (!text) {
        alert('Please enter some text.');
        return;
    }

    // Define the PDF document content using PDFMake
    const docDefinition = {
        content: [
            { text: text, fontSize: 12 } // Add the text content with font size 12
        ],
        pageSize: 'A4', // Set to A4 size
        pageMargins: [40, 40, 40, 40] // Margins: left, top, right, bottom
    };

    // Use pdfMake to create and download the PDF
    pdfMake.createPdf(docDefinition).download('text_to_pdf.pdf');
});