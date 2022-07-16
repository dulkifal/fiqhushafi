export default function showQuestions({ data }) {
  // console.log(data);
    return (
      <div className=''>

        <div className=' '>
          {data.map(question => {
            return (
              <div key={question._id}>
                <div dir='rtl' className=' p-3 '  >
                  <div className='   gap-2 grid-cols-1 grid-rows-3    shadow-xl'   >
                    <p className='underline font-bold px-3 py-2 rounded-md h-fit w-fit'>السائل </p>
                    <p className='mx-6'>{question.name}</p>
                    <p className='mx-6'>{question.email}</p>
                    <p className='mx-6'>{question.phone}</p>
                    <p className='underline font-bold px-3 py-2 rounded-md w-fit h-fit text-green-700 '> سؤاله</p>
                    <p className='mx-6'>{question.question}</p>
                    <p className='mx-6 text-green-700 pb-3'>{question.descri}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
  }


export const getServerSideProps = async ({ req }) => {
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''


  const res = await fetch(`${baseUrl}/api/questions`);
  const data = await res.json();
  return {
    props: { data }
  }
}

