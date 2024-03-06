import Home from '../Components/Home'
import {connect} from 'react-redux'
import { action, removeToCart } from '../Service/Actions/actions'


const mapStateToProps=state=>({
    cardData:state
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(action(data)),
    removeToCartHandler:data => dispatch(removeToCart(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)