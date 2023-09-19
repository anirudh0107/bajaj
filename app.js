const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;


const userData = {
    full_name: 'Anirudh Sharma',
    dob: '15082002',
    email: 'anirudh1502@gmail.com',
    roll_number: '20BKT0107',
};

app.use(bodyParser.json());

app.get('/bfhl', (req, res) => {
   
    res.status(200).json({ operation_code: 1 });
});

app.post('/bfhl', (req, res) => {
    const data = req.body.data || [];

    
    const alphabets = data.filter((c) => c.match(/[a-zA-Z]/));
    const numbers = data.filter((c) => c.match(/[0-9]/));

    
    const highest_alphabet = alphabets.reduce((max, current) =>
        current.toLowerCase() > max.toLowerCase() ? current : max, '');

    const response_data = {
        is_success: true,
        user_id: `${userData.full_name}_${userData.dob}`,
        email: userData.email,
        roll_number: userData.roll_number,
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highest_alphabet ? [highest_alphabet] : [],
    };

    res.status(200).json(response_data);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
