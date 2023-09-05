import React, { useEffect, useState } from 'react';
import {NavLink,Link} from 'react-router-dom';
import axios from 'axios';

const csrfAxios = axios.create();
csrfAxios.defaults.xsrfCookieName = 'csrftoken';
csrfAxios.defaults.xsrfHeaderName = 'X-CSRFToken';


const Blog = () => {
  const [article, setArticle] = useState([]);
  const [featured,setFeatured] = useState([]);



  
  useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await csrfAxios.get('http://127.0.0.1:8000/api/Blogs/featured');
            console.log('Article data:', res.data[0])
            setFeatured(res.data[0]);

        }
         catch (err) {

        }
    }

    fetchData();
}, []);

useEffect(() => {
    const fetchBlogs = async () => {
        try {
            const res = await csrfAxios.get('http://127.0.0.1:8000/api/Blogs/');
            console.log('Article blog:', res.data)
            setArticle(res.data);
        }
        catch (err) {

        }
    }

    fetchBlogs();
}, []);



  /*const fetchBackendData = () => {
    csrfAxios.get('http://127.0.0.1:8000/api/Blogs/')
      .then(newsResponse => {
        setArticle(newsResponse.data.results);
      })
      .catch(error => 
        setError(error.message)
      );
  
      csrfAxios.get('http://127.0.0.1:8000/api/Blogs/featured')
      .then(res => {
        setFeatured(res.data[0]);
      })
      .catch(error => 
        setError(error.message)
        );
  };
  */
   //OR 
   /** const fetchBackendData = async () => {
      try {
        const articleResponse = await axios.get('http://127.0.0.1:8000/api/Blogs/');
        setArticle(articleResponse.data.results);

        const featuredResponse = await axios.get('http://127.0.0.1:8000/api/Blogs/featured');
        setFeatured(featuredResponse.data[0]);
      } catch (error) {
        setError(error.message);
      }
    };
**/
  
  
  
  //useEffect(() => {
    //fetchBackendData();
  //}, []);
  
 
 
 

  //Capitalizing first letter function
  const Capitalize = ( w => {
    //if we pass a word in our case w return ....bla blaa
    //w means for each 
    //the slice enables cont... with capitalizing the rest
    if(w)
         return w.charAt(0).toUpperCase() + w.slice(1)
        else;
          return '';
  }) 

  const getArticles = () => {

    let list = [];
        let result = [];
        
        article.map(blogPost => {
            return list.push(
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">{Capitalize(blogPost.category)}</strong>
                        <h3 className="mb-0">{blogPost.title}</h3>
                        <div className="mb-1 text-muted">{blogPost.month} {blogPost.day}</div>
                        <p className="card-text mb-auto">{blogPost.describtion}</p>
                        <Link to={`/blog/${blogPost.slug}`} className="stretched-link">Continue reading</Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img width='200' height='250' src={blogPost.image} alt='thumbnail' />
                    </div>
                </div>
            );
        });

        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i} className='row mb-2'>
                    <div className='col-md-6'>
                        {list[i]}
                    </div>
                    <div className='col-md-6'>
                        {list[i+1] ? list[i+1] : null}
                    </div>
                </div>
            )
        }

        return result;
    };

    // Check if article is an array and not empty
  /*   if (Array.isArray(article) && article.length > 0) {
      return article.map((article) => (
        
      <div className="row mb-2"> 
       <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" key={article.id}>
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary-emphasis">{Capitalize(article.category)}</strong>
            <h3 className="mb-0">{article.title}</h3>
            <div className="mb-1 text-body-secondary">{article.month} {article.day}</div>
            <p className="card-text mb-auto">{article.describtion}</p>
            <Link to={`/blog/${article.slug}`} className="icon-link gap-1 icon-link-hover stretched-link">
              Continue...
            </Link>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img src={article.image} alt="img" height="250px" width="200px" />
          </div>
        </div>
        </div>
        </div>
      ));
    } else {
      // Handle the case when article is not an array or is empty
      return <p>No articles found.</p>;
    }
  };
  */
  
  

  
  
  

  
  


  return (

      <div className='container mt-3'>
            <div className="nav-scroller py-1 mb-3 border-bottom">
               <nav className="nav nav-underline justify-content-between">
               <NavLink className="nav-item nav-link link-body-emphasis active" to="/category/world">World</NavLink>
               <NavLink className="nav-item nav-link link-body-emphasis" to="/category/technology">Technology</NavLink>
               <NavLink className="nav-item nav-link link-body-emphasis" to="/category/culture">Culture</NavLink>
               <NavLink className="nav-item nav-link link-body-emphasis" to="/category/business">Business</NavLink>
               <NavLink className="nav-item nav-link link-body-emphasis" to="/category/politics">Politics</NavLink>
               <NavLink className="nav-item nav-link link-body-emphasis" to="/category/environment">Environment</NavLink>
               <NavLink className="nav-item nav-link link-body-emphasis" to="/category/science" >Science</NavLink>
               <NavLink className="nav-item nav-link link-body-emphasis" to="/category/health">Health</NavLink>
               <NavLink className="nav-item nav-link link-body-emphasis" to="/category/travel">Travel</NavLink>
              </nav>
             </div>
        
          
      <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
          <div className="col-lg-6 px-0">
            <h1 className="display-4 fst-italic">{featured.title}</h1>
            <p className="lead my-3">{featured.describtion}</p>
            <p className="lead mb-0">
            <Link to={`/blog/${featured.slug}`} className="text-body-emphasis fw-bold">Read more...</Link>
           </p>
          </div>
        </div>
         
 
      
    <div className='newsdisplay'>{getArticles()}</div>   
    </div>
    
    
  )
}

export default Blog