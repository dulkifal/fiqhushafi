import { useState, useEffect } from "react";
import axios from "axios";


export default function addQuestion() {

  const [form, setform] = useState({ name: '', phone: '', email:'', question:'' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {

    if (isSubmitting) {

      if (Object.keys(errors).length === 0) {

      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const createQuestion = async () => {
    axios.post(`/api/questions`, form).then(({ data }) => { console.log(data) });
    document.QuestionForm.reset()
  }
  const handleSubmit = (e) => {
    e.preventDefualt();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
    console.log(value + "somthing")
  }
  const handleChange = (e) => {

    setform({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const validate = () => {
    let err = {};

    if (!form.name) {
      err.title = 'title is required'
    }
    if (!form.phone) {
      err.descri = 'Description is required'
    }
    if (!form.email) {
      err.email = 'Email is required'
    }
    if(!form.question){
      err.question = 'Question is required'
    }
    return err;
  }

  // const registerUser = async event => {
  //   event.preventDefault()

  //   const res = await fetch('https://sheetdb.io/api/v1/5qbdhzzycerc3', {
  //     body: JSON.stringify({
  //       name: event.target.name.value,
  //       email: event.target.email.value,
  //       phone: event.target.phone.value,
  //       quest: event.target.quest.value,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     method: 'POST'
  //   })
  //   const result = await res.json()
  //   event.target.reset()
  // }

  return (
    <div className='w-full max-w-xl m-auto '>
      <form onSubmit={handleSubmit} dir="rtl" name="QuestionForm" 
      className="flex flex-col mb-4 py-4 m-auto shadow-md bg-gray-100 rounded px-5">
        <label  className="block text-blue-900 text-sm font-bold mb-2">الإسم</label>
        <input onChange={handleChange} name="name" type="text" required
         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        <label   className="text-blue-900">Email</label>
        <input onChange={handleChange} dir="ltr"   name="email" type="text" required
         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        <label   className="text-blue-900">رقم الهاتف</label>
        <input onChange={handleChange}  name="phone" type="text" required 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        <label  className="text-blue-900">السؤال</label>
        <textarea onChange={handleChange} rows='4'  name="question" type="text" required 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      
        <button onClick={( e) => {
           
          e.preventDefault();
          createQuestion();
        }} 
          type="submit" 
          className="bg-green-400 font-bold m-auto rounded mt-7 w-1/6 h-7 text-green">اسأل</button>
    </form>
    </div>
  )
}