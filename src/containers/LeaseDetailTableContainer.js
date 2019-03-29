import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as leaseActions from '../actions/leaseActions';
import LeaseDetailsTable from '../components/LeaseDetailsTable';

export default connect(
    state => ({
        ...state.lease.leaseDetails
    }),
    dispatch => ({
        leaseActions: bindActionCreators(leaseActions, dispatch)
    })
)(LeaseDetailsTable)