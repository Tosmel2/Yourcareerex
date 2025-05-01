const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

// The Drugs Array
// This array contains a list of drugs with their details.
// Each drug is represented as an object with properties such as id, name, category, dosage, prescription status, stock, and manufacturer.
const drugs = [
  { id: 1, name: "Amoxicillin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 120, manufacturer: "Pfizer" },
  { id: 2, name: "Paracetamol", category: "Analgesic", dosageMg: 1000, isPrescriptionOnly: false, stock: 200, manufacturer: "GSK" },
  { id: 3, name: "Ibuprofen", category: "Analgesic", dosageMg: 400, isPrescriptionOnly: false, stock: 150, manufacturer: "Bayer" },
  { id: 4, name: "Chloroquine", category: "Antimalarial", dosageMg: 250, isPrescriptionOnly: true, stock: 80, manufacturer: "Sanofi" },
  { id: 5, name: "Ciprofloxacin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 70, manufacturer: "Pfizer" },
  { id: 6, name: "Loratadine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 160, manufacturer: "Novartis" },
  { id: 7, name: "Metformin", category: "Antidiabetic", dosageMg: 850, isPrescriptionOnly: true, stock: 140, manufacturer: "Teva" },
  { id: 8, name: "Artemether", category: "Antimalarial", dosageMg: 20, isPrescriptionOnly: true, stock: 60, manufacturer: "Roche" },
  { id: 9, name: "Aspirin", category: "Analgesic", dosageMg: 300, isPrescriptionOnly: false, stock: 180, manufacturer: "Bayer" },
  { id: 10, name: "Omeprazole", category: "Antacid", dosageMg: 20, isPrescriptionOnly: true, stock: 90, manufacturer: "AstraZeneca" },
  { id: 11, name: "Azithromycin", category: "Antibiotic", dosageMg: 250, isPrescriptionOnly: true, stock: 50, manufacturer: "Pfizer" },
  { id: 12, name: "Cetirizine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 110, manufacturer: "Novartis" },
  { id: 13, name: "Insulin", category: "Antidiabetic", dosageMg: 100, isPrescriptionOnly: true, stock: 30, manufacturer: "Novo Nordisk" },
  { id: 14, name: "Artemisinin", category: "Antimalarial", dosageMg: 100, isPrescriptionOnly: true, stock: 50, manufacturer: "GSK" },
  { id: 15, name: "Codeine", category: "Analgesic", dosageMg: 30, isPrescriptionOnly: true, stock: 20, manufacturer: "Teva" },
  { id: 16, name: "Vitamin C", category: "Supplement", dosageMg: 500, isPrescriptionOnly: false, stock: 300, manufacturer: "Nature’s Bounty" },
  { id: 17, name: "Ranitidine", category: "Antacid", dosageMg: 150, isPrescriptionOnly: false, stock: 90, manufacturer: "Sanofi" },
  { id: 18, name: "Doxycycline", category: "Antibiotic", dosageMg: 100, isPrescriptionOnly: true, stock: 40, manufacturer: "Pfizer" },
  { id: 19, name: "Tramadol", category: "Analgesic", dosageMg: 50, isPrescriptionOnly: true, stock: 45, manufacturer: "Teva" },
  { id: 20, name: "Folic Acid", category: "Supplement", dosageMg: 5, isPrescriptionOnly: false, stock: 250, manufacturer: "Nature’s Bounty" }
];

// 1. GET /drugs/antibiotics
app.get('/drugs/antibiotics', (req, res) => {
  const result = drugs.filter(drug => drug.category === "Antibiotic");
  res.json(result);
});

// 2. GET /drugs/names
app.get('/drugs/names', (req, res) => {
  const names = drugs.map(drug => drug.name.toLowerCase());
  res.json(names);
});

// 3. POST /drugs/by-category
app.post('/drugs/by-category', (req, res) => {
  const { category } = req.body;
  const result = drugs.filter(drug => drug.category === category);
  res.json(result);
});

// 4. GET /drugs/names-manufacturers
app.get('/drugs/names-manufacturers', (req, res) => {
  const result = drugs.map(drug => ({ name: drug.name, manufacturer: drug.manufacturer }));
  res.json(result);
});

// 5. GET /drugs/prescription
app.get('/drugs/prescription', (req, res) => {
  const result = drugs.filter(drug => drug.isPrescriptionOnly);
  res.json(result);
});

// 6. GET /drugs/formatted
app.get('/drugs/formatted', (req, res) => {
  const result = drugs.map(drug => `Drug: ${drug.name} - ${drug.dosageMg}mg`);
  res.json(result);
});

// 7. GET /drugs/low-stock
app.get('/drugs/low-stock', (req, res) => {
  const result = drugs.filter(drug => drug.stock < 50);
  res.json(result);
});

// 8. GET /drugs/non-prescription
app.get('/drugs/non-prescription', (req, res) => {
  const result = drugs.filter(drug => !drug.isPrescriptionOnly);
  res.json(result);
});

// 9. POST /drugs/manufacturer-count
app.post('/drugs/manufacturer-count', (req, res) => {
  const { manufacturer } = req.body;
  const count = drugs.filter(drug => drug.manufacturer === manufacturer).length;
  res.json({ manufacturer, count });
});

// 10. GET /drugs/count-analgesics
app.get('/drugs/count-analgesics', (req, res) => {
  let count = 0;
  drugs.forEach(drug => {
    if (drug.category === "Analgesic") count++;
  });
  res.json({ analgesicCount: count });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
