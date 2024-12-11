const model = require('./Model')

        // post api 

const add = async(req, res) => {
    const { fname, email, mobile } = req.body;
    try{
        const data = new model ({
            fname, email, mobile
        });
        const userdata = await data.save()
        res.send({ userdata });
    }
    catch (error){
        console.log(error)
            return res.status(500).json({message:'internal server error'})
    }
}

module.exports = { add }