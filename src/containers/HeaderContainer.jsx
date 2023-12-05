import { connect } from 'react-redux';
import Header from "../components/Header";

const mapStateToProps = state => ({
    // cartData: state  // long hierarchy to display data
    cartData: state.cartItem
})
const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);

// export default Home;