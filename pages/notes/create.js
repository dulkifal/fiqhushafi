import { useState, useEffect } from "react";
import styles from '../../styles/fatwas.module.css'
import axios from "axios";

const NewNote = () => {
  const [form, setform] = useState({ title: '', descri: '' });
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

  const createNote = async () => {
    
    axios.post(`/api/notes`, form).then(({ data }) => { console.log(data) });
    document.formName.reset()
  }

  const handleSubmit = (e) => {
    e.preventDefualt();
    let errs = validate();
    setError(errs);
    setIsSubmitting(true);
    console.log(value)
  }
  const handleChange = (e) => {

    setform({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const validate = () => {
    let err = {};

    if (!form.title) {
      err.title = 'title is required'
    }
    if (!form.descri) {
      err.descri = 'Description is required'
    }
    return err;
  }

  return (
    <div>
      <h1  >Add  Answers</h1>
      <div className={styles.form}>
        {
          isSubmitting ? <h1>loading</h1> :

            <form name="formName" onSubmit={handleSubmit} className={styles.form}>

              <input name="title"
                placeholder="question"
                required
                onChange={handleChange}
                errors={errors.title ?
                  {
                    content: 'please enter title',
                    pointing: 'below'
                  } : null}>
              </input>

              <textarea name="descri"
                 cols="5" rows="5"
                placeholder="Answer"
                required
                onChange={handleChange}
                errors={errors.descri ?
                  {
                    content: 'please enter descri',
                    pointing: 'below'
                  } : null} >

              </textarea>
              <button onClick={(e) => {
                e.preventDefault();
                createNote();
                // router.push('/notes');
              }} type="submit">Create</button>

            </form>
        }
      </div>
    </div>
  )
}
export default NewNote;