import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "token.01010101";

const generateToken = (email: string, id: any, comercio: string) => {
    const jwt = sign({ id, comercio, email }, JWT_SECRET, {
        expiresIn: "1y"
    });
    return jwt;
}

const verifyToken = async (jwt: string) => {
    const isOk = await verify(jwt, JWT_SECRET);
    return isOk;
};

export { generateToken, verifyToken }