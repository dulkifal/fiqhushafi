import dbConnect from '../../../utils/dbConnect';
import Note from '../../../utils/Note';
dbConnect();

const a = async (req, res) => {
  const { query: { id }, method } = req;

  switch (method) {
    case 'GET':
      try {
        const note = await Note.findById(id);

        if (!note) {
          res.status(404).json({ success: false, message: 'Note not found' });
        }
        res.status(200).json( note );
      } catch (error) {
        res.status(400).json({ success: true });
      } break;
    case 'PUT':
      try {
        const note = await Note.findByIdAndUpdate(id,req.body,{
          new: true,
          runValidators: true  

        });
        if (!note) {
          res.status(404).json({ success: false, message: 'Note not found' });
        }
        res.status(200).json( note );
      } catch (error) {
        res.status(400).json({ success: false });
      } break;
    
      case 'DELETE':
          try{
            const deleteNote = await Note.deleteOne({_id:id});
            if(!deleteNote){
              return res.status(400).json({success: false})
            }
            res.status(200).json({ success: true, data: { } })

          }catch (error){
            res.status(400).json({ success: false });

          }break;
        default:
            res.status(400).json({ success: true });


  }
}
module.exports = a;