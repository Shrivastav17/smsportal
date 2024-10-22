import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import useFetch from '../CustomHooks/UseFetch.js';
import { sendgroupData } from '../Redux/Reducers/groupSlicer.js';



export default function Sectiongrp() {
  var group = useFetch("group/show-group");
  console.log(group);
  const dispatch  = useDispatch();

  var myfunc = (ev, id) => {

    ev.preventDefault();
    console.log(id);
    dispatch(sendgroupData(id));
}

  return (
    <section className='group-section'>
    <h4 className='text-center p-4'>Group</h4>
    <div className='border'>
                <ul className="mx-5">
                {group.data && group.data.map((obj) =>
                        <li onClick={(ev) => { myfunc(ev,obj._id)}}>{obj.group_name}</li>
                    )}
                </ul>
            </div>

</section>
  )
}
