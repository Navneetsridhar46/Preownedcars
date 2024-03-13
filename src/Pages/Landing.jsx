import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Landing() {

    const navigate = useNavigate()

    const handleNavigate = () => {
        // navigate to home page 
        navigate('/home')
    }
    return (
        <>
            <div className='container-fluid mt-5'>
                <div className='header row align-items-center m-3'>
                    <div className='col-lg-6'>
                        <h2 style={{ height: '160px',fontSize:'65px' }}><b>NEED A CAR IN</b> <br /><span className='text-warning'><b>LOWEST PRICE</b></span></h2>
                        <h4 style={{ textAlign: 'justify',height:'60px' }}><i>LET'S FIND THE PERFECT ONE FOR YOU!</i></h4>
                        <div className='text-center'><button onClick={handleNavigate} className='btn btn-success mt-2 w-50 p-3'>BROWSE CARS</button></div>
                    </div>
                    <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                        <img style={{ width: '100%', height: '450px' }} src="https://c4.wallpaperflare.com/wallpaper/100/280/942/nissan-gt-r-super-car-snow-winter-wallpaper-preview.jpg" alt="Landing image" />
                    </div>
                </div>
                <div className='Benefits'>
                    <div className='text-center mt-5'>
                        <img src="https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/SpinnyAssured/components/LandingSection/assets/spinny_assured_logo_desktop_grey.svg?w=1000&dpr=1.5" alt="" />
                    </div>
                    <h3 style={{ height: '40px' }} className='text-center fw-bolder mt-3'>Spinny Assured® Benefits </h3>
                    <p className='text-center'>The sure road to Car Joy</p>
                    <div className='container-fluid'>
                        <div className="row">
                            <div className='col-lg-3'>
                                <img src="https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/SpinnyAssured/components/LandingSection/assets/200_point_inspection_desktop.png?w=240&dpr=1.5" alt="1stimage" />
                            </div>
                            <div className='col-lg-3'>
                                <img src="https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/SpinnyAssured/components/LandingSection/assets/money_back_desktop.png?w=240&dpr=1.5" alt="2ndimage" />
                            </div>
                            <div className='col-lg-3'>
                                <img src="https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/SpinnyAssured/components/LandingSection/assets/one_year_warranty_desktop.png?w=240&dpr=1.5" alt="3rdimage" />
                            </div>
                            <div className='col-lg-3'>
                                <img src="https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/SpinnyAssured/components/LandingSection/assets/fixed_price_desktop.png?w=240&dpr=1.5" alt="4thimage" />
                            </div>
                        </div>
                        <div className='text-center'>
                            <a href='https://www.spinny.com/home/?utm_medium=gads_c_search&utm_source=SPD-Search-Top8-National-Brand-EM-Home&utm_content=586920586020&utm_term=e_spinny&partner_id=EAIaIQobChMItevU2KzphAMVudUWBR39BAirEAAYASAAEgK00vD_BwE&source=googleads&sub_source=SPD-Search-Top8-National-Brand-EM&gclid=EAIaIQobChMItevU2KzphAMVudUWBR39BAirEAAYASAAEgK00vD_BwE'> <button className='btn btn-danger p-3 hover1'>Watch the film <i style={{ height: '17px' }} class="fa-solid fa-play"></i></button></a>
                        </div>
                        <div className='text-center mt-3 mb-5'>
                            <a style={{ fontSize: '20px', color: 'blueviolet', textDecoration: 'none' }} href=''><b>Learn More</b><i style={{ height: '20px' }} class="fa-solid fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>

                <div className='SellingCars mt-5 container text-center'>
                    <h5 style={{ height: '30px' }}>Selling your cars made simple</h5>
                    <div className="row mt-4">
                        <div className='col-lg-4'>
                            <Card className='bg-light shadow'>
                                <Card.Img variant="top" src="https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/SellCar/components/HowItsWork/assets/hiw-1.png?w=500" />
                                <Card.Body style={{ height: '170px' }} className='p-2'>
                                    <Card.Title style={{ height: '30px' }}>Instant online estimates</Card.Title>
                                    <Card.Text style={{fontSize:'14px'}}>
                                    Fill in a few details about your car for an instant estimate
                                    </Card.Text>
                                    <a className='text-danger' style={{ textDecoration: 'none' }} href='https://www.spinny.com/check-car-valuation/?utm_medium=gads_c_search&utm_source=SPD-Search-Top8-National-Brand-EM-Home&utm_content=586920586020&utm_term=e_spinny&partner_id=EAIaIQobChMI3dT1gbLphAMVLs4WBR2oHw4eEAAYASAAEgJFc_D_BwE&source=googleads&sub_source=SPD-Search-Top8-National-Brand-EM&gclid=EAIaIQobChMI3dT1gbLphAMVLs4WBR2oHw4eEAAYASAAEgJFc_D_BwE'><b>Get Estimate</b><i style={{ height: '17px' }} class="fa-solid fa-chevron-right ms-1"></i></a>
                                </Card.Body>
                            </Card>
                        </div>
                        <div style={{ height: '450px' }} className='col-lg-4'>
                            <Card className='bg-light shadow'>
                                <Card.Img variant="top" src="https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/SellCar/components/HowItsWork/assets/hiw-2.png?w=500" />
                                <Card.Body style={{ height: '170px' }} className='p-2'>
                                    <Card.Title style={{ height: '30px' }}>Free doorstep evaluation</Card.Title>
                                    <Card.Text style={{fontSize:'14px'}}>
                                    Schedule the evaluation at your convenience, from the comfort of your home or workplace
                                    </Card.Text>
                                    <a className='text-danger' style={{ textDecoration: 'none' }} href='https://www.spinny.com/check-car-valuation/?utm_medium=gads_c_search&utm_source=SPD-Search-Top8-National-Brand-EM-Home&utm_content=586920586020&utm_term=e_spinny&partner_id=EAIaIQobChMI3dT1gbLphAMVLs4WBR2oHw4eEAAYASAAEgJFc_D_BwE&source=googleads&sub_source=SPD-Search-Top8-National-Brand-EM&gclid=EAIaIQobChMI3dT1gbLphAMVLs4WBR2oHw4eEAAYASAAEgJFc_D_BwE'><b>Scheduled Evaluation</b><i style={{ height: '17px' }} class="fa-solid fa-chevron-right ms-1"></i></a>

                                </Card.Body>
                            </Card>
                        </div>
                        <div style={{ height: '450px' }} className='col-lg-4'>
                            <Card className='bg-light shadow'>
                                <Card.Img variant="top" src="https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/SellCar/components/HowItsWork/assets/hiw-3.png?w=500" />
                                <Card.Body style={{ height: '170px' }} className='p-2'>
                                    <Card.Title style={{ height: '30px' }}>Same day payment</Card.Title>
                                    <Card.Text style={{fontSize:'14px'}}>
                                    Complete payment and paper work on the spot
                                    </Card.Text>
                                    <a className='text-danger' style={{ textDecoration: 'none' }} href=''><b>Sell Car</b><i style={{ height: '17px' }} class="fa-solid fa-chevron-right ms-1"></i></a>

                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>

                <div className='Reviews mt-5'>
                    <h3 style={{ height: '35px' }} className='text-center fw-bolder'>Over 2 Lakh Spinny Love Stories</h3>
                    <div className="row mt-5">
                        <div className='col-lg-3'>
                            <Card className='bg-info shadow rounded'>
                                <Card.Img style={{ height: '400px' }} variant="top" src="https://spn-mda.spinny.com/img/_AhgocwQSSKuCp4Jidv0zQ/raw/file.jpg?w=400" />
                                <Card.Body style={{ height: '150px' }} className='p-2'>
                                    <Card.Title style={{fontSize:'18px',height:'25px'}}><b>Manu Rasho | Bengaluru</b></Card.Title>
                                    <Card.Text style={{fontSize:'13px'}}>
                                    Our car looks like a new car, feels like a new car and drives like one. The smile on our daughters' faces has made the decision worth it
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-lg-3'>
                            <Card className='bg-info shadow rounded'>
                                <Card.Img style={{ height: '400px' }} variant="top" src="https://spn-mda.spinny.com/img/q3W6lQ_%2BRH2JDOFDVW5BxA/raw/file.jpg?w=400" />
                                <Card.Body style={{ height: '150px' }} className='p-2'>
                                    <Card.Title style={{fontSize:'18px',height:'25px'}}><b>Pazhaniappan | Chennai</b></Card.Title>
                                    <Card.Text style={{fontSize:'13px'}}>
                                    Being able to spoil my picky kids with infinite options is a win for Spinny and a safe car in my budget is a win for me.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-lg-3'>
                            <Card className='bg-info shadow rounded'>
                                <Card.Img style={{ height: '400px' }} variant="top" src="https://spn-mda.spinny.com/img/ma9%2B%2BgB3T8aH3GgKQyim0w/raw/file.jpg?w=400" />
                                <Card.Body style={{ height: '150px' }} className='p-2'>
                                    <Card.Title style={{fontSize:'18px',height:'25px'}}><b>Madhulika Singh | Lucknow</b></Card.Title>
                                    <Card.Text style={{fontSize:'13px'}}>
                                    Spinny helped us find a family car that’s great for daily commutes and long trips
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-lg-3'>
                            <Card className='bg-info shadow rounded'>
                                <Card.Img style={{ height: '400px' }} variant="top" src="https://spn-mda.spinny.com/img/X3r60Dq7Tu6tlks_GZIKQg/raw/file.jpg?w=400" />
                                <Card.Body style={{ height: '150px' }} className='p-2'>
                                    <Card.Title style={{fontSize:'18px',height:'25px'}}><b>Darshan | Delhi</b></Card.Title>
                                    <Card.Text style={{fontSize:'13px'}}>
                                    Our family had our hearts set on XUV 700. So, when we saw it on Spinny, we just got it home.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Landing