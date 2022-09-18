import express from 'express'
export const indexRouter = express.Router()
import {getCarmodels} from '../database.js'
import {getCar} from '../database.js'
import {getEmployees} from '../database.js'
import {getEmployee} from '../database.js'

indexRouter.get('/', async (req, res) => {
    const data = await getCarmodels()
    res.render('index.ejs', {text: data})
})

indexRouter.get('/employees', async (req, res) => {
    const list = await getEmployees()
    res.render('employees.ejs', {text: list})
})

indexRouter.get('/employees/:id', async (req, res) => {
    const employeeId = req.params.id
    const data = await getEmployee(employeeId)
    res.render('profile.ejs', {text: data})
})

indexRouter.get('/article/:id', async (req, res) => {
    const carId = req.params.id
    const data = await getCar(carId)
    res.render('article.ejs', {text: data})
})

