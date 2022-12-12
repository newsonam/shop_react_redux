import {createSlice } from "@reduxjs/toolkit";


const shopsSlice = createSlice({
  name: "shops",
  initialState: {
    entities: [{
      id:1,
      name:'Bhatia Shop',
      area:"Thane",
      category:"Grocery",
      opendate:"2012-04-01",
      closedate:"2020-05-10"
  },
  {
      id:2,
      name:'Grover Bakery Shop',
      area:"Pune",
      category:"Bakery",
      opendate:"2013-05-04",
      closedate:"2020-04-10"
  },
  {
      id:3,
      name:'Sharma Shop',
      area:"Solapur",
      category:"Butcher",
      opendate:"2019-07-06",
      closedate:"2017-05-10"
  },
  {
      id:4,
      name:'DKsingh Shop',
      area:"Mumbai",
      category:"Chemist",
      opendate:"2007-04-01",
      closedate:"2012-08-10"
  },
  {
      id:5,
      name:'Narang Shop',
      area:"Nashik",
      category:"Stationery",
      opendate:"2009-04-01",
      closedate:"2019-08-10"
  },
  {
      id:6,
      name:'Oberoi Shop',
      area:"Ahmednagar",
      category:"Bakery",
      opendate:"2007-04-01",
      closedate:"2014-08-14"
  }
],
    loading: false,
  },
  reducers: {
    userAdded(state, action) {
      state.entities.push(action.payload);
    },
    userUpdated(state, action) {
      const { id, name, area , category,opendate,closedate } = action.payload;
      const existingUser = state.entities.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.area = area;
        existingUser.category = category;
        existingUser.opendate = opendate;
        existingUser.closedate = closedate;

      }
    },
    shopDeleted(state, action) {
      const { id } = action.payload;
      const existingUser = state.entities.find((user) => user.id === id);
      if (existingUser) {
        state.entities = state.entities.filter((user) => user.id !== id);
      }
    },
  },
  
});

export const { userAdded, userUpdated, shopDeleted } = shopsSlice.actions;

export default shopsSlice.reducer;