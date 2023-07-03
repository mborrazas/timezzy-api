import { Auth } from "../interfaces/auth.interface"
import { Personal } from "../interfaces/personal.interface";
import PersonalModel from "../models/personal"
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";


const loginUser = async ({ email, password }: Auth) => {
    const checkIs = await PersonalModel.findOne({ email });

    if (!checkIs) return "NOT_FOUND_USER";

    const passwordHash = checkIs.password;
    const isCorrect = await verified(password, passwordHash);

    if (!isCorrect) return "PASSWORD_INCORRECT";
    const token = generateToken(checkIs.email, checkIs._id, checkIs.comercio);
    const data = {
        token,
        user: checkIs
    };
    return data;

}


const registerUser = async ({ email, password, profilePhoto, description, name, comercio, phone }: Personal) => {
    try {
        const checkIs = await PersonalModel.findOne({ email });
        if (checkIs) return "ALREADY_USER";
        const passhash = await encrypt(password);
        const registerNewUser = await PersonalModel.create({ email, password: passhash, name, profilePhoto, description, comercio, phone });
        if (!registerNewUser) return "ERROR_SAVE_USER";
        const token = await generateToken(email, registerNewUser._id, "0");
        const data = {
            token,
            user: registerNewUser
        };
        return data;
    } catch (e) {
        console.error(e);
        return "ERROR_SAVE_USER";
    }
}

export { loginUser, registerUser }