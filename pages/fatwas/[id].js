// export const getStaticPaths = async () =>{
//     const res = await fetch('https://dulkifal.github.io/json/json.json');
//     const data = await res.json();

//     const paths = data.map(fatwa =>{

//         return{
//             params: {id: fatwa.id.toString()}
//         }
//     })
//     return{
//         paths,
//         fallback: false
//     }
// }

// export const getStaticProps = async (context)=>{
//     const id = context.params.id.toString(); 
//      const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id);
//     // const res = await fetch('https://dulkifal.github.io/json/json.json/' + id); 
//     const data = await res.json();
//     console.log(data);
    
//     return {
//         props: {fatwa: data}
//     }
// }
 
//  const Details = ({fatwa}) => {
//     return ( 
//         <div>
//  <h1>{fatwa.name}</h1>
//  <p>{fatwa.p} </p>
  
//         </div>
//      );
// }
 
// export default Details;