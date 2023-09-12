import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const csrfAxios = axios.create();
csrfAxios.defaults.xsrfCookieName = 'csrftoken';
csrfAxios.defaults.xsrfHeaderName = 'X-CSRFToken';



const BlogDetail = (props) => {
    const [blog, setBlog] = useState({});

    useEffect(() => {
        const slug = props.match.params.id;

        const fetchData = async () => {
            try {
                const res = await csrfAxios.get(`http://127.0.0.1:8000/api/Blogs/${slug}`)
                setBlog(res.data);
            }
            catch (err) {

            }
        };

        fetchData();
    }, [props.match.params.id]);

    const createBlog = () => {
        return {__html: blog.content}
    };

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    return (
        <main>
        <div class="container">
        <div className="jumbotron mt-5">
          <h1 className="display-4 ">Welcome To GreenHubNews </h1>
          <p className="lead">Get the latest Trends and News from across the Globe</p>
          <hr className="my-4" />
          <p className="lead mb-0">
          <Link to='/blog' className="btn btn-success btn-lg">Checkout the latest news</Link>
         </p>
        </div>
      </div>
        <div className='container mt-3'>
            <h1 className='display-2'>{blog.title}</h1>
            <h2 className='text-muted mt-3'>Category: {capitalizeFirstLetter(blog.category)}</h2>
            <h4>{blog.month} {blog.day}</h4>
            <div className='mt-5 mb-5' dangerouslySetInnerHTML={createBlog()} />
            <hr />
            <p className='lead mb-5'><Link to='/blog' className='font-weight-bold'>Back to Blogs</Link></p>
        </div>
        </main>
    );
};

export default BlogDetail;