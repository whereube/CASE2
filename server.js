import express from 'express'
const app = express()
import expressEjsLayouts from 'express-ejs-layouts'
import {indexRouter} from './routes/index.js'
import path from 'path'
import { fileURLToPath } from 'url'; 

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.set('layout', 'layouts/layout')
app.use(expressEjsLayouts) 
app.use(express.static('public'))

app.use('/', indexRouter)

app.listen(3000)