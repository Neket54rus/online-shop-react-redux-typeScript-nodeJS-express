import express from 'express'
import mongoose from "mongoose"

import router from './router.js'

const PORT = 5000
const DB_URL = "mongodb+srv://admin:admin@cluster0.kqmpufl.mongodb.net/?retryWrites=true&w=majority"

const app = express()
app.use(express.json())
app.use('/api', router)

const startApp = async () => {
	try {
		await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
		app.listen(PORT, () => console.log("SERVER STARTED ON PORT" + PORT))
	} catch (error) {
		console.log(error)
	}
}
startApp()
