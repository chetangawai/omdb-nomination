import { connect } from 'react-redux';
import {searchMovie} from './../redux/actions'
import App from './../components/App';

const mapDispatchToProps = {
  searchMovie,
};

export default connect(null, mapDispatchToProps)(App);