import jwt from "jsonwebtoken"
import config from "../config.js"
const decryptData = (req, res, next) => {
    var token = req.headers["authorization"].substring(7);
    if (token=="null")
        return res
            .status(401)
            .send({ auth: false, message: "No token provided." });
    jwt.verify(token, config.secret, function (err, decoded) {
        if (err)
            return res.status(500).send({
                auth: false,
                message: "Failed to authenticate token.",
            });
        req.body.userId = decoded._id
        next()
    });
}
export {decryptData}