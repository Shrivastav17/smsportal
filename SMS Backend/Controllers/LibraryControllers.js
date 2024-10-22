import library_model from "../Model/LibraryModel.js";

const AddLibrary = async (req, res) => {
    // res.send("add library called");

    var { lib_name } = req.body;

    var DataToInsert = { lib_name: lib_name };

    console.log(DataToInsert);

    try {

        var library_instance = new library_model(DataToInsert)
        var after_insert = await library_instance.save();
        res.status(200).send({ msg: 'Data inserted', data: after_insert})

    }

    catch {

        res.status(403).send({ msg: 'err', data: err })
        console.log(err);

    }

}

const showLibrary = async (req, res) => {
    // res.send("Show lib called")
    try {

        var showdata = await library_model.find();
        res.status(200).send({ msg: 'All Records', data: showdata })
    }

    catch {
        res.status(403).send({ msg: 'err', data: err })
    }

}

const updateLibrary = async (req, res) => {
    // res.send("update lib called");
    console.log(req.params);
    console.log(req.body);

    try {
        var update_lib = await library_model.findByIdAndUpdate(req.params.libraryid, req.body)
        res.status(200).send({ msg: 'data Updated', data: update_lib })
    }

    catch(err){
        console.log(err);
        res.status(403).send({ msg: 'err', data: err })

    }
}

const deleteLibrary = async (req, res) => {
    //  res.send("delete lib called");
 console.log(req.params);

    try {
        var delete_data = await library_model.findByIdAndDelete(req.params.libraryid);
        res.status(200).send({ msg: 'data deleted', data: delete_data })
    }

    catch(err){
        console.log(err);
        res.status(403).send({ msg: 'err', data: err })

    }
}

export {
    AddLibrary, showLibrary, updateLibrary, deleteLibrary
}