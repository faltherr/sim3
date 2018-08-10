import axios from 'axios'


//Setup for initial state
const initialState = {
    data:[],
    username: '',
    password: '',
    profile_picture : "",
    redirect: false,
    posts: [],
    userposts: true
}

//String constants
const USER_INPUT = "USER_INPUT"
const USER_PASSWORD = "USER_PASSWORD"
const REG_USER = "REG_USER"
// const SEARCH_TERM = "SEARCH_TERM"
const FETCH_POSTS = "FETCH_POSTS"
// const REG_USER_FULFILLED = "REG_USER_FULFILLED"


/***************/
//Action Creators
/***************/

//Export to Auth
export function userInput(username) {
    return {
        type: USER_INPUT,
        payload: username
    }
}

//Export to Auth
export function userPassword(password) {
    return {
        type: USER_PASSWORD,
        payload: password
    }
}

//Export to Auth
export function registerUser (username, password) {
    let newUser= {
        username: username,
        password: password
    }
    // console.log('New user is:',newUser)
    const request = axios.post('/api/auth/register', newUser).then(res=>{
        // console.log("success adding new user", res)
    })
    return{
        type: REG_USER,
        payload: request
    }
}

// export function getUser() {
//     return {
//         type: GET_USER,
//         payload: axios.get('/api/currentUser')
//     }
// }

export function fetchPosts(userid, title, userposts){
    const url = `/api/posts/:${userid}&${title}&${userposts}`
    const request = axios.get(url)
    return{
        type: FETCH_POSTS,
        payload: request
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case USER_INPUT:
            return { ...state, username: action.payload }
        case USER_PASSWORD:
            return { ...state, password: action.payload }
        case REG_USER:
            return {...state, data: action.payload.data, redirect: true}
        case FETCH_POSTS:
            return {...state, posts:action.payload.data}

        default:
            return state;
    }
}


