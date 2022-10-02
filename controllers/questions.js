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

function newQuestion(req, res) {
  Question.find({})
  .then(questions => {
    res.render('questions/new', {
      title: 'Add Question',
      questions,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/questions')
  })
}

function create(req, res) {
  Question.create(req.body)
  .then(question => {
    res.redirect('/questions/new')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/questions/new')
  })
}

export {
  index,
  newQuestion as new,
  create
}
