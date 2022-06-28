import dbConnect from '../../../utils/dbConnect';
import Note from '../../../utils/Note';
dbConnect();

const ind = async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                  
                const notes = await Note.find();
                res.status(200).json( notes );
              } catch (error) {
                res.status(400).json({ success: false });
               } break;

        case 'POST':
            try {
                console.log(req.body);
                const note = await Note.create(req.body);
                res.status(201).json( note );
            } catch (error) {
                res.status(400).json(error);
            } break;
        default:
            res.status(400).json({ success: false });
            break;
    

    }
}
module.exports = ind;