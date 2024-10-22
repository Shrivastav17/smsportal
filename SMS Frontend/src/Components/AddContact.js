import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import dataprocess from '../Function/dataprocess';
import useFetch from '../CustomHooks/UseFetch.js';



export default function AddContact() {

    var groupList = useFetch("group/show-group");
    console.log(groupList);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();


    const onSubmit = (data) => {
        console.log(data);


        if (data != "") {
            dataprocess("contact/add-contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);

                })
        }

        navigate('/add-message')
    };




    return (
        <div className="container mt-5">
            <div>
                <h1 className='text-center mt-5 p-4' style={{ backgroundColor: 'purple', color: 'white' }}>Add Contact</h1>
            </div>
            <br />
            <form onSubmit={handleSubmit(onSubmit)}> <br />
                <input type="text" className='form-control' {...register("username", { required: true })} placeholder='Enter Your Name' />
                {errors.username?.type === 'required' && (<p role="alert">  Name is required</p>)} <br />



                <input type="text" className='form-control' {...register("usermobile", { required: true })} placeholder='Enter Your Mobile no' />
                {errors.usermobile?.type === 'required' && <p role="alert">  Mobile no is required</p>} <br />


                <input type="text" className='form-control' {...register("useremail", { required: true })} placeholder='Enter Your Email' />
                {errors.useremail?.type === 'required' && <p role="alert">  Email is required</p>} <br />

                <select className='form-control' {...register("group_id")}>

                    <option>Please select Group</option>



                    {
                        groupList.data && groupList.data.map(val =>
                            <option value={val._id}>{val.group_name}</option>)
                    }



                </select>

                <br />
                <input type="submit" className='btn btn-danger' />

            </form>
        </div>

    )


}