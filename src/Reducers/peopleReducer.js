const people={}

export default function peopleReducer(state = people, action){
    switch(action.type){
        case "GET_PEOPLE":
            return{
                ...state,
                getPeople: action.payload
            }

        case "PERSON_DETAIL":
            // console.log("........",action.payload)
            return{
                ...state,
                getPersonDetail: action.payload
            }

        default:
            return state
    }
};