import { Question } from '../models/question.js'


function index(req, res) {
  Question.find({})
  .then(questions => {
    res.render('questions/index', {
      questions,
      title: "share your experiences"
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
      title: 'create a question',
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

function update(req, res) {
  Question.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(question => {
    console.log(req.body,'updated question?')
    res.redirect(`/questions/new`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  newQuestion as new,
  create,
  update,
}
