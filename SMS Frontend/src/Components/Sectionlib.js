import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import useFetch from '../CustomHooks/UseFetch.js';
import { sendLibData } from '../Redux/Reducers/librarySlicer.js';



export default function Sectionlib() {
  var library = useFetch("library/show-library");
  console.log(library);
  const dispatch  = useDispatch();

  var myfunc = (ev, id) => {

    // ev.preventDefault();
    console.log(id);
    dispatch(sendLibData(id));
}

  return (
<section className='library-section'>
    <h4 className='text-center p-4'>Libray</h4>
    <div className='border'>
                <ul>
                {
                library.data && library.data.map((obj) =>
                        <li onClick={(ev) => { myfunc(ev,obj._id) }}>{obj.lib_name}</li>
                    )
                    }
                </ul>
            </div>


</section>
    
  )
}
