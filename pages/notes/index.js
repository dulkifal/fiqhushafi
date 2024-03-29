const Index = ({ data }) => {


  return (
    <div className=''>

      <div className=''>
        {data.map(note => {
          return (
            <>
            <a
              style={{ textDecoration: "none" }}
              href={`/notes/${note._id}`}
            > 
            <div data-aos="fade-up" key={note._id}>
              <div dir='rtl' className=' p-3 m-4 bg-gray-100 shadow-sm'  >
                <div className='  '>
                  <p className='underline font-bold px-3 py-2 rounded-md h-fit w-fit'>السؤال</p>
                  <p  className='mx-6'>{note.title}</p>
                  <p className='underline font-bold px-3 py-2 rounded-md w-fit h-fit text-green-700 '>الجواب</p>
                  <p className='mx-6 text-green-700 pb-3'>{note.descri}</p>
                </div>
              </div>
            </div>
              </a>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Index;

export const getServerSideProps = async ({ req }) => {
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''


  const res = await fetch(`${baseUrl}/api/notes/`);
  const data = await res.json();
  return {
    props: { data }
  }
}

