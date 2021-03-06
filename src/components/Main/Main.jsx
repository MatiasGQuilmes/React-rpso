import React from 'react';
import NavBar from './NavBar';
import Metrica from './Metrica';
const Main = () => {
    return (
       
        <div id="content">

           
            <NavBar/>
           

           
            <div className="container-fluid">

               
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div>

               
                <div className="row">

                   <Metrica
                    color = 'primary'
                    title = 'Products in Database'
                    value = '135'
                    icon = 'fa-clipboard-list'
                   />
                 
                </div>

               
                <div className="row">
                   
                    <div className="col-lg-6 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}}src="images/product_dummy.svg" alt="image dummy"/>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                                <a target="_blank" rel="nofollow" href="/">View product detail</a>
                            </div>
                        </div>
                    </div>

                   
                    <div className="col-lg-6 mb-4">						
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-6 mb-4">
                                        <div className="card bg-info text-white shadow">
                                            <div className="card-body">
                                                Category 01
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <div className="card bg-info text-white shadow">
                                            <div className="card-body">
                                                Category 02
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <div className="card bg-info text-white shadow">
                                            <div className="card-body">
                                                Category 03
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <div className="card bg-info text-white shadow">
                                            <div className="card-body">
                                                Category 04
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <div className="card bg-info text-white shadow">
                                            <div className="card-body">
                                                Category 05
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <div className="card bg-info text-white shadow">
                                            <div className="card-body">
                                                Category 06
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
       
    );
}

export default Main;
