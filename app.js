// Import required modules
const express = require('express');
const path = require('path');

// Create Express app
const app = express();

// Set the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Parse request body
app.use(express.urlencoded({ extended: true }));

// Define routes
app.get('/', (req, res) => {
  // Render the home page
  res.render('index', { issues: [] });
});

app.post('/issues', (req, res) => {
  const { title, description } = req.body;
  
  // Store the issue data in a database or file
  // For simplicity, we'll just store it in memory as an array
  const issue = {
    title,
    description,
    status: 'Open'
  };
  issues.push(issue);
  
  // Redirect to the home page
  res.redirect('/');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
