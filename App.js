import logo from './logo.svg';
import React, { Component, useEffect, useRef } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Img1 from './images/unplash1.jpg'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import lottie from 'lottie-web'
import lottie2 from 'lottie-web'
import img3 from '../src/images/unplash2.jpg'
import Carousel from 'react-bootstrap/Carousel';

function App() {


  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img3}
        alt="First slide"
      />
      <Carousel.Caption  className='captions'>
      <h2 className="hd" >Digital marketing is all about connecting</h2>
      <h2 className="hd">people with the brands they love, while helping them </h2>
      <h2 className="hd">get whatthey want.</h2>
      <a href="" className="btn btn-primary col-md">Contact Us</a>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img1}
      alt="First slide"
    />
    <Carousel.Caption  className='captions'>
    <h2 className="hd" >Digital marketing is all about connecting</h2>
    <h2 className="hd">people with the brands they love, while helping them </h2>
    <h2 className="hd">get whatthey want.</h2>
    <a href="" className="btn btn-primary col-md">Contact Us</a>
    </Carousel.Caption>

  </Carousel.Item>
  </Carousel>

  );
}

export default App;