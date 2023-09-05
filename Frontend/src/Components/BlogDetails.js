import React, { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const csrfAxios = axios.create();
csrfAxios.defaults.xsrfCookieName = 'csrftoken';
csrfAxios.defaults.xsrfHeaderName = 'X-CSRFToken';


const BlogDetails = () => {
  const { slug } = useParams();
  console.log('Received slug:', slug);
  //state to handle news content being fetched from backend
  const[news,setNews] = useState([])


  

  /*useEffect(() => {
    const fetchBackendSlug = () => {
      console.log('Fetching data for slug:', slug);
      csrfAxios.get(`http://127.0.0.1:8000/api/Blogs/${slug}`)
      .then(res => {
        console.log(res.data)
        setNews(res.data);
      })
      .catch(error => 
        error.message
      );
    }
  fetchBackendSlug()
  },[slug])
  */

  useEffect(() => {

    const fetchBackendSlug = async () => {
        try {
            const res = await  csrfAxios.get(`http://127.0.0.1:8000/api/Blogs/${slug}`)
            console.log('API Response:', res.data);
            setNews(res.data);
        }
        catch (err) {

        }
    };
  fetchBackendSlug()
  
}, [slug]);


const createBlog = () => {
  return {__html: news.content}
};

const capitalizeFirstLetter = (word) => {
  if (word)
      return word.charAt(0).toUpperCase() + word.slice(1);
  return '';
};

return (
  <div className='container mt-3'>
      <h1 className='display-2'>{news.title}</h1>
      <h2 className='text-muted mt-3'>Category: {capitalizeFirstLetter(news.category)}</h2>
      <h4>{news.month} {news.day}</h4>
      <div className='mt-5 mb-5' dangerouslySetInnerHTML={createBlog()} />
      <hr />
      <p className='lead mb-5'><Link to='/blog' className='font-weight-bold'>Back to Blogs</Link></p>
  </div>
);
};

export default BlogDetails;
  
  