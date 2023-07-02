import express from 'express'
import cors from 'cors'
// import axios from 'axios'
import bodyParser from 'body-parser'
import { Configuration, OpenAIApi } from 'openai'
import dotenv from 'dotenv'

dotenv.config()
const API_KEY = process.env.OPENAI_API_KEY
console.log(API_KEY)

const app = express()
const PORT = 3000

// mounting middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.post('/searching', (req, res) => {
// 	const userSearch = req
// 	// const data = await axios.get()
// 	res.send(userSearch)
// })

const configuration = new Configuration({
	apiKey: API_KEY,
})

const openai = new OpenAIApi(configuration)

app.post('/searching', async (req, res) => {
	// const { prompt } = req.body
	try {
		const response = await openai.createImage({
			prompt: 'A goat',
			n: 1,
			size: '512x512',
		})
		const image_url = response
		console.log(image_url)
	} catch (err) {
		console.log(err)
	}
})

app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`)
})
