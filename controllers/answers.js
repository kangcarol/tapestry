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
      title: "Browse"
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
        res.redirect('/questions')
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/answers')
  })
}

function deleteAnswer(req, res) {
  Answer.findById(req.params.id)
  .then(answer => {
    if (answer.author.equals(req.user.profile._id)){
      answer.delete()
      .then(()=>{
        Profile.findById(req.user.profile._id)
        .then(profile => {
          profile.answers.remove(answer)
          profile.save()
          .then(() => {
            res.redirect(`/answers`)
          })
        })
      })
    } else {
      throw new Error('NOT AUTHORIZED')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/answers')
  })
}

function update(req, res) {
  Answer.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(answer => {
    console.log(req.body,'updated answer?')
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

function createComment(req, res) {
  console.log(req.body, "req.body")
  Answer.findById(req.params.id)
  .then(answer => {
    answer.comments.push(req.body)
    answer.save()
    .then(() => {
      res.redirect(`/answers`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  create,
  deleteAnswer,
  update,
  createComment
}
