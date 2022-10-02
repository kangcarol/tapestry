import { Answer } from '../models/answer.js'

function index(req, res) {
  Answer.find({})
  .then(answers=> {
    res.render('answers/index', {
      answers,
      title: "ANSWERS FEED"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function create(req, res) {
  req.body.author = req.user.profile.id
  console.log(req.body)
  Answer.create(req.body)
  .then(answer => {
    // profiles.answers.push(req.body)
    // profiles.answers.save()
    res.redirect('/answers')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/answers')
  })
}


export {
  index,
  create,
}
