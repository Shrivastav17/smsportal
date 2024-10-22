import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import dataprocess from '../Function/dataprocess';


export default function AddLibrary() {

  const { register, formState: { errors }, handleSubmit } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);

    //  yh post/add krne ke liye h
    if (data != "") {
      dataprocess("library/add-library", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);

        })
    }



    navigate('/add-group')

  }
  return (

    <div className="container mt-5">
      <div>
        <h1 className='text-center mt-5' style={{ backgroundColor: 'purple', color: 'white' }}>Add Library</h1>
      </div>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>

        <input type="text"{...register("lib_name", { required: true })} className="form-control" placeholder=" Enter a Library name" />

        {errors.lib_name?.type === 'required' && (<p role="alert">  Library Name is required</p>)}
        <br />

        <button type="submit" className="btn btn-danger">ADD</button>

      </form >
    </div >
  );
}