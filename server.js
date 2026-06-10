const express = require('express');
const app = express();

function getNod(a, b) {
    while (b !== 0n) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function getNok(a, b) {
    if (a === 0n || b === 0n) return 0n;
    return (a * b) / getNod(a, b);
}


app.get('/irinamaciaka_gmail_com', (req, res) => {
    
    const { x, y } = req.query;

    const isNatural = /^[1-9]\d*$/;

    if (!x || !y || !isNatural.test(x) || !isNatural.test(y)) {
        res.setHeader('Content-Type', 'text/plain');
        return res.send('NaN');
    }

    const bigX = BigInt(x);
    const bigY = BigInt(y);

    const result = getNok(bigX, bigY);

    res.setHeader('Content-Type', 'text/plain');
    
    res.send(result.toString());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    
});
