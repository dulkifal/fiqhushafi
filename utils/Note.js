const mongose = require('mongoose')
const NoteSchema = new mongose.Schema({
  title: {
    type: String,
    required:  [true, 'Title is required'],
    unique: true,
    maxlength:  [40, 'Title must be at least 40 characters'],
  },
  descri: {
    type: String,
    required: true,
    maxlength:  [200, 'Discription must be at least 40 characters'],
     
  }
})

module.exports = mongose.models.Note || mongose.model('Note', NoteSchema)