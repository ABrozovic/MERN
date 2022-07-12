import User from "../models/user";
import * as bcrypt from 'bcryptjs'

const postRegister = async (req: any, res: any) => {
    try {
        const {username, email, password} = req.body;

        const userExists = await User.exists({email: email, username: username});
        if (userExists) {
            return res.status(409).send("Email or Username already in use.")
        }
        const encryptedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username: username,
            password: encryptedPassword,
            email: email.toLowerCase()
        });
        const token = "Atoken";
        res.status(201).json({
            userDetails: {...user, token: token},

        })
    } catch (err) {
        return res.status(500).send(err);
    }
}
export default postRegister;