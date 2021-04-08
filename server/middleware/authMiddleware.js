const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization.split(" ")[1] //тип токен потом сам токен, поэтому пробел  "Bearer "
        if (!token) {
            res.status(401).json({ message: "Не авторизован" })
        }
        const decoden = jwt.verify(token, process.env.SECRET_KEY) // раскодирование токена (проверка токена на валидность)
        req.user = decoden
        next()
    } catch (e) {
        res.status(401).json({ message: "Не авторизован" })
    }
}