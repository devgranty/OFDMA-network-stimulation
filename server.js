const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Add routes
const userRoute = require('./routes/user.route');
const subcarrierRoute = require('./routes/subcarrier.route');
const profileRoute = require('./routes/profile.route');

// Add middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/v1/', [userRoute, subcarrierRoute, profileRoute]);

app.listen(PORT, () => {
    console.log(`Server running on: http://127.0.0.1:${PORT}`);
});