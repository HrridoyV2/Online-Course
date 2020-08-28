import React, { useState, useEffect } from 'react';
import './Course.css';
import fakeData from '../../fakeData';
import Details from '../Details/Details';
import Cart from '../Cart/Cart';

function Course() {
    console.log(fakeData);
    
    const [Courses, setCourse] = useState(fakeData.slice(0, 15));
  const [cart, setCart] = useState([])
    const handleAddCourse = (course) => {
      setCart([...cart, course])
    }
  return (
    <div>
      <header>
        <div className="course">
          <div className="cart-container">
            <Cart cart={cart}></Cart>
          </div>
          <div className="course-container d-flex flex-wrap">
            {
              Courses.map(crs => <Details
                handleAddCourse={handleAddCourse}
                course ={crs}></Details>)
          }
          </div>
        </div>
          
      
      </header>
    </div>
  );
} 



export default Course;
