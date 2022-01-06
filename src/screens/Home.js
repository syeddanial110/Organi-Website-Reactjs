import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Card, Carousel, Col, Container, Nav, Row } from 'react-bootstrap'
import { faEnvelope, faUser, faHeart, faShoppingBag,faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import Main from '../components/Nav'
import "../screensStyle/home.css"
import img1 from "../assets/images/banner.jpg";
import $ from 'jquery';
import hover from 'jquery';
import card1 from "E:/React js/Classes/secondproject/src/assets/images/blog1.jpg"
import card2 from "E:/React js/Classes/secondproject/src/assets/images/blog2.jpg"
import card3 from "E:/React js/Classes/secondproject/src/assets/images/blog3.jpg"
import Slider from '../components/Slider'
import HomeBlog from '../components/HomeBlog'


const Home = (props) => {
    const {post}=props;
    // $(document).ready(function () {
    //     $(".item1").hover(function () {
    //         $(".fontHeart").css({
    //             'opacity': '1'
    //         })
    //     })
    // });


    return (
        <div className='homeBody'>

            <Row>
                <Col md={{ span: 7, offset: 3 }} className='bgImg'>
                    {/* <img src={img1} alt='' className='' /> */}
                    <div className='content'>
                        <p><b>Fruit Fresh</b></p>
                        <h1>Vegetable</h1>
                        <h2>100% Organic</h2>
                        <button className='btn btn-danger'>Shop Now</button>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h1 className='text-center'>Slider</h1>
                </Col>

            </Row>

            <Row>

                <Col md={12}>
                    <h1 className='text-center'>Featured Products</h1>
                    <b> <hr className='hrDivider'></hr></b>
                </Col>

            </Row>

            {/* <Nav
                activeKey="/All"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                <Nav.Item>
                    <Link to="/all">All</Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav> */}

            <Row>
                <Col md={12}>
                    <ul className='featuredProductUl '>
                        <Link to="/All"> <li className='featuredProductLi'>All</li></Link>
                        <li className='featuredProductLi'>Oranges</li>
                        <li className='featuredProductLi'>Vine</li>
                        <li className='featuredProductLi'>Apples</li>
                    </ul>
                </Col>
            </Row>

            {/* <Row className='container1'>
                <Col md={3} className='item1'>
                <FontAwesomeIcon icon={faHeart} />
                </Col>
                <Col md={3} className='item2'>
                    item2
                </Col>
                <Col md={3} className='item3'>
                    item3
                </Col>
                <Col md={3} className='item4'>
                    item4
                </Col>
            </Row> */}

 {/* First Item Row */}
            <div className='container1'>
                <Link to="/items"> <div className='item1'>
                    <FontAwesomeIcon className='fontHeart1' icon={faHeart} />
                    <FontAwesomeIcon className='fontShopping1' icon={faShoppingBag} />
                </div> </Link>
                <div className='item2'>
                    <FontAwesomeIcon className='fontHeart2' icon={faHeart} />
                    <FontAwesomeIcon className='fontShopping2' icon={faShoppingBag} />
                </div>
                <div className='item3'>
                    <FontAwesomeIcon className='fontHeart3' icon={faHeart} />
                    <FontAwesomeIcon className='fontShopping3' icon={faShoppingBag} />
                </div>
                <div className='item4'
                >  <FontAwesomeIcon className='fontHeart4' icon={faHeart} />
                    <FontAwesomeIcon className='fontShopping4' icon={faShoppingBag} />
                </div>
            </div>

            {/* Second item row */}
            <div className='container1 container2'>
                <Link to="/items"> <div className='item1'>
                    <FontAwesomeIcon className='fontHeart1' icon={faHeart} />
                    <FontAwesomeIcon className='fontShopping1' icon={faShoppingBag} />
                </div> </Link>
                <div className='item2'>
                    <FontAwesomeIcon className='fontHeart2' icon={faHeart} />
                    <FontAwesomeIcon className='fontShopping2' icon={faShoppingBag} />
                </div>
                <div className='item3'>
                    <FontAwesomeIcon className='fontHeart3' icon={faHeart} />
                    <FontAwesomeIcon className='fontShopping3' icon={faShoppingBag} />
                </div>
                <div className='item4'
                >  <FontAwesomeIcon className='fontHeart4' icon={faHeart} />
                    <FontAwesomeIcon className='fontShopping4' icon={faShoppingBag} />
                </div>
            </div>

            <Row>
                <Col md={{ span: 4, offset: 1 }} className='bgImgSideBySide1'>
                    <button className='btn btn-success btnSidebySide1'>Shop Now</button>
                </Col>
                <Col md={{ span: 4, offset: 1 }} className='bgImgSideBySide2'>
                    <button className='btn btn-success btnSidebySide2'>Shop Now</button>
                </Col>
            </Row>

            <h1>Slider</h1>
            {/* <Slider /> */}

{/* Blogs */}
            <Row>

                <Col md={12}>
                    <h1 className='text-center'>From The Blog</h1>
                    <b> <hr className='hrDivider'></hr></b>
                </Col>

            </Row>
            {/* <Row>
                <Col md={{span:3, offset:1}} className='bgBlog1'>
                
                </Col>
                
                <Col md={{span:3, offset:1}} className='bgBlog2'>
                
                </Col>
                <Col md={{span:3, offset:1}} className='bgBlog3'>
                
                </Col>
            </Row> */}
            <div style={{marginTop:"45px"}}>
            <Row>
            <Col md={{offset:1}}>
            <Card style={{ width: '18rem' }}>
               {/* <Link to={`/homeblog/${post.id}`}>  */}
               <Card.Img variant="top" src={card1} />
               {/* </Link> */}
                <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">  <FontAwesomeIcon  icon={faCalendar} /> 25 May</Card.Subtitle>
                    <Card.Title>
                        Some quick example text to build on the card title and make u
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                </Card.Body>
            </Card>
            </Col> 

            <Col md={{offset:1}}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={card2} />
                <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">  <FontAwesomeIcon  icon={faCalendar} /> 25 May</Card.Subtitle>
                    <Card.Title>
                        Some quick example text to build on the card title and make u
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                </Card.Body>
            </Card>
            </Col> 
            <Col md={{offset:1}}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={card3} />
                <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">  <FontAwesomeIcon  icon={faCalendar} /> 25 May</Card.Subtitle>
                    <Card.Title>
                        Some quick example text to build on the card title and make u
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                </Card.Body>
            </Card>
            </Col>  
            <Col></Col>
            </Row>
            </div>



           

        </div>
    )
}

export default Home
