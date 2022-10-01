import { Router } from 'express'
import * as answersCtrl from '../controllers/answers.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()



export {
  router
}
