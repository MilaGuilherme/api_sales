const mongoose = require('mongoose')

const url = 'mongodb+srv://user:puc2020@cluster0-wvmrk.mongodb.net/trabalho-final-aws?retryWrites=true&w=majority'
const options = {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true
}

mongoose.connect(url, options).then( function() {
    console.log('MongoDB is connected');
  })
    .catch( function(err) {
    console.log(err);
  });