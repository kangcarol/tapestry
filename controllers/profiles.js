import { Answer } from '../models/answer.js'
import { Profile } from '../models/profile.js'


function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render("profiles/index", {
      profiles,
      title: "Profiles"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .populate({
    path: 'answers',
    populate: {path: 'question'}
  })
  .then(profile => {
    console.log(profile, 'PROFILE')
    res.render('profiles/show', {
      title: `${profile.name}'s profile`,
      profile,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

export {
  index,
  show,
}
