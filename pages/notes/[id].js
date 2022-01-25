
const Details = ({ data }) => {

  return (
    <div>
      <h1> السوال</h1>
       <h1>{data.title}</h1>
       <h1>الجواب</h1>
      <h1>{data.descri}</h1>
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