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

function admin(req, res) { //!add in if conditional
  Profile.find({})
  .then(profiles => {
    res.render("profiles/admin", {
      profiles,
      title: "Admin"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  admin
}
