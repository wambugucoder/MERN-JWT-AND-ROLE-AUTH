import { GET_CUSTOMER_LIST, DELETE_CUSTOMER, GET_SPECIFIC_CUSTOMER, UPDATE_CUSTOMER } from "../actions/types";

const INITIAL_STATE = {
   isFound:false,
    isRetrieved:false,
    deleted:false,
    isUpdated:false,
    user:[],
    customer:{},
    
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CUSTOMER_LIST:
            return {
                ...state,
                isRetrieved:true,
                user:action.payload
            };
            case DELETE_CUSTOMER:
               const user= state.user.filter((user)=>user._id!==action.payload.id)
                return {
                    ...state,
                   deleted:true,
                   user:user
                       
                
                };
                case GET_SPECIFIC_CUSTOMER:
            return {
                ...state,
                isFound:true,
                user:action.payload
            };
            case UPDATE_CUSTOMER:
                return {
                    ...state,
                    isUpdated:true,
                    user:action.payload
                };
        default:
            return state;
    }
};