import React, { useEffect, useState } from 'react'
import {  useSelector,useDispatch } from 'react-redux'
import useFetch from '../CustomHooks/UseFetch.js';
import { sendLibData, sendLibDataToPanel } from '../Redux/Reducers/librarySlicer.js';


export default function Sectionsms() {

  var dispatch = useDispatch();
  const ansById = useSelector(state => state.library.libname);
  console.log(ansById);

  var path = "message/showById/" + ansById;

    
    // console.log(finalapiPath);
    console.log(path);

    var ans = useFetch(path);
    console.log(ans);

    function myfunc(value) {
      console.log(value);
       dispatch(sendLibDataToPanel(value));
  }

   
  return (
    <section className='message-section'>
    <h4 className='text-center p-4'>Message</h4>
    <div className='border'>
        <ul>
        {
                        ans.data &&  ans.data.length > 0 && ans.data.map(val =>
                            <li onClick={(ev) => { myfunc(ev.target.innerText) }}>{val.Message}</li>
                        )
                    }
      
        </ul>
    </div>
    
</section>
  )
}
