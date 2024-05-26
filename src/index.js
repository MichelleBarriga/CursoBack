const express = require('express');
const app = express();

app.get('/healthy', (req, res) => {
    res.status(200).json({
      health: 'live',
      status: 200,
      message: 'ok'
    });
  });

app.listen(3000, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is running on port 3000");
    }
});