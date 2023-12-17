const express = require('express');

const {generateGramaSewaCertificate} = require('./generatePDF');

const app = express();
const port = 9090; // You can change the port number as needed

app.use(express.json());

app.post('/generateCertificate', (req, res) => {
  const certificateData = req.body;

  if (!certificateData) {
    return res.status(400).json({ error: 'Certificate data is required' });
  }


  // Generate the Grama Sewa Certificate using provided data and send it as a response
  generateGramaSewaCertificate(res,certificateData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
