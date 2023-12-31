import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import image  from './about.jpg';
import logo from './logo.png';
import axios from 'axios';

const csrfAxios = axios.create();
csrfAxios.defaults.xsrfCookieName = 'csrftoken'; 
csrfAxios.defaults.xsrfHeaderName = 'X-CSRFToken';


const Home = () => {
const [subscribe, setSubscribe] = useState(false)
const [featured,setFeatured] = useState([]);
const [latest, setLatest] = useState([])




const handleSubscribeBtn = (e) => {
  e.preventDefault()
  setSubscribe(!subscribe)
    setTimeout(() => {
    setSubscribe(false);
  }, 1500);
};


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
  const fetchlatest = async () => {
      try {
          const res = await csrfAxios.get('http://127.0.0.1:8000/api/Blogs/latest');
          console.log('Article latest:', res.data)
          setLatest(res.data);

      }
       catch (err) {

      }
  }

  fetchlatest();
}, []);



  return (
    <div className='Home'>
      <div className='searchbar'>
        <form > 
         <input className='inputsearch' type='text' placeholder='search article'/>
        </form>
        </div>

        <div class="container mt-5">
        <h1 className='featured'>Our Company</h1>
          <div className="jumbotron mt-5">
            <h1 className="display-4 ">Welcome To GreenHubNews <img src={logo} alt='' style={{ width: '50px', height: '35px' }} /></h1>
            <p className="lead">Get the latest Trends and News from across the Globe</p>
            <hr className="my-4" />
            <p className="lead mb-0">
            <Link to='/blog' className="btn btn-success btn-lg">Checkout the latest news</Link>
           </p>
          </div>
        </div>
        
        <div className='container mt-5' id='featured-section' >
          <h1 className='featured'>Featured</h1>
          <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
          <div className="col-lg-6 px-0">
            <h1 className="display-4 fst-italic">{featured.title}</h1>
            <p className="lead my-3">{featured.describtion}</p>
            <p className="lead mb-0">
            <Link to={`/blog/${featured.slug}`} className="text-body-emphasis fw-bold">Read more...</Link>
           </p>
                    
          </div>
        </div>
        </div>
       

       <div className='container'  id="about-section">
       <h1 className='featured'>About Us</h1>
        <div className="home-page">
  <section className="about-section">  
    <img src={image}  alt='Kincaid' className="image-desc"/>
    <div className="about-me-text">
    <p className="styled-text-1">Hello there,</p>
    <p className="styled-text-2">This is GreenHubNews <img src={logo} alt='' style={{ width: '40px', height: '30px' }} /></p>
    <p className="styled-text-2"></p>
    <p className="styled-text-3">
          We bring you the latest Trends all around the Globe <br/>
          We are committed to providing the latest news from,<br/>
          across the world.<br/>
          Committed to delivering the current latest trending<br /> 
          news to your door step <br/>

    </p>
</div>
  </section>
</div>
 </div>
   

 <div class="container px-4 py-5 mt-10" id="featured-3">
  <h2 className="pb-2 border-bottom bg-success">Latest Articles</h2>
  <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
    {latest.map((article) => (
      <div className="feature col" key={article.id}>
        <img className="bi" src={article.image} width="2em" height="2em" alt="thumbnail"/>
        <h3 className="fs-2 text-body-emphasis">{article.title}</h3>
        <p>{article.describtion}</p>
        <Link className="icon-link" to={`/blog/${article.slug}`}>
          Check it out...
        </Link>
      </div>
    ))}
  </div>
</div>
 
 

        <div className='container mt-5'>
        <section className="container">
          <form className="centered-form">
            <h5 className='subscribe'>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
             <div className="form-group">
             <label className="form-label email">Email address</label>
            <input type="email" placeholder="kiprotichkincaid@gmail.com" className="form-input" />
          </div>
          <button  className="submit-button" onClick={handleSubscribeBtn}>Subscribe</button>
          </form>
          <div  className='popupp'>
          {subscribe && (<div className='popup'>
         <p className='styling-popup'>Thanks for Subscribing!</p>
     </div>)}
     </div>
         </section>
         </div>
        

      
   
    </div>  
  )
}

export default Home