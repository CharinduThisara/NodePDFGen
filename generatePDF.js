const PDFDocument = require('pdfkit');

  // Function to generate Grama Sewa Certificate
  function generateGramaSewaCertificate(res,data) {
    const content = [
        { label: "District", value: data.district },
        { label: "Divisional Secretary's Division", value: data.division },
        { label: "Grama Niladari Division", value: data.gramaNiladariDivision },
        { label: "Name and Address", value: data.nameAddress },
        { label: "Sex", value: data.sex },
        { label: "Age", value: data.age },
        { label: "Civil Status", value: data.civilStatus },
        { label: "Sri Lankan", value: data.srilLankan },
        { label: "Religion", value: data.religion },
        { label: "Present Occupation", value: data.occupation },
        { label: "NIC", value: data.NIC },
        { label: "Police Clearance", value: data.policeClearanceRefNum },
        { label: "Signature of Grama Niladhari", value: data.gramaNiladhariSignature }
      ];
    const doc = new PDFDocument();

    // Set up the document with appropriate styling
    doc
      .font('Times-Bold')
      .fontSize(18)
      .text('Grama Niladari Certificate', { align: 'center' })
      .moveDown(1.5); // Increase line spacing

    // Draw a rectangle around the page
    doc.rect(30, 30, 540, 750).stroke();

    // Draw a line below the title within the border
    doc.lineWidth(1);
    doc.moveTo(30, 110).lineTo(570, 110).stroke(); // Adjusted line position

    // Add formatted content to the document
    doc.font('Times-Bold').fontSize(10);

    let y = 140; // Initial Y position for content

    content.forEach(({ label, value }) => {
      if (y + 20 < 780) { // Check if content fits within the page height
        doc
          .text(label.toUpperCase(), 50, y, { width: 250, align: 'left', bold: true })
          .text(':', 270, y)
          .text(value, 300, y, { width: 250 });
        y += 20; // Increment Y position for next content
      }
    });

    // Finalize PDF and send it as a response
    doc.pipe(res);
    doc.end();
  }

  module.exports = { generateGramaSewaCertificate };