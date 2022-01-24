import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import styles from './search.module.css'
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
  }, [])

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
    <div
      className={styles.container}
      ref={searchRef}
    >
      <input
        className={styles.search}
        onChange={(e) => handleChange(e)}
        onFocus={onFocus}
        placeholder='Search posts'
        type='text'
        value={wordEntered}
      />
      {filteredData.length > 0 ? (
        <small>{filteredData.length} results</small>
      ) : (
        ""
      )}
      {filteredData.length > 0 && (
        <div className="data-results">
          <div className="overflow-y-scroll overflow-x-hidden	 h-72">
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