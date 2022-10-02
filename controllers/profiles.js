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
  .then(profile => {
    const isSelf = profile._id.equals(req.user.profile._id)
    res.render('profiles/show', {
      title: `${profile.name}'s profile`,
      isSelf,
      profile,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

// //find the profile to delete
// // from profile's answer array, remove the answer by id
// // also, need to remove the answer from Answer collection
// function deleteAnswer(req, res) {
//   Profile.findById(req.user.profile._id)
//   .then(profile => {
//     profile.answers.remove({_id: req.params.id})
//     profile.save()
//     .then(() => {
//       Answer.findById({_id:req.params.answerId})
//       // console.log('{_id:req.params.answerId}', {_id:req.params.answerId})
//     })
//       .then(() => {
//         res.redirect(`/profiles/${req.user.profile._id}`)
//       })
//     .catch(err => {
//       console.log(err)
//       res.redirect(`/profiles/${req.user.profile._id}`)
//     })
//   })
//   console.log('DELETE THIS ANSWER')
// }

export {
  index,
  show,
  // deleteAnswer,
}
