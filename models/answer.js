import mongoose from 'mongoose'

const Schema = mongoose.Schema

const answerSchema = new Schema({
  text: String,
  question: {ObjectId, ref:'Question'},
  author: {ObjectId, ref:'Profile'}
}, {
  timestamps: true //just in case for future enhancements
})

const Answer = mongoose.model('Answer', answerSchema)

export {
  Answer
}
