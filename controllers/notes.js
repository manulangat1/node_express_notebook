// use model to get data 
const Notes = require('../models/Notes')
// #desc GET all transactions
// @route GET /api/v1/transactions/
// @access PUBLIC
exports.getNotes = async (req,res,next) => {
    try{
        const notes = await Notes.find()
        return res.status(200).json({
            success:true,
            count:notes.length,
            data:notes
        })
    } catch (err){
        console.log(`error:${err}`)
    }
    
    // res.send("GET TRANSACTIONS")
}

//@desc POST transaction 
// @route POST /api/v1/transactions/
// @access PUBLIC
exports.postNote = async (req,res,next) => {
    try{
        const { text } = req.body
        const note = await Notes.create(req.body)
        return res.status(201).json({
            success:true,
            data:note
        })
    } catch (err){
        console.log(`error:${err}`)
        if (err === 'ValidationError'){
            const messages = Object.values(err.errors).map(val => val.message)
            return res.status(400).json({
                success:false,
                error:err.messages
            })
        } else{
            return res.status(500).json({
                success:false,
                error:err.message
            })
        }
        
    }
    // res.send("POST TRANSACTIONS")
}
// @desc DELETE transaction
// @route DELETE /api/v1/transactions/:id
// @access PUBLIC
exports.delNote = async (req,res,next) => {
    // try{

    // } catch (e){

    // }
    res.send("DELETE TRANSACTIONS")
}