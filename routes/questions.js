import { Router } from 'express'
import * as questionsCtrl from '../controllers/questions.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/questions
router.get('/', questionsCtrl.index)

export {
  router
}
