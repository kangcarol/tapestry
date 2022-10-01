import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  admin: Boolean,
  name: String,
  avatar: String,
  answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
  questions: { type: Schema.Types.ObjectId, ref: "Question" }
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
