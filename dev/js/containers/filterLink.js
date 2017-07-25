import { connect } from 'react-redux';
import Link from '../compoments/Link';
import { bindActionCreators } from 'redux';
import { setVisibility } from '../actions/index';

function mapStateToProps(state, ownProps) {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return bindActionCreators({setVisibility: setVisibility}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Link);