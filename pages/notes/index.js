import Box from '@material-ui/core/Box';


import styles from '../../styles/Home.module.css'

const Index = ({ data }) => {


  return (
    <div className=' bg-on-primary-light '>

      <div className=' '>
        {data.map(note => {
          return (
            <div key={note._id}>
              <div dir='rtl' className=' p-3'  >
                <Box className='bg-on-primary-light grid gap-1 grid-cols-1 grid-rows-3  '   >
                  <p className=' font-bold px-3 py-2 rounded-md h-fit w-fit'>السؤال</p>
                  <p  className='mx-6'>{note.title}</p>
                  <p className='font-bold px-3 py-2 rounded-md w-fit h-fit  '>الجواب</p>
                  <p className='mx-6'>{note.descri}</p>
                </Box>
              </div>
            </div>
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

