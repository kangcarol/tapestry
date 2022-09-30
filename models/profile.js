import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  admin: Boolean,
  name: String,
  avatar: String,
  answers: [{ObjectId, ref: "Answer"}],
  questions: {ObjectId, ref: "Question"}, //optional
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
