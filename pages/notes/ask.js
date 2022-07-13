export default function Form() {
  const registerUser = async event => {
    event.preventDefault()

    const res = await fetch('https://sheetdb.io/api/v1/5qbdhzzycerc3', {
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
        quest: event.target.quest.value,

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
    <div className='w-full max-w-xl m-auto '>
    <form onSubmit={registerUser} dir="rtl" className="flex flex-col mb-4 py-4 m-auto shadow-md bg-gray-100 rounded px-5">
        <label htmlFor="name" className="block text-blue-900 text-sm font-bold mb-2">الإسم</label>
        <input id="name" name="name" type="text" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        <label htmlFor="name" className="text-blue-900">Email</label>
        <input dir="ltr" id="email" name="email" type="text" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        <label htmlFor="name" className="text-blue-900">رقم الهاتف</label>
        <input id="phone" name="phone" type="text" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        <label htmlFor="name" className="text-blue-900">السؤال</label>
        <textarea rows='4' id="quest" name="quest" type="text" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      
      <button  type="submit" className="bg-green-400 font-bold m-auto rounded mt-7 w-1/6 h-7 text-green">اسأل</button>
    </form>
    </div>
  )
}