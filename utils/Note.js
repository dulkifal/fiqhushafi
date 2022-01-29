const mongose = require('mongoose')
const NoteSchema = new mongose.Schema({
  title: {
    type: String,
    required:  [true, 'Title is required'],
    unique: true,
    maxlength:  [400, 'Title must be at least 40 characters'],
  },
  descri: {
    type: String,
    required: true,
    maxlength:  [2000, 'Discription must be at least 40 characters'],
     
  }
})

NoteSchema.index({title:"text",descri:"text",})

module.exports = mongose.models.Note || mongose.model('Note', NoteSchema)