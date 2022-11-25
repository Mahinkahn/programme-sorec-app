import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="container my-4 mt-5">
            <div className="row">
                <div className="col-sm-6">
                    <img className='w-100 shadow' src="https://www.kindpng.com/picc/m/551-5512894_digital-marketing-img-seo-grow-your-business-hd.png" alt="" />
                </div>
                <div className="col-sm-6 d-flex align-items-center">
                    <div className="">
                        <h2 className='fs-2'>Learn Effectively that will take you towards your goal</h2>
                        <h3 className='text-info my-3'>Complete Web Development Course </h3>
                        <Link to='/courses'><button className='btn btn-danger'>Our Courses</button></Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;