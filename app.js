const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

// API endpoint to accept employee data
app.post('/api/employees', (req, res) => {
    const { name, email, position } = req.body;
    res.json({ name, email, position });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
