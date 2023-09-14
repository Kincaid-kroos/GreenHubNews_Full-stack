import React from 'react';

import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';

import Layout from './HOC/Layout';
import Home from './Components/Home';
import Blog from './Components/Blog';
import Category from './Components/Category.js';
import BlogDetails from './Components/BlogDetails.js';
import Footer from './Components/Footer';
import './App.css';

const  App = () => {
  return (
    <div className="App">
      <Router>
      <div className="wrapper">
        <div className="content">
            <Layout>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route exact path='/blog' element={<Blog />} />
                <Route exact path='/category/:id' element={<Category />} />
                <Route exact path='/blog/:slug' element={ <BlogDetails/>} />
              </Routes>
            </Layout>
            </div>
            </div>
            <Footer />
      </Router>
     
    </div>
  );
}

export default App;
