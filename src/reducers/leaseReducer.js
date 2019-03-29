import {
    LEASES_REQUESTED,
    LEASES_COMPLETED,
    LEASES_FAILED,
    LEASE_DETAILS_REQUESTED,
    LEASE_DETAILS_COMPLETED,
    LEASE_DETAILS_FAILED,
} from '../actions/actionTypes'

const leaseReducer = (state = {
    leases: {
        isFetching: false,
        didInvalidated: false,
        items: []
    },
    leaseDetails: {
        isFetching: false,
        didInvalidated: false,
        item: {}
    }
}, action) => {
    switch (action.type) {
        case LEASES_REQUESTED:
            return {
                ...state,
                leases: {
                    isFetching: true
                }
            }
        case LEASES_COMPLETED:
            return {
                ...state,
                leases: {
                    items: action.payload
                }
            }
        case LEASES_FAILED:
            return {
                ...state,
                leases: {
                    didInvalidated: true
                }
            }
        case LEASE_DETAILS_REQUESTED:
            return {
                ...state,
                leaseDetails: {
                    isFetching: true
                }
            }
        case LEASE_DETAILS_COMPLETED:
            return {
                ...state,
                leaseDetails: {
                    item: action.payload
                }
            }
        case LEASE_DETAILS_FAILED:
            return {
                ...state,
                leaseDetails: {
                    didInvalidated: true
                }
            }
        default:
            return state;

    }
};

export default leaseReducer;