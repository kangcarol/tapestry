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

export {
  index
}
