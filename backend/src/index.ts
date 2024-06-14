import express from 'express';

const app = express();
const port = 5000;

app.get('/api', (req, res) => {
  res.send('Chat GPT é MUITA vida!');
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
