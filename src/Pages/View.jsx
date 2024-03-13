import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import CarCard from './CarCard'
import { getAllCarsAPI } from '../services/allAPI'

function View({uploadCarResponse}) {

    const [allCars, setAllCars] = useState([])

    const [deleteCarResponse,setDeleteCarResponse] = useState("")

    const getAllCars = async () => {
        const result = await getAllCarsAPI()
        console.log(result);
        if (result?.status === 200) {
            setAllCars(result?.data)
        }
    }

    useEffect(() => {
        getAllCars()
    },[uploadCarResponse,deleteCarResponse])

    return (
        <>
            <Row>
                {allCars?.length > 0 ? allCars?.map((car, index) => (
                    <Col key={index} className='mb-4' sm={12} md={6} lg={4}>
                        <CarCard displayData={car} setDeleteCarResponse={setDeleteCarResponse} />
                    </Col>
                ))
                    : <div className='text-danger mt-3'>No cars are uploaded to display!!!</div>
                }

            </Row>
        </>
    )
}

export default View