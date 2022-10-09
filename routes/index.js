import { Router } from 'express'

const router = Router()

router.get('/', function (req, res) {
  res.render('index', { title: 'Tapestry' })
})

router.get('/about', function (req, res) {
  res.render('about', { title: 'about' })
})

export {
  router
}
