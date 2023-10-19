import Users from "../models/users";
const bcrypt = require("bcrypt");
export const register = async(req, res) =>{

    const {name,email,password} = req.body;
    if(!name) return res
    .status(400).send('Name is required');

    if(!email) return res
    .status(400).send('Email is required');

    let userExist = await Users.findOne({email}).exec();

    if(userExist) return res.status(400).send('Email is taken');

    if(!password || password.length < 6) 
    return res
        .status(400)
        .send('Password is required and should be min 6 characters');
    
    
    try {
        // let saved = await Users.create(req.body)
        // console.log(saved)
        // return res.status(200).send(saved)
        let stored = await Users.create(req.body);
        if(stored){
            console.log("REGISTER : Successfully creating new User");
            console.log(req.body);
            return res.status(200).json({success:true,stored});
        }
    } catch (error) {
        console.log('REGISTER : Failed creating new User', error);
        return res.status(400).send("Error, try again .")
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      let userExists = await Users.findOne({ email }).exec();

      if (userExists) {
        const isMatch = await userExists.comparePassword(password);
        if (isMatch) {
          console.log('Login successful');
        } else {
          console.log('Password does not match');
          res.status(400).send('Password does not match');
        }
      } else {
        console.log('User not found');
        res.status(400).send('User not found');
      }
    } catch (error) {
      console.error('ERROR', error);
      res.status(500).send('Internal Server Error');
    }
  }
  