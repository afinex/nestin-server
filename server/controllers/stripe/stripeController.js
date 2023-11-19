import User from "../../models/users";
import Stripe from "stripe";

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export const createConnectAccount = async (req, res) => {
  if (req.user) {
    const user = await User.findById(req.user._id).exec();

    if(!user.stripe_account_id){
      const account = await stripe.accounts.create({
        type: 'standard',
      });

      user.stripe_account_id = account.id;
      user.save();
      console.log(`Registered Stripe Account`);

    }
    else{
      console.log(`Stripe Account :`,user.stripe_account_id);
    }

  } else {
    res.status(401).json({
      success: false,
      message: 'Unauthorized' 
    });
  }
};
