import express from 'express';

const app = express();
const state = 'bitcointrade';

app.get('/', (req, res) => {
  console.log(req.body)
  res.status(200).json('Hello world!');
});

app.get('/abc123_', (req, res) => {
  console.log('get abc123_:', req);
  res.status(200);
});

app.get('/web/abc123_v1', (req, res) => {
  console.log('get abc123_v1:', req);
  res.status(200);
});

app.get('/web/abc123_v1', (req, res) => {
  console.log('v1 post:', req);
  res.status(200);
});


app.post('/', (req, res) => {
  console.log('post:', req);
  res.status(200);
});

const port = 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));
