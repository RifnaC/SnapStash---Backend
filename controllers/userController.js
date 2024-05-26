const userModel = require("../models/user");

const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Check if the email already exists
        const existingUser = await userModel.findOne({ email:email });

        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Create a new user
        const newUser = new userModel({ name, email, password });
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const login = (req, res) => {
    const { email, password } = req.body;
    userModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json("The password is incorrect");
                }
            } else {
                res.json("No record existed");
            }
        })
        .catch(err => res.json(err));
};

module.exports = {
    register,
    login
};
