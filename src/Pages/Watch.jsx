import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistoryApi, removeHistoryAPI } from '../services/allAPI'

function Watch() {

    const [history,setHistory] = useState([])
    const getAllHistory = async()=>{
        const result = await getHistoryApi()
        if(result.status >= 200 & result.status < 300){
            setHistory(result.data)
        }
    }

    useEffect(()=>{
        getAllHistory()
    },[])

    const deleteHistory = async(cId)=>{
        await removeHistoryAPI(cId)
        getAllHistory()
    }

    

    return (
        <>
            <div className='container mt-5 mb-5'>
                <div className='justify-content-between d-flex'>
                    <h3 style={{height:'35px'}}>Recent Activity</h3>
                    <Link style={{textDecoration:'none'}} to={'/Home'}><i style={{ height: '17px' }} className="fa-solid fa-arrow-left me-2"></i>Back To Home</Link>
                </div>
                <table className='table mt-5 mb-5'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Caption</th>
                            <th>Image URL</th>
                            <th>Time Stamp</th>
                            <th><i style={{ height: '17px' }} className="fa-solid fa-ellipsis-vertical"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                       { history?.length>0? history.map((car,index)=>(
                         <tr key={index}>
                         <td>{index+1}</td>
                         <td>{car?.caption}</td>
                         <td>{car?.imageURL}</td>
                         <td>{car?.timeStamp}</td>
                         <td><button onClick={()=>deleteHistory(car.id)} className='btn'><i style={{height:'18px'}} className='fa-solid fa-trash text-danger'></i></button></td>
                     </tr>
                       ))
                       :
                       <tr className='text-danger fw-bolder'>You haven't viewed any cars!!!</tr>
                      }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Watch