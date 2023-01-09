const mongoose = require('mongoose')
mongoose.set('strictQuery',true)
mongoose.connect("mongodb://localhost:27017/lokesh",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>console.log("connect ion successs"))