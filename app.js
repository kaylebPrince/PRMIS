const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());

app.get('/', (req, res) => {
    console.log(res);
    res.status(200).json({ message: 'Welcome to the Patient Record Management System' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});