import express from 'express'
import mongoose from 'mongoose'
import stats from './routes/infoRoute.js'
import path from 'path'
import cors from 'cors'

const app = express()

app.use(cors({
  origin: '*'
}));

const port = 3000

app.get('/', (req, res) => {
  app.use(express.static(path.resolve(__dirname,'client','build')))
  res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})

const url = 'mongodb://localhost/CountryData'
mongoose.connect(url , { useNewUrlParser : true})
const con = mongoose.connection
con.on('open',function(){
    console.log("Database connected...")
})
app.use(express.json())

app.use('/stats',stats)


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})