import message_model from "../Model/MessageModal.js";


const AddMessage = async (req, res) => {
    // res.send("AddMessage called");

    var { Message, lib_id } = req.body

    const datatoinsert = {
        Message: Message,
        lib_id: lib_id
    }

    try {
        var message_instance = new message_model(datatoinsert)
        var after_insert = await message_instance.save()
        res.status(200).send({ msg: 'data inserted', data: after_insert })
    }
    catch (err) {
        res.status(403).send({ msg: 'err', data: err })
    }

}

const showMessage =  async(req, res) => {
    // res.send("Show Message called")

    
    try {
        var showdata = await message_model.find()
        res.status(200).send({ msg: 'All Records', data: showdata })
    }
    catch (err) {
        res.status(403).send({ msg: 'err', data: err })
    }
}

// const updateMessage = async (req, res) => {
//      res.send("update Message called");
// }

// const deleteMessage = async (req, res) => {
//      res.send("delete Message called");
// }


const show_message_by_id = async (req,res)=>{
    var librayId = req.params.libid;

    try {
        var showdata = await message_model.find({lib_id: librayId})
        res.status(200).send({ msg: 'All Records', data: showdata })
    }
    catch (err) {
        res.status(403).send({ msg: 'err', data: err })
    }
}
export {
    AddMessage, showMessage, show_message_by_id
}