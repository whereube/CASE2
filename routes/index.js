import express from 'express'
export const indexRouter = express.Router()
import {getCarmodels} from '../database.js'
import {getCar} from '../database.js'

indexRouter.get('/', async (req, res) => {
    let data = await getCarmodels()
    res.render('index.ejs', {text: data})
})
  
indexRouter.get('/:id', async (req, res) => {
    const carId = req.params.id
    let data = await getCar(carId)
    res.render('article.ejs', {text: data})
})


