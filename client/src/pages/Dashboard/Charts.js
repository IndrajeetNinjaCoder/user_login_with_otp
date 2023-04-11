import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

import lineChart from '../Dashboard/style/images/charts/lineChart.png';
import areaChart from '../Dashboard/style/images/charts/areaChart.png';
import doughnutChart from '../Dashboard/style/images/charts/doughnutChart.png';
import pieChart from '../Dashboard/style/images/charts/pieChart.png';
import scatterChart from '../Dashboard/style/images/charts/scatterChart.png';
import barChart from '../Dashboard/style/images/charts/barChart.png';
import { NavLink } from 'react-router-dom';

const Charts = () => {

  const mystyle1 = {
    position: "absolute",
    inset: "0px",
    overflow: "hidden",
    pointerEvents: "none",
    visibility: "hidden",
    zIndex: -1
  }

  const mystyle2 = {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden",
    pointerEvents: "none",
    visibility: "hidden",
    zIndex: -1
  }


  const mystyle3 = {
    position: "absolute",
    width: "1000000px",
    height: "1000000px",
    left: 0,
    top: 0
  }

  const mystyle4 = {
    position: "absolute",
    width: "200%",
    height: "200%",
    left: 0,
    top: 0
  }

  const mystyle5 = {
    display: "block",
    height: "270px",
    width: "541px",
  }

  return (
    <>
      <Navbar />
      <div className="container-fluid page-body-wrapper px-0">
        <Sidebar activeLink='charts' />

        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-lg-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="chartjs-size-monitor" style={mystyle1}>
                      <div className="chartjs-size-monitor-expand" style={mystyle2}>
                        <div style={mystyle3}></div></div>
                      <div className="chartjs-size-monitor-shrink" style={mystyle2}>
                        <div style={mystyle4}></div></div></div>
                    <h4 className="card-title">Line chart</h4>
                    <div id="lineChart" width="676" height="337" style={mystyle5} className="chartjs-render-monitor">
                      <img src={lineChart} className='chart' alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="chartjs-size-monitor" style={mystyle1}>
                      <div className="chartjs-size-monitor-expand" style={mystyle2}>
                        <div style={mystyle3}></div></div>
                      <div className="chartjs-size-monitor-shrink" style={mystyle2}>
                        <div style={mystyle4}></div></div></div>
                    <h4 className="card-title">Bar chart</h4>
                    <div id="barChart" width="676" height="337" style={mystyle5} className="chartjs-render-monitor">
                      <img src={barChart} className='chart' alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="chartjs-size-monitor" style={mystyle1}>
                      <div className="chartjs-size-monitor-expand" style={mystyle2}>
                        <div style={mystyle3}></div></div>
                      <div className="chartjs-size-monitor-shrink" style={mystyle2}>
                        <div style={mystyle4}></div></div></div>
                    <h4 className="card-title">Area chart</h4>
                    <div id="areaChart" width="676" height="337" style={mystyle5} className="chartjs-render-monitor">
                      <img src={areaChart} className='chart' alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="chartjs-size-monitor" style={mystyle1}>
                      <div className="chartjs-size-monitor-expand" style={mystyle2}>
                        <div style={mystyle3}></div></div>
                      <div className="chartjs-size-monitor-shrink" style={mystyle2}>
                        <div style={mystyle4}></div></div></div>
                    <h4 className="card-title">Doughnut chart</h4>
                    <div id="doughnutChart" width="676" height="337" style={mystyle5} className="chartjs-render-monitor">
                      <img src={doughnutChart} className='chart' alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="chartjs-size-monitor" style={mystyle1}>
                      <div className="chartjs-size-monitor-expand" style={mystyle2}>
                        <div style={mystyle3}></div></div>
                      <div className="chartjs-size-monitor-shrink" style={mystyle2}>
                        <div style={mystyle4}></div></div></div>
                    <h4 className="card-title">Pie chart</h4>
                    <div id="pieChart" width="676" height="337" style={mystyle5} className="chartjs-render-monitor">
                      <img src={pieChart} className='chart' alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="chartjs-size-monitor" style={mystyle1}>
                      <div className="chartjs-size-monitor-expand" style={mystyle2}>
                        <div style={mystyle3}></div></div>
                      <div className="chartjs-size-monitor-shrink" style={mystyle2}>
                        <div style={mystyle4}></div></div></div>
                    <h4 className="card-title">Scatter chart</h4>
                    <div id="scatterChart" width="676" height="337" style={mystyle5} className="chartjs-render-monitor">
                      <img src={scatterChart} className='chart' alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>




          <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
              <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2018 <NavLink to="#">Templatewatch</NavLink>. All rights reserved.</span>
              <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted &amp; made with <i className="ti-heart text-danger ml-1"></i></span>
            </div>
          </footer>



        </div>

      </div>
    </>
  )
}

export default Charts