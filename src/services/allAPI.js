import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./server_url";

//upload carDetails - store carDetails in http://localhost:3000/cars
export const uploadCarAPI = async (car) => {
    // send response to add component 
    return await commonAPI("POST", `${SERVER_URL}/cars`, car)
}

// get car api called by view component 

export const getAllCarsAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/cars`, "")
}

//store watched carDetails by CarsCard to http://localhost:3000/history

export const saveHistoryApi = async (carDetails) => {
    return await commonAPI("POST", `${SERVER_URL}/history`, carDetails)
}

//get history to watch component to http://localhost:3000/history

export const getHistoryApi = async () => {
    return await commonAPI("GET", `${SERVER_URL}/history`, "")
}

// remove history using {unique id and atlast empty object}

export const removeHistoryAPI = async (carId) => {
    return await commonAPI("DELETE", `${SERVER_URL}/history/${carId}`, {})
}

// remove carDetails from allCars

export const removeCarAPI = async (carId) => {
    return await commonAPI("DELETE", `${SERVER_URL}/cars/${carId}`, {})
}

