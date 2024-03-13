import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { removeCarAPI, saveHistoryApi } from '../services/allAPI';
import Modal from 'react-bootstrap/Modal';

function CarCard({displayData,setDeleteCarResponse}) {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)

    // recently viewed history

    const handleShow = async () => {
        setShow(true)
        // get car details 
        const { caption, kilometres, fuel,imageURL, transmission,price,location } = displayData
        let timeData = new Date()
        let timeStamp = new Intl.DateTimeFormat('en-US', {
            year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'
        }).format(timeData)
        console.log(timeStamp);
        await saveHistoryApi({
            caption,imageURL, kilometres, fuel,
            transmission, price , location , timeStamp
        })
    }

    // removing carDetails

    const deleteCarDetails = async(cId)=>{
        //api call
        const result = await removeCarAPI(cId)
        setDeleteCarResponse(result.data)
    }

    return (
        <>
            <Card className='shadow' style={{ width: '18rem' }}>
                <Card.Img onClick={handleShow} variant="top" src={displayData?.imageURL} />
                <Card.Body>
                    <Card.Title className='d-flex'>
                        <h6>{displayData?.caption}</h6>
                        <button onClick={()=>deleteCarDetails(displayData?.id)} className='btn'><i style={{ height: '20px',alignItems:'flex-end' }} class="fa-solid fa-trash text-primary"></i></button>
                    </Card.Title>
                    <Card.Title>
                        <h5 style={{height:'27px'}}>Rs {displayData.price}</h5>
                    </Card.Title>
                    <Card.Text> 
                        <p>{displayData?.location}</p>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Card.Img variant="top" src={displayData?.imageURL} />
                    
                <Modal.Body>
                <Card.Text className='container mt-3' style={{ display: 'flex',flexDirection:'column',textAlign:'center' }}>
                <h3 style={{height:'80px'}}>{displayData?.caption}</h3>
                        <p>Kilometres driven : {displayData?.kilometres}Kms</p>
                        <p className='ms-3'>Fuel Type : {displayData?.fuel}</p>
                        <p className='ms-3'>Transmission : {displayData?.transmission}</p>
                        <h5 style={{height:'27px'}}>Rs {displayData.price}</h5>
                        <p>Location : {displayData?.location}</p>
                    </Card.Text>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CarCard