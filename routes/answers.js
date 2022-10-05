import { Router } from 'express'
import * as answersCtrl from '../controllers/answers.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()


// GET localhost:3000/answers
router.get('/', answersCtrl.index)

router.post('/', answersCtrl.create)

router.put('/:id', isLoggedIn, answersCtrl.update)

router.delete('/:id', isLoggedIn, answersCtrl.deleteAnswer)

// POST /answers/:id/comments
router.post('/:id/comments', answersCtrl.createComment)

export {
  router
}
