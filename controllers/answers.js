import { Answer } from '../models/answer.js'
import { Question } from '../models/question.js'
import { Profile } from '../models/profile.js'

function index(req, res) {
  Answer.find({})
  .populate('question')
  .populate('author')
  .then(answers=> {
    console.log('answers', answers)
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
  req.body.author = req.user.profile._id
  console.log(req.body)
  Answer.create(req.body)
  .then(answer => {
    Profile.findById(req.user.profile._id)
    .then(profile => {
      profile.answers.push(answer)
      profile.save()
      .then(()=>{
        res.redirect('/answers')
      })
    })
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
