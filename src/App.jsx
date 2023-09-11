import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {

  return (
    <>  
     <Header></Header>
     <main className='md:flex max-w-6xl m-auto'>
       <Blogs></Blogs>
       <Bookmarks></Bookmarks>
     </main>
      
    </>
  )
}

export default App
