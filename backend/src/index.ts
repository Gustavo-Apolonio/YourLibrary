import express from 'express';
import path from 'path';

const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, 'frontend', 'build')));

app.get('/api', (req: any, res: any) => {
  res.send('Chat GPT é muita vida!');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
