const CrudSchema= require ('../models/crudModel.js');


const getAllData= async ( req, res) =>{
    try {
        res.status(200).send('We are fetching all the data')
    } catch (error) {
        res.status (500).json ({message: error})

    }
}
const createData = async (req, res) =>{
    try{
        const data = await CrudSchema. create (req.body)
        res.status (201) .json ({data})
    } catch (error) {
        res.status (500).json ({message: error})
    }
}

const getOneItem = async (req, res) =>{
    try{
        res.status(200).send('We are getting one item all the data')
    } catch (error) {
        res.status (500).json ({message: error})
    }
}

const updateData = async (req, res) =>{
    try{
        res.status(200).send('We are updating  all the data')
    } catch (error) {
        res.status (500).json ({message: error})
    }
}

const deleteData = async (req, res) =>{
    try{
        res.status(200).send('We are deleting  all the data')
    } catch (error) {
        res.status (500).json ({message: error})
    }
}
    module.exports = {
        getAllData, createData, getOneItem, updateData, deleteData
    }
