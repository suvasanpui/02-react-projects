import React from 'react'

function reducer(state,action) {
    switch(action.type){
        case "IS_SIGN_UP":
            return{
                isLogin:false,
            }
            return state;
            case "IS_LOGIN":
                return{
                    isLogin:true,
                }
    }
    return state;
}

export default reducer
