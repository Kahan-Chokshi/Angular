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

app.use('/admin',adminRoutes);
app.use('/user', userRoutes);
app.use('',authRoutes);

const PORT = 8080; 

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(response => {
        app.listen(PORT,function(){
            console.log(`🚀 Server is running on PORT: ${PORT}`);
         });        
    })
    .catch(err => {
        console.log("server connection Failed");
    })

