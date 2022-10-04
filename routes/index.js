import { Router } from 'express'

const router = Router()

router.get('/', function (req, res) {
  res.render('index', { title: 'Home Page' })
})

router.get('/about', function (req, res) {
  res.render('about', { title: 'About' })
})

export {
  router
}
