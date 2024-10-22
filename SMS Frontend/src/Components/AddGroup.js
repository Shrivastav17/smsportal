import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import dataprocess from '../Function/dataprocess';


import './Addgroup.css';



export default function AddGroup() {

  const { register, formState: { errors }, handleSubmit } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);

    if (data != "") {
      dataprocess("group/add-group", {
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

  
    navigate('/add-contact')

  }
  return (

    <div className="container mt-5">
    <div>
      <h1 className='text-center mt-5' style={{backgroundColor:'purple',color:'white'} }>Add Group</h1>
    </div>
    <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text"{...register("group_name",{ required: true})} className="form-control" placeholder=" Enter a Group name" />
        {errors.group_name?.type === 'required' && <p role="alert"> Group Name is required</p>}
        <br />
        <br />
        <button type="submit" className="btn btn-danger">ADD</button>
        {/* <input type="submit" className='btn btn-dark ' /> */}

      </form >
    </div >
  );
}
