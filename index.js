const express = require('express')
const cors = require('cors')

const app = express()

const corsConfig = {
    origin: "*",
    optionSuccessStatus: 200
}

app.use(cors(corsConfig))
app.use(express.json())

app.use('/', (req, res, next) => {
    try {
        res.status(200).json({
            status: "success",
            data: {
                source: "FireBase"
            }
        })
    } catch (err) {
        res.status(200).json({
            status: "error",
            errMessage: err.message,
            err: err.stack()
        })
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.PORT}`)
})