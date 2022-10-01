import { Question } from '../models/question.js'

function index(req, res) {
  Question.find({})
  .then(questions => {
    res.render('questions/index', {
      questions,
      title: "Questions"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index
}
