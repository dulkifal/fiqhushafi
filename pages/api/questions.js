import dbConnect from '../../utils/dbConnect';
import Question from '../../utils/questionSchema';
dbConnect();

const ind = async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {

        const questions = await Question.find();
        res.status(200).json(questions);
      } catch (error) {
        res.status(400).json({ success: false });
      } break;

    case 'POST':
      try {
        console.log(req.body);
        console.log(req.body.name);
        const  question = await Question.create(req.body);
        res.status(201).json(question);
      } catch (error) {
        res.status(400).json(error);
      } break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
module.exports = ind;
