import React from 'react'
// import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import {Link} from 'react-router-dom'


function Nav(props){
    // console.log(props)

    // console.log(props.location.pathname)
    const {pathname} = props.location
    // let {pathname} = props.location
    // console.log(pathname)
    // const currentLocation = props.location.pathname
    // console.log(currentLocation)

    // withRouter(connect(...)(Nav))


    // const { match, location, history } = this.props
    // console.log(location)


    return(
        <div>
            {pathname !== '/' && <div>
            <Link to="/Dashboard">  <button> Home </button> </Link>
            <Link to="/Form"> <button> New Post </button> </Link>
            <Link to="/"> <button>Logout</button> </Link>
            </div>
            }
        </div>
    )
}

// let  mapStateToProps = (state) =>{
//     return{
//         user: data
//     }
// }

export default withRouter((Nav))
// export default withRouter(connect(...,...)(Nav))