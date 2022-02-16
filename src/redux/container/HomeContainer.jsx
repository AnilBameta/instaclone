import Home from '../../pages/Home';
import {connect} from 'react-redux';
import {newPost} from '../services/actions/HomeAction'

const mapStateToProps=state=>({
     data:state
})
const mapDispatchToProps=dispatch=>({
    sendNewPost:(data)=>dispatch(newPost(data))
    
})
// 
export default connect(mapStateToProps,mapDispatchToProps)(Home)