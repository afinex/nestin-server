import Users from "../models/users";

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
            console.log("Register : successfully creating new User");
            return res.status(200).json({success:true,stored});
        }
    } catch (error) {
        console.log('Register : failed creating new User', error);
        return res.status(400).send("Error, try again .")
    }
}