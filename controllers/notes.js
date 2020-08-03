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
    // try{

    // } catch (e){

    // }
    res.send("POST TRANSACTIONS")
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