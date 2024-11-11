import { getAllData } from "../services/services.js";

export const getAllItems = async(req, res) => {
    try {
        const data = await getAllData()
        
        res.status(200).json({
            message: 'Data founded succesfully',
            status: 200,
            data
        })
    } catch (error) {
        res.status(404).json({
            message: 'Data not Found',
            status: 404,
            error
        })
    }
}