import mongoose from "mongoose";
import bcrypt from "bcrypt";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is required',
  },
  email: {
    type: String,
    unique: true,
    required: 'Email is required',
  },
  password: {
    type: String,
    min: 6,
    max: 64,
    required: 'Password is required',
  },
  stripe_account_id: '',
  stripe_seller: {},
  stripeSession: {},
}, { timestamps: true });

userSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      const hash = await bcrypt.hash(this.password, 12);
      this.password = hash; 
    }
    next();
  } catch (error) {
    console.error('BCRYPT HASH ERR', error);
    next(error);
  }
});

userSchema.methods.comparePassword = function (password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, (err, isMatch) => {
      if (err) {
        reject(err);
      } else {
        resolve(isMatch);
      }
    });
  });
};

export default mongoose.model("User", userSchema);
