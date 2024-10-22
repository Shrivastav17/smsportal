import React from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import useFetch from '../CustomHooks/UseFetch.js';
import { sendContactDataToPanel } from '../Redux/Reducers/groupSlicer.js';

export default function Sectioncontact() {

  var dispatch = useDispatch();
  const ansById = useSelector(state=>state.group.groupname);
  console.log(ansById);

  var path = "contact/show-contact-By-Id/" + ansById;

    
    // console.log(finalapiPath);
    console.log(path);

    var ans = useFetch(path);
    console.log(ans);

    function myfunc(username,useremail,usermobile) {
      // console.log(value);
       dispatch(sendContactDataToPanel([username,useremail,usermobile]));
  }


  return (
    <section className='contact-section'>
    <h4 className='text-center p-4'>Contact</h4>
    <div className="container">
        <ul>
        {
            ans.data && ans.data.length > 0 && ans.data.map(val =>
              <li onClick={(ev) => { myfunc(val.username,val.usermobile,val.useremail) }}>{val.username}</li>
            )
          }
        </ul>
    </div>


</section>
  )
}
