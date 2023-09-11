import PropTypes from 'prop-types';

const Blog = ({blog, handlebookmarks, handelMarkAsRead}) => {
    const {id, title, cover, author, author_img,hashtags, posted_date, name, reading_time} = blog
    return (
        <div className='mb-20'>
            <img src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-6 my-4'>
                    <img className='w-20 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <h4>{posted_date}</h4>
                    </div>
                </div>
                <div>
                    <span>{reading_time}</span>
                    <button onClick={() => handlebookmarks(blog)}>b</button>
                </div>
            </div>
            <h1 className='text-4xl my-4'>{title}</h1>
            <p>
                {
                    hashtags.map (hash => <span><a href=""> {hash}</a></span>)
                }
            </p>
            <button className='text-red' onClick={()=>handelMarkAsRead(reading_time, id)}><a href="#">Mark as read</a></button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}


export default Blog;