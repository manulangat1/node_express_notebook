// use model to get data 

// #desc GET all transactions
// @route GET /api/v1/transactions/
// @access PUBLIC
exports.getNotes = (req,res,next) => {
    res.send("GET TRANSACTIONS")
}

//@desc POST transaction 
// @route POST /api/v1/transactions/
// @access PUBLIC
exports.postNote = (req,res,next) => {
    res.send("POST TRANSACTIONS")
}
// @desc DELETE transaction
// @route DELETE /api/v1/transactions/:id
// @access PUBLIC
exports.delNote = (req,res,next) => {
    res.send("DELETE TRANSACTIONS")
}