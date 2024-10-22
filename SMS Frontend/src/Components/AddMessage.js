import React, { useEffect, useState } from 'react'

import { useForm } from "react-hook-form"
import dataprocess from '../Function/dataprocess';
import useFetch from '../CustomHooks/UseFetch.js';

import { useNavigate } from "react-router-dom";



export default function AddMessage() {

  var libraryList = useFetch('library/show-library')
  console.log(libraryList);

  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate();




  const onSubmit = (data) => {

    console.log(data)



    if (data != "") {
      dataprocess("message/add-message", {
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


    navigate('/sms')
  }



  return (
    <div className="container mt-5">
      <div>
        <h1 className='text-center mt-5' style={{ backgroundColor: 'purple', color: 'white' }}>Add message</h1>
      </div>
      <br />


      <form onSubmit={handleSubmit(onSubmit)}>


        <textarea cols="0" rows="0"
          className='form-control'
          placeholder='Enter Your Messages'
          {...register("Message", { required: true })}>
        </textarea>
        {errors.Message?.type === "required" && (
          <p role="alert">Message is required</p>
        )}
        <br />
        <select {...register("lib_id", { required: true })} className='form-control'>
          <option>Please Select a Library</option>

          {
            libraryList.data && libraryList.data.map(val =>
              <option value={val._id}>{val.lib_name}</option>)
          }

        </select>
        <br />

        <button type="submit" className='btn btn-danger'>Submit </button>
      </form>

    </div>

  )
}


