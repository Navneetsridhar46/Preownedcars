import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadCarAPI } from '../services/allAPI';



function Add({setUploadCarResponse}) {

    const [uploadCar, setUploadCar] = useState({
        caption: "", imageURL: "", kilometres: "", fuel: "", transmission: "",price:"",location:""
    })

    const [show, setShow] = useState(false)

    const handleClose = () => {
        // clear textbox
        setShow(false)
        setUploadCar({ ...uploadCar, caption: "", imageURL: "", kilometres: "", fuel: "", transmission: "",price:"" , location:""})
    }

    const handleShow = () => {
        setShow(true)
    }

    // console.log(uploadCar);

    const handleSubmit = async () => {
        // store uploaded carDetails in http://localhost:3000/cars
        const { caption, imageURL, kilometres, fuel, transmission,price , location } = uploadCar
        if (caption && imageURL && kilometres && fuel && transmission && price && location) {
            // proceed to store carDetails from http://localhost:5173/home to http://localhost:3000/cars
            const result = await uploadCarAPI(uploadCar)
            // console.log(result);
            if (result.status >= 200 && result.status < 300) {
                alert(`carDetails '${result.data.caption}' submitted successfully`)
                setUploadCarResponse(result.data)
                handleClose()
            } else {
                alert("API call failed.. Please try again after sometime")
            }
        } else {
            alert("Enter data properly!!!")
        }
    }

    return (
        <>
            <div style={{ fontSize: '20px' }} className='text-primary d-flex'>
                <h4 style={{ height: '40px' }}> Sell Car</h4>
                <button onClick={handleShow} style={{ width: '44px', height: '44px' }} className='btn bg-primary ms-2 rounded-circle'><i style={{ height: '18px' }} className="fa-solid fa-plus text-light"></i></button>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className='fw-bold'>Car Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please fill the following details</p>
                    <FloatingLabel
                        controlId="floatingInputCaption"
                        label="Car Caption"
                        className="mb-3"
                    >
                        <Form.Control value={uploadCar.caption} onChange={e => setUploadCar({ ...uploadCar, caption: e.target.value })} type="text" placeholder="Car Title" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInputImg"
                        label="Image URL"
                        className="mb-3"
                    >
                        <Form.Control value={uploadCar.imageURL} onChange={e => setUploadCar({ ...uploadCar, imageURL: e.target.value })} type="text" placeholder="something.jpeg" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInputKilometres"
                        label="Kilometres"
                        className="mb-3"
                    >
                        <Form.Control value={uploadCar.kilometres} onChange={e => setUploadCar({ ...uploadCar, kilometres: e.target.value })} type="text" placeholder="Kilometres Driven" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInputFuel"
                        label="Fuel Type"
                        className="mb-3"
                    >
                        <Form.Control value={uploadCar.fuel} onChange={e => setUploadCar({ ...uploadCar, fuel: e.target.value })} type="text" placeholder="Fuel Type" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInputTransmission"
                        label="Transmission"
                        className="mb-3"
                    >
                        <Form.Control value={uploadCar.transmission} onChange={e => setUploadCar({ ...uploadCar, transmission: e.target.value })} type="text" placeholder="Automatic/Manual" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInputPrice"
                        label="Price"
                        className="mb-3"
                    >
                        <Form.Control value={uploadCar.price} onChange={e => setUploadCar({ ...uploadCar, price: e.target.value })} type="text" placeholder="Expected Price" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInputLocation"
                        label="Location"
                        className="mb-3"
                    >
                        <Form.Control value={uploadCar.location} onChange={e => setUploadCar({ ...uploadCar, location: e.target.value })} type="text" placeholder="Location" />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} variant="success">Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add