import React from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { NavLink } from 'react-router-dom';


import face1 from '../Dashboard/style/images/faces/face1.jpg';
import face2 from '../Dashboard/style/images/faces/face2.jpg';
import face3 from '../Dashboard/style/images/faces/face3.jpg';
import face4 from '../Dashboard/style/images/faces/face4.jpg';
import face5 from '../Dashboard/style/images/faces/face5.jpg';
import face6 from '../Dashboard/style/images/faces/face6.jpg';
import face7 from '../Dashboard/style/images/faces/face7.jpg';


const Tables = () => {




  return (
    <>
      <Navbar />
      <div className="container-fluid page-body-wrapper px-0">
        <Sidebar activeLink='tables' />

        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-lg-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Basic Table</h4>
                    <p className="card-description">
                      Add class <code>.table</code>
                    </p>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Profile</th>
                            <th>VatNo.</th>
                            <th>Created</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Jacob</td>
                            <td>53275531</td>
                            <td>12 May 2017</td>
                            <td><label className="badge badge-danger">Pending</label></td>
                          </tr>
                          <tr>
                            <td>Messsy</td>
                            <td>53275532</td>
                            <td>15 May 2017</td>
                            <td><label className="badge badge-warning">In progress</label></td>
                          </tr>
                          <tr>
                            <td>John</td>
                            <td>53275533</td>
                            <td>14 May 2017</td>
                            <td><label className="badge badge-info">Fixed</label></td>
                          </tr>
                          <tr>
                            <td>Peter</td>
                            <td>53275534</td>
                            <td>16 May 2017</td>
                            <td><label className="badge badge-success">Completed</label></td>
                          </tr>
                          <tr>
                            <td>Dave</td>
                            <td>53275535</td>
                            <td>20 May 2017</td>
                            <td><label className="badge badge-warning">In progress</label></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Hoverable Table</h4>
                    <p className="card-description">
                      Add class <code>.table-hover</code>
                    </p>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>User</th>
                            <th>Product</th>
                            <th>Sale</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Jacob</td>
                            <td>Photoshop</td>
                            <td className="text-danger"> 28.76% <i className="ti-arrow-down"></i></td>
                            <td><label className="badge badge-danger">Pending</label></td>
                          </tr>
                          <tr>
                            <td>Messsy</td>
                            <td>Flash</td>
                            <td className="text-danger"> 21.06% <i className="ti-arrow-down"></i></td>
                            <td><label className="badge badge-warning">In progress</label></td>
                          </tr>
                          <tr>
                            <td>John</td>
                            <td>Premier</td>
                            <td className="text-danger"> 35.00% <i className="ti-arrow-down"></i></td>
                            <td><label className="badge badge-info">Fixed</label></td>
                          </tr>
                          <tr>
                            <td>Peter</td>
                            <td>After effects</td>
                            <td className="text-success"> 82.00% <i className="ti-arrow-up"></i></td>
                            <td><label className="badge badge-success">Completed</label></td>
                          </tr>
                          <tr>
                            <td>Dave</td>
                            <td>53275535</td>
                            <td className="text-success"> 98.05% <i className="ti-arrow-up"></i></td>
                            <td><label className="badge badge-warning">In progress</label></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Striped Table</h4>
                    <p className="card-description">
                      Add class <code>.table-striped</code>
                    </p>
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>
                              User
                            </th>
                            <th>
                              First name
                            </th>
                            <th>
                              Progress
                            </th>
                            <th>
                              Amount
                            </th>
                            <th>
                              Deadline
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-1">
                              <img src={face1} alt="image" />
                            </td>
                            <td>
                              Herman Beck
                            </td>
                            <td>
                              <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{width: "25%", ariaValuenow:"25", ariaValuemin:"0", ariavaluemax:"100"}}></div>
                              </div>
                            </td>
                            <td>
                              $ 77.99
                            </td>
                            <td>
                              May 15, 2015
                            </td>
                          </tr>
                          <tr>
                            <td className="py-1">
                              <img src={face2} alt="image" />
                            </td>
                            <td>
                              Messsy Adam
                            </td>
                            <td>
                              <div className="progress">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "25%", ariaValuenow:"25", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                              </div>
                            </td>
                            <td>
                              $245.30
                            </td>
                            <td>
                              July 1, 2015
                            </td>
                          </tr>
                          <tr>
                            <td className="py-1">
                              <img src={face3} alt="image" />
                            </td>
                            <td>
                              John Richards
                            </td>
                            <td>
                              <div className="progress">
                                <div className="progress-bar bg-warning" role="progressbar" style={{width: "90%", ariaValuenow:"90", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                              </div>
                            </td>
                            <td>
                              $138.00
                            </td>
                            <td>
                              Apr 12, 2015
                            </td>
                          </tr>
                          <tr>
                            <td className="py-1">
                              <img src={face4} alt="image" />
                            </td>
                            <td>
                              Peter Meggik
                            </td>
                            <td>
                              <div className="progress">
                                <div className="progress-bar bg-primary" role="progressbar" style={{width: "50%", ariaValuenow:"50", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                              </div>
                            </td>
                            <td>
                              $ 77.99
                            </td>
                            <td>
                              May 15, 2015
                            </td>
                          </tr>
                          <tr>
                            <td className="py-1">
                              <img src={face5} alt="image" />
                            </td>
                            <td>
                              Edward
                            </td>
                            <td>
                              <div className="progress">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "35%", ariaValuenow:"35", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                              </div>
                            </td>
                            <td>
                              $ 160.25
                            </td>
                            <td>
                              May 03, 2015
                            </td>
                          </tr>
                          <tr>
                            <td className="py-1">
                              <img src={face6} alt="image" />
                            </td>
                            <td>
                              John Doe
                            </td>
                            <td>
                              <div className="progress">
                                <div className="progress-bar bg-info" role="progressbar" style={{width: "65%", ariaValuenow:"65", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                              </div>
                            </td>
                            <td>
                              $ 123.21
                            </td>
                            <td>
                              April 05, 2015
                            </td>
                          </tr>
                          <tr>
                            <td className="py-1">
                              <img src={face7} alt="image" />
                            </td>
                            <td>
                              Henry Tom
                            </td>
                            <td>
                              <div className="progress">
                                <div className="progress-bar bg-warning" role="progressbar" style={{width: "20%", ariaValuenow:"20", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                              </div>
                            </td>
                            <td>
                              $ 150.00
                            </td>
                            <td>
                              June 16, 2015
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Bordered table</h4>
                    <p className="card-description">
                      Add class <code>.table-bordered</code>
                    </p>
                    <div className="table-responsive pt-3">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>
                              #
                            </th>
                            <th>
                              First name
                            </th>
                            <th>
                              Progress
                            </th>
                            <th>
                              Amount
                            </th>
                            <th>
                              Deadline
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              1
                            </td>
                            <td>
                              Herman Beck
                            </td>
                            <td>
                              <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{width: "25%", ariaValuenow:"25", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                              </div>
                            </td>
                            <td>
                              $ 77.99
                            </td>
                            <td>
                              May 15, 2015
                            </td>
                          </tr>
                          <tr>
                            <td>
                              2
                            </td>
                            <td>
                              Messsy Adam
                            </td>
                            <td>
                              <div className="progress">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "25%", ariaValuenow:"25", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                              </div>
                            </td>
                            <td>
                              $245.30
                            </td>
                            <td>
                              July 1, 2015
                            </td>
                          </tr>
                          <tr>
                            <td>
                              3
                            </td>
                            <td>
                              John Richards
                            </td>
                            <td>
                              <div className="progress">
                                <div className="progress-bar bg-warning" role="progressbar" style={{width: "90%", ariaValuenow:"90", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                              </div>
                            </td>
                            <td>
                              $138.00
                            </td>
                            <td>
                              Apr 12, 2015
                            </td>
                          </tr>
                          <tr>
                            <td>
                              4
                            </td>
                            <td>
                              Peter Meggik
                            </td>
                            <td>
                              <div className="progress">
                                <div className="progress-bar bg-primary" role="progressbar" style={{width: "50%", ariaValuenow:"50", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                              </div>
                            </td>
                            <td>
                              $ 77.99
                            </td>
                            <td>
                              May 15, 2015
                            </td>
                          </tr>
                          <tr>
                            <td>
                              5
                            </td>
                            <td>
                              Edward
                            </td>
                            <td>
                              <div className="progress">
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "35%", ariaValuenow:"35", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                              </div>
                            </td>
                            <td>
                              $ 160.25
                            </td>
                            <td>
                              May 03, 2015
                            </td>
                          </tr>
                          <tr>
                            <td>
                              6
                            </td>
                            <td>
                              John Doe
                            </td>
                            <td>
                              <div className="progress">
                                <div className="progress-bar bg-info" role="progressbar" style={{width: "65%", ariaValuenow:"65", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                              </div>
                            </td>
                            <td>
                              $ 123.21
                            </td>
                            <td>
                              April 05, 2015
                            </td>
                          </tr>
                          <tr>
                            <td>
                              7
                            </td>
                            <td>
                              Henry Tom
                            </td>
                            <td>
                              <div className="progress">
                                <div className="progress-bar bg-warning" role="progressbar" style={{width: "20%", ariaValuenow:"20", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                              </div>
                            </td>
                            <td>
                              $ 150.00
                            </td>
                            <td>
                              June 16, 2015
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Inverse table</h4>
                    <p className="card-description">
                      Add class <code>.table-dark</code>
                    </p>
                    <div className="table-responsive pt-3">
                      <table className="table table-dark">
                        <thead>
                          <tr>
                            <th>
                              #
                            </th>
                            <th>
                              First name
                            </th>
                            <th>
                              Amount
                            </th>
                            <th>
                              Deadline
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              1
                            </td>
                            <td>
                              Herman Beck
                            </td>
                            <td>
                              $ 77.99
                            </td>
                            <td>
                              May 15, 2015
                            </td>
                          </tr>
                          <tr>
                            <td>
                              2
                            </td>
                            <td>
                              Messsy Adam
                            </td>
                            <td>
                              $245.30
                            </td>
                            <td>
                              July 1, 2015
                            </td>
                          </tr>
                          <tr>
                            <td>
                              3
                            </td>
                            <td>
                              John Richards
                            </td>
                            <td>
                              $138.00
                            </td>
                            <td>
                              Apr 12, 2015
                            </td>
                          </tr>
                          <tr>
                            <td>
                              4
                            </td>
                            <td>
                              Peter Meggik
                            </td>
                            <td>
                              $ 77.99
                            </td>
                            <td>
                              May 15, 2015
                            </td>
                          </tr>
                          <tr>
                            <td>
                              5
                            </td>
                            <td>
                              Edward
                            </td>
                            <td>
                              $ 160.25
                            </td>
                            <td>
                              May 03, 2015
                            </td>
                          </tr>
                          <tr>
                            <td>
                              6
                            </td>
                            <td>
                              John Doe
                            </td>
                            <td>
                              $ 123.21
                            </td>
                            <td>
                              April 05, 2015
                            </td>
                          </tr>
                          <tr>
                            <td>
                              7
                            </td>
                            <td>
                              Henry Tom
                            </td>
                            <td>
                              $ 150.00
                            </td>
                            <td>
                              June 16, 2015
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Table with contextual classes</h4>
                    <p className="card-description">
                      Add class <code>.table</code>
                    </p>
                    <div className="table-responsive pt-3">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>
                              #
                            </th>
                            <th>
                              First name
                            </th>
                            <th>
                              Product
                            </th>
                            <th>
                              Amount
                            </th>
                            <th>
                              Deadline
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="table-info">
                            <td>
                              1
                            </td>
                            <td>
                              Herman Beck
                            </td>
                            <td>
                              Photoshop
                            </td>
                            <td>
                              $ 77.99
                            </td>
                            <td>
                              May 15, 2015
                            </td>
                          </tr>
                          <tr className="table-warning">
                            <td>
                              2
                            </td>
                            <td>
                              Messsy Adam
                            </td>
                            <td>
                              Flash
                            </td>
                            <td>
                              $245.30
                            </td>
                            <td>
                              July 1, 2015
                            </td>
                          </tr>
                          <tr className="table-danger">
                            <td>
                              3
                            </td>
                            <td>
                              John Richards
                            </td>
                            <td>
                              Premeire
                            </td>
                            <td>
                              $138.00
                            </td>
                            <td>
                              Apr 12, 2015
                            </td>
                          </tr>
                          <tr className="table-success">
                            <td>
                              4
                            </td>
                            <td>
                              Peter Meggik
                            </td>
                            <td>
                              After effects
                            </td>
                            <td>
                              $ 77.99
                            </td>
                            <td>
                              May 15, 2015
                            </td>
                          </tr>
                          <tr className="table-primary">
                            <td>
                              5
                            </td>
                            <td>
                              Edward
                            </td>
                            <td>
                              Illustrator
                            </td>
                            <td>
                              $ 160.25
                            </td>
                            <td>
                              May 03, 2015
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
              <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © <NavLink to="#" target="_blank">bootstrapdash.com </NavLink>2021</span>
              <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Only the best <NavLink to="#" target="_blank"> Bootstrap dashboard </NavLink> templates</span>
            </div>
          </footer>
  
        </div>

      </div>
    </>
  )
}

export default Tables