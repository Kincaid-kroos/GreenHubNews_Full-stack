import React from 'react';
import {NavLink,Link, useParams} from 'react-router-dom';
import axios from 'axios';
import {useState,useEffect} from 'react';

const csrfAxios = axios.create();
csrfAxios.defaults.xsrfCookieName = 'csrftoken';
csrfAxios.defaults.xsrfHeaderName = 'X-CSRFToken';



const Category = ({match}) => {
  
    const [newsart,setNewsArt] = useState([]);
    const[currentCategory,setCurrentCategory] = useState('');

    const { id } = useParams();
    useEffect(() => {
      
      setCurrentCategory(Capitalize(id));

      const config = {
          headers: {
              'Content-Type': 'application/json'
          }
      };

      const fetchData = async () => {
          try {
              const res = await axios.post('http://127.0.0.1:8000/api/Blogs/category', { id }, config);
              setNewsArt(res.data);
              console.log('data:',res.data)
          }
          catch (err) {

          }
      };

      fetchData();
  }, [id]);

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

  const   getCategory = () => {

    let list = [];
        let result = [];
        
        if (newsart.length === 0) {
            return <p>No articles found in this category.</p>;
          }
          else {
        newsart.map(blogPost => {
            return list.push(
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">{Capitalize(blogPost.category)}</strong>
                        <h3 className="mb-0">{blogPost.title}</h3>
                        <div className="mb-1 text-muted">{blogPost.month} {blogPost.day}</div>
                        <p className="card-text mb-auto">{blogPost.describtion}</p>
                        <Link to={`/blog/${blogPost.slug}`} className="stretched-link">Continue reading</Link>
                    </div>
                    <div className="col-auto d-lg-block">
                        <img width='200' height='250' src={blogPost.image} alt='thumbnail' />
                    </div>
                </div>
            );
        })};

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

  return (
    
    <div className='container mt-3'>
    <h3 className='display-4'>{currentCategory} News</h3>
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
       
           {getCategory()}
  </div>
    
  );
}


export default Category;
