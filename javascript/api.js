const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  // return all users
  res.send('List of all users');
});

app.get('/api/users/:id', (req, res) => {
  // return a specific user
  const userId = req.params.id;
  res.send(`Details of user with ID ${userId}`);
});

app.post('/api/users', (req, res) => {
  // create a new user
  res.send('New user created');
});

app.put('/api/users/:id', (req, res) => {
  // update a user
  const userId = req.params.id;
  res.send(`User with ID ${userId} updated`);
});

app.delete('/api/users/:id', (req, res) => {
  // delete a user
  const userId = req.params.id;
  res.send(`User with ID ${userId} deleted`);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
