const mongose = require('mongoose')
const QuestionSchema = new mongose.Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    unique: true,
    // maxlength: [40, 'name must be at least 40 characters'],
  },
  email: {
    type: String,
    required: true,
    // maxlength: [20, 'email must be at least 40 characters'],

  },
  phone: {
    type: String,
    required: true,
    // maxlength: [20, 'phone must be at least 40 characters'],
  },
  question: {
    type: String,
    required: true,
    // maxlength: [2000, 'question must be at least 40 characters'],
  }
})

QuestionSchema.index({ name: "text",phone:"text",email:"text" , question: "text" })

module.exports = mongose.models.Question || mongose.model('Question', QuestionSchema)