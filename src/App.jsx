import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {

  const [bookmarks, setBookmarks] = useState([])

  const handlebookmarks = (blog) => {
    const bookMarks = [...bookmarks, blog]
    setBookmarks(bookMarks);
  }


  return (
    <>  
     <Header></Header>
     <main className='md:flex max-w-6xl m-auto'>
       <Blogs handlebookmarks ={handlebookmarks}></Blogs>
       <Bookmarks bookmarks={bookmarks}></Bookmarks>
     </main>
      
    </>
  )
}

export default App
