export default function Form() {
  const registerUser = async event => {
    event.preventDefault()

    const res = await fetch('https://sheetdb.io/api/v1/5qbdhzzycerc3', {
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
        quest: event.target.quest.value,
        category: event.target.category.value,

      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()
    event.target.reset()
 
  }

  return (
    <div className=' p-3  '>
    <form onSubmit={registerUser} dir="rtl" className="flex flex-col mb-1 py-4 m-auto bg-blue-100 rounded w-1/2 form px-5">
      <label htmlFor="name">الأسم</label>
      <input id="name" name="name" type="text" required  className=""/>
      <label  htmlFor="name">Email</label>
      <input dir="ltr" id="email" name="email" type="text" required />
      <label htmlFor="name">رقم الهاتف</label>
      <input id="phone" name="phone" type="text" required />
      <label htmlFor="name"  >السؤال</label>
      <textarea rows='4' id="quest" name="quest" type="text" required />
      <label htmlFor="name" className="m-auto font-bold" >اختر قسمها</label>
      <select name="category" id="category"  required className="bg-pri-color   rounded-xl m-auto w-3/6 " >
        <option value="salat">الصلاة</option>
        <option value="swam">الصوم</option>
        <option value="haj">الحج</option>
        <option value="zakat">الزكاة</option>
        <option value="other">غيرها</option>
      </select>
      <button  type="submit" className="bg-blue-200 font-bold m-auto rounded-xl mt-7 w-3/6 text-green">اسأل</button>
    </form>
    </div>
  )
}