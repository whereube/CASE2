import express from 'express'
export const router = express.Router()
import {getCarmodels} from '../database.js'



router.get('/', async (req, res) => {
    const data = await getCarmodels()
    console.log("after")
    res.render('index', {text: data})
})
  


