
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
 name : {
    type:String ,
    required:true,
  } ,
  email: {
      type: String,
      required:true,
    },
    password: {
        type: String,
      
      },
      date: {
          type: Date,
          default: Date.now
        },
        temporarytoken: {
            type: String,
            required:true,
          },
          active: {
            type: Boolean,
            required:true,
            default: false
            },
            googleId: {
              type:String ,
            
            } ,
            role: {
                type: String,
                required: true,
                default:"customer"
                //roles customer and admin
              },
});

module.exports = User = mongoose.model("users", UserSchema);