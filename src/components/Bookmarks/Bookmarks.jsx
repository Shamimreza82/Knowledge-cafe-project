import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks, readingTime}) => {

    return (
        <div className="md:w-1/3">
            <div>
                <h3>Reading Time {readingTime}</h3>
            </div>
            <h2>BookMarked Blogs: {bookmarks.length} </h2>
            {
                bookmarks.map ((bookmark, idx) => <Bookmark key={idx} bookmark ={bookmark}></Bookmark>)
            }
        </div>
    );
};


export default Bookmarks;