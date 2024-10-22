import contact_modal from "../Model/ContactModal.js"


const AddContact =  async (req, res) => {
    // res.send("AddContact called");

    var { username, usermobile, useremail,group_id } = req.body

    var datatoinsert = {
        username: username,
        usermobile: usermobile,
        useremail: useremail,
        group_id:group_id
    }
    console.log(datatoinsert);

    try {
        var contact_instance = new contact_modal(datatoinsert)
        var afterinsert = await contact_instance.save()
        res.status(200).send({ msg: 'Contact Added', data: afterinsert })
    }
    catch (err) {
        res.send({ msg: 'err', data: err })
        console.log(err)
    }
}

const showContact =  async (req, res) => {
    // res.send("Show Contact called")

    try {
        var showdata = await contact_modal.find()
        res.status(200).send({ msg: 'Contact Show', data: showdata })
    }
    catch (err) {
        res.send({ msg: 'err', data: err })
    }

}

const updateContact =  async (req, res) => {
    // res.send("update contact called");

    try {
        var updatedata = await contact_modal.findByIdAndUpdate(req.params.contactid, req.body)
        res.status(200).send({ msg: 'Contact Updated', data: updatedata })
    }
    catch (err) {
        res.send({ msg: 'err', data: err })
    }
}

const deleteContact =  async (req, res) => {
    // res.send("delete contact called");


    try {
        var deletedata = await contact_modal.findByIdAndDelete(req.params.contactid)
        res.status(200).send({ msg: 'data deleted', data: deletedata })
    }
    catch (err) {
        console.log(err);
        res.send({ msg: 'err', data: err })
    }
}
const showcontactById = async (req,res)=>{
    var groupId = req.params.grpid;
    console.log(groupId);
    

    try {
        var showdata = await contact_modal.find({group_id: groupId})
        res.status(200).send({ msg: 'All Records', data: showdata })
    }
    catch (err) {
        res.status(403).send({ msg: 'err', data: err })
        
    }
}

export {
    AddContact, showContact, updateContact, deleteContact,showcontactById
}