const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const mongoUrl = require('./ApiKeys').mongoUrl;

const adminRoutes = require('./routes/adminRoute');
const userRoutes = require('./routes/userRoute');
const authRoutes = require('./routes/authRoutes');
const checkIsAdminAuthentication = require('./controllers/AuthController/AuthController').isAuthenticatedAdmin;

const app = express();

app.use(bodyParser.json());
app.use(cors());
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-type,Authorization');
//     next();
// });

app.use('/admin', checkIsAdminAuthentication,adminRoutes);
app.use('/user', userRoutes);
app.use('',authRoutes);

const PORT = process.env.PORT || '8080'; 

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(response => {
        app.listen(PORT,function(){
            console.log(`Server is running on PORT: ${PORT}`);
         });        
    })
    .catch(err => {
        console.log("server connection Failed");
    })

