
const Details = ({ data }) => {

  return (
    <div>
      <div data-aos="fade-up" key={ data._id}>
        <div dir='rtl' className=' p-3 m-4 bg-gray-100 shadow-sm'  >
          <div className='  '>
            <p className='underline font-bold px-3 py-2 rounded-md h-fit w-fit'>السؤال</p>
            <p className='mx-6'>{data.title}</p>
            <p className='underline font-bold px-3 py-2 rounded-md w-fit h-fit text-green-700 '>الجواب</p>
            <p className='mx-6 text-green-700 pb-3'>{data.descri}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

Details.getInitialProps = async ({ query: id }) => {
  const id1 = id.id;
  const res = await fetch(`http://localhost:3000/api/notes/${id1}`);
  const data = await res.json();
  return { data }
}

export default Details;