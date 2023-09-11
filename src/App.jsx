import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setreadingTime] = useState (0)

  const handlebookmarks = (blog) => {
    const bookMarks = [...bookmarks, blog]
    setBookmarks(bookMarks);
  }

  const handelMarkAsRead =(time, id) => {
    setreadingTime(readingTime + time)
    console.log (bookmarks)
    const remaningBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remaningBookmarks)

  }


  return (
    <>  
     <Header></Header>
     <main className='md:flex max-w-6xl m-auto'>
       <Blogs
        handlebookmarks ={handlebookmarks}
        handelMarkAsRead = {handelMarkAsRead}
        ></Blogs>
       <Bookmarks 
       bookmarks={bookmarks}
       readingTime = {readingTime}
       ></Bookmarks>
     </main>
      
    </>
  )
}

export default App
