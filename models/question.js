import mongoose from 'mongoose'

const Schema = mongoose.Schema

const questionSchema = new Schema({
  text: String,
  answers: [{ObjectId, ref: "Answer"}], //answers is for icebox: view page per question with all of its answers
})

const Question = mongoose.model('Question', questionSchema)

export {
  Question
}
