import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const csrfAxios = axios.create();
csrfAxios.defaults.xsrfCookieName = 'csrftoken';
csrfAxios.defaults.xsrfHeaderName = 'X-CSRFToken';



const BlogDetail = () => {
const [blog, setBlog] = useState([]);

const { slug } = useParams()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await csrfAxios.get(`http://127.0.0.1:8000/api/Blogs/${slug}`)
                setBlog(res.data);
                console.log('data param:', res.data)
            }
            catch (err) {

            }
        };

        fetchData();
    }, [slug]);

    

    const createBlog = () => {
        return {__html: blog.content}
    };

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    return (
        
        <div className='container mt-3'>
            <h1 className='display-2'>{blog.title}</h1>
            <h2 className='text-muted mt-3'>Category: {capitalizeFirstLetter(blog.category)}</h2>
            <h4>{blog.month} {blog.day}</h4>
            <div className='mt-5 mb-5' dangerouslySetInnerHTML={createBlog()} />
            <hr />
            <p className='lead mb-5'><Link to='/blog' className='font-weight-bold'>Back to Articles</Link></p>
        </div>
        
    );
};

export default BlogDetail;