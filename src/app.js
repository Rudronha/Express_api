const express = require('expess');
const config = require('./config/config');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());

app.use('/users',userRoutes);

app.listen(config.port, () => {
    console.log(`Server running on port${config.port}`);
});