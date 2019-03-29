import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as leaseActions from '../actions/leaseActions';
import LeaseList from '../components/LeaseList';

export default connect(
    state => ({
        ...state.lease.leases,  
        selectedLease: state.lease.leaseDetails.item
    }),
    dispatch => ({
        leaseActions: bindActionCreators(leaseActions, dispatch)
    })
)(LeaseList)