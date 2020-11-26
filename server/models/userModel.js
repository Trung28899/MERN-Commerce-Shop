import mongoose from "mongoose";
import bcrypt from "bcryptjs";

/*
    {timestamps: true} is the configuration that will automatically 
    create and manage 'created_at' and 'updated_at' fields in a schema
*/

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

/*
  Check for matching password when login
*/
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

/*
  Encrypt password after request is send and before the email
  and password is saved into MongoDB

  This middleware will be automatically implemented, you won't see
  it implemented anywhere. It is auto-run after registerUser() in 
  userController.js is completed
*/
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
