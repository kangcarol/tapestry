import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  text: String,
  commenter: {type: Schema.Types.ObjectId, ref: 'Profile'},
}, {
  timestamps: true
})


const answerSchema = new Schema({
  text: { type: String, required: true},
  question: { type: Schema.Types.ObjectId, ref: "Question" },
  author: { type: Schema.Types.ObjectId, ref: "Profile" },
  comments: [commentSchema],
}, {
  timestamps: true //just in case for future enhancements
})

const Answer = mongoose.model('Answer', answerSchema)

export {
  Answer
}
