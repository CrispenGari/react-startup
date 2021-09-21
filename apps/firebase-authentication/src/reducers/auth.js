const authReducer = (state=null, action)=>{
    switch(action.type){
        case "SET_USER":
            return state = action.value
        default:
            return state
    }
}
export default authReducer