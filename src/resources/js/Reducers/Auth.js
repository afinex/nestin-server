
// create user reducer function
export const authReducer = (state = {name:"fin",age:"23"}, action) =>{
  switch(action.type){
    case "LOGGED_IN_USER" :
      return {...state, ...action.payload}
    case "LOGGED_OUT" :
      return action.payload;
    default :
      return state;
  }
}