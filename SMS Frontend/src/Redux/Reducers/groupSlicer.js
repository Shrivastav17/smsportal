import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  groupname: '',
   contact:''
}

export const groupSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {
    sendgroupData(state,actions) {
        console.log(" sendgroupData called");
        console.log(actions);
        state.groupname = actions.payload;
    },
    sendContactDataToPanel(state,actions) {
        console.log("sendContactDataToPanel called");
        console.log(actions);
        state.contact = actions.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const {sendgroupData,  sendContactDataToPanel } = groupSlice.actions

export default groupSlice.reducer