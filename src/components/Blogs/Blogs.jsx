import React, { useEffect, useState } from 'react';
import Blog from '../blog/blog';
import PropTypes from 'prop-types';

const Blogs = ({handlebookmarks}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(()=> {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className='w-2/3'>
            <h2>Blogs {blogs.length}</h2>
            {
                blogs.map (blog => <Blog
                     key={blog.id}
                    blog={blog}
                    handlebookmarks = {handlebookmarks} ></Blog> )
            }
        </div>
    );
};

Blogs.propTypes = {
    handlebookmarks: PropTypes.func.isRequired
}

export default Blogs;