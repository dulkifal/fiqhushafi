 
import { useState, useEffect, createContext } from "react";
import { useRouter } from "next/router";
import styles from '../../styles/fatwas.module.css'
import axios from "axios";

const NewNote = () => {
  const [form, setform] = useState({ title: '', descri: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {

    if (isSubmitting) {

      if (Object.keys(errors).length === 0) {
        // createNote();
        // createContext();

      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const createNote = async () => {
    // try {
    //   const res = await fetch('http://localhost:3000/api/notes', {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'contest-type': 'applicaton/json'

    //     },
    //     body: JSON.stringify(form)
    //   }).then(res => res.json()).then(data => {console.log(data)}).catch(err => {console.log(err)});
    //   //router.push('/');
    // } catch (error) {
    //   console.log(error);
    // }
    axios.post('http://localhost:3000/api/notes', form).then(({ data }) => { console.log(data) });
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
      <h1  >Create    Note</h1>
      <div className={styles.form}>
        {
          isSubmitting ? <h1>loading</h1> :


            <form name="formName" onSubmit={handleSubmit} className={styles.form}>

              <input name="title"
                placeholder="Title"
                required
                onChange={handleChange}
                errors={errors.title ?
                  {
                    content: 'please enter title',
                    pointing: 'below'
                  } : null}>
              </input>


              <textarea name="descri"
                id="" cols="5" rows="5"
                placeholder="Descri"
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