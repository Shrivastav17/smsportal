import group_model from "../Model/GroupModal.js";


const AddGroup = async (req, res) => {
    // res.send("AddGroup called");

    var { group_name } = req.body;

    var DataToInsert = { group_name: group_name }
    console.log(DataToInsert);

    try {

        var group_instance = new group_model(DataToInsert);
        var add_data = await group_instance.save();
        res.status(200).send({ msg: 'Group Added', data: add_data });

    }


    catch (err) {
        console.log(err);
        res.status(403).send({ msg: 'err', data: err })

    }


}

const showGroup = async (req, res) => {
    // res.send("Show Group called")

    try {
        var show_data = await group_model.find();
        res.status(200).send({ msg: "show group data", data: show_data })
    }

    catch {

        res.status(403).send({ msg: 'err', data: err })
        console.log(err);
    }

}

const updateGroup = async (req, res) => {
    // res.send("update Group called");

    try {

        var update_data = await group_model.findByIdAndUpdate(req.params.groupid, req.body);
        res.status(200).send({ msg: " Group updated", data: update_data })
    }


    catch {

        res.status(403).send({ msg: 'err', data: err })
        console.log(err);
    }

}

const deleteGroup = async (req, res) => {
    // res.send("delete Group called");


    try {
        var delete_data = await group_model.findByIdAndDelete(req.params.groupid);
        res.status(200).send({ msg: ' Group deleted', data: delete_data })
    }

    catch {

        res.status(403).send({ msg: 'err', data: err })

    }
}

export {
    AddGroup, showGroup, updateGroup, deleteGroup
}