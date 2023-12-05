import { connect } from 'react-redux';
import Home from "../components/Home";
import { addToCart, removeToCart } from '../services/actions/action';

const mapStateToProps = state => ({
    // cartData: state  // long hierarchy to display data
    cartData: state.cartItem
})
const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeToCartHandler: data => dispatch(removeToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;