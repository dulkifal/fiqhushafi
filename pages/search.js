import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import axios from "axios"

export default function Search() {

  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState([])
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setwordEntered] = useState("");
  const [data, setData] = useState([]);

  const searchEndpoint = (query) => `/api/search?q=${query}`

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query)
    if (query.length) {
      axios.post("/api/search", { s: query }).then(e => {
        console.log(e.data)
        setResults(e.data)
      })
    }
  })
  const handleChange = (e) => {
    let searchWord = e.target.value;
    setwordEntered(searchWord);
    let newFilter = data.filter((value) => {
      console.log(value.title.toLowerCase().includes(searchWord.toLowerCase()))
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const onFocus = useCallback(() => {
    setActive(true)
    window.addEventListener('click', onClick)
  })

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false)
      window.removeEventListener('click', onClick)
    }
  }, [])
  const getBooks = async () => {
    let books = await axios.get("/api/notes");
    setData(books.data);
  };
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <div dir='rtl'
      className="flex flex-col items-center justify-center   "
      ref={searchRef}
    >
      <input
        className="  w-1/2 h-10 p-2  border-2  rounded-lg focus:outline-none focus:border-blue-900"
        onChange={(e) => handleChange(e)}
        onFocus={onFocus}
        placeholder='البحث'
        type='text'
        value={wordEntered}
      />
      {filteredData.length > 0 && (
        <div className=" ">
          {filteredData.length > 0 ? (
            <small className='result-count'>{filteredData.length} results</small>
          ) : (
            ""
          )}

          <div className="result-item">
            {filteredData.slice(0, 1000).map((item, index) => (
              <>
                <a
                  style={{ textDecoration: "none" }}
                  href={`/notes/${item._id}`}
                >
                  <div className="data-item">
                    <p>{item.title}</p>
                    <small>{item.category}</small>
                  </div>
                </a>
              </>
            ))}
          </div>
        </div>
      )}
      {active && results.length > 0 && (
        <ul className={styles.results}>
          {results.map((searchData, index => (
            <li className={styles.result} key={index}>
              <Link href={`/notes/${searchData._id}`}>
                <a>{searchData.title}</a>
              </Link>
            </li>
          )))}
        </ul>
      )}
    </div>
  )
}