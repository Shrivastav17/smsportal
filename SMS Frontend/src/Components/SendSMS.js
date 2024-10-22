import React from 'react'
import Sectionlib from './Sectionlib'
import Sectionsms from './Sectionsms';
import Sectiongrp from './Sectiongrp';
import { useSelector } from 'react-redux'
import Sectioncontact from './Sectioncontact';


export default function SendSMS() {

  var ans = useSelector(state => state.library.messagename) 
  console.log(ans);
  var [name,mobile,email] = useSelector(state =>state.group.contact);



  return (
    <div className="container mt-5">
      <div>
        <h1 className='text-center p-4 mt-5' style={{ backgroundColor: 'purple', color: 'white' }}>Send SMS</h1>
      </div>
      <br />
      <div className="row">
        <div className="col-4">
          <Sectionlib></Sectionlib>
          <Sectionsms></Sectionsms>
        </div>
        <div className="col-4">

          
          <form>

            <input type='text' className='form-control' defaultValue={name} /> <br />
            <input type='text' className='form-control' defaultValue={mobile}  /> <br />
            <input type='text' className='form-control' defaultValue={email}  /> <br />
            <textarea className='form-control' defaultValue={ans} ></textarea>
            <br />
            <button className='btn btn-danger text-center'> Send SMS</button>
          </form>
        </div>
        <div className="col-4">
          <Sectiongrp></Sectiongrp>
          <Sectioncontact></Sectioncontact>
        </div>

      </div>
    </div>
  )
}
