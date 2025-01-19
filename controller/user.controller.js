import User from "../model/user.model.js";

const register = async (req, res) => {
    try {
        const { FullName, Email, UserName, Password } = req.body; // Destructure properly

        // Check if the user already exists
        const existingUser = await User.findOne({ username: UserName }); // Adjusted for case sensitivity
        if (existingUser) {
            return res.status(400).json({ msg: "User already exists" });
        }

        // Create a new user
        const createNewUser = new User({
            fullName: FullName,
            email: Email,
            username: UserName,
            password: Password, 
        });

        await createNewUser.save();
        res.status(201).json({ msg: "User registered successfully" });

    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ msg: "Internal server error", error: error.message });
    }
}

export default register;
