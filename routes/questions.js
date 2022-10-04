import { Router } from 'express'
import * as questionsCtrl from '../controllers/questions.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/questions
router.get('/', questionsCtrl.index)

// GET localhost:3000/questions/new
router.get('/new', questionsCtrl.new)

// POST localhost:3000/questions
router.post('/', questionsCtrl.create)

router.put('/:id', isLoggedIn, questionsCtrl.update)

// router.delete('/:id', isLoggedIn, questionsCtrl.deleteQuestion)

export {
  router
}
