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
    // result.user => 'Ada Lovelace'
  }

  return (
    <form onSubmit={registerUser}>
      <label htmlFor="name">الأسم</label>
      <input id="name" name="name" type="text" required />
      <label htmlFor="name">Email</label>
      <input id="email" name="email" type="text" required />
      <label htmlFor="name">رفم الهاتف</label>
      <input id="phone" name="phone" type="text" required />
      <label htmlFor="name">السؤال</label>
      <input id="quest" name="quest" type="text" required />
      <select name="category" id="category" required >
        <option value="salat">الصلاة</option>
        <option value="swam">الصوم</option>
        <option value="haj">الحج</option>
        <option value="zakat">الزكاة</option>
        <option value="other">غيرها</option>
      </select>
      <button  type="submit">Register</button>
    </form>
  )
}