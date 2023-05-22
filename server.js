const express = require('express');
const ideasRouter = require('./routes/ideas');
const port = 5000;
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the RandomIdeas API' });
});

app.use('/api/ideas', ideasRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));
