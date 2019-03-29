import {
    LEASES_REQUESTED,
    LEASES_COMPLETED,
    LEASES_FAILED,
    LEASE_DETAILS_REQUESTED,
    LEASE_DETAILS_COMPLETED,
    LEASE_DETAILS_FAILED,
} from './actionTypes'

import axios from 'axios';

export const fetchLeases = () => {
    return dispatch => {
        dispatch(fetchLeasesRequested())

        axios.get("https://hiring-task-api.herokuapp.com/v1/leases")
        .then(res=>{
            dispatch(fetchLeasesCompleted(res.data))
        })
        .catch(err=>{
            dispatch(fetchLeasesFailed(err))
        })
    }
}

const fetchLeasesRequested = () =>  ({
    type: LEASES_REQUESTED   
})

const fetchLeasesCompleted = (leases) =>  ({
    type: LEASES_COMPLETED,
    payload: leases
})

const fetchLeasesFailed = (err) =>  ({
    type: LEASES_FAILED,
    payload: err   
})

export const fetchLeaseDetails = id => {
    return dispatch => {
        dispatch(fetchLeaseDetailsRequested())

        axios.get(`https://hiring-task-api.herokuapp.com/v1/leases/${id}`)
        .then(res=>{
            dispatch(fetchLeaseDetailsCompleted(res.data))
        })
        .catch(err=>{
            dispatch(fetchLeaseDetailsFailed(err))
        })
    }
}

const fetchLeaseDetailsRequested = () =>  ({
    type: LEASE_DETAILS_REQUESTED   
})

const fetchLeaseDetailsCompleted = (leases) =>  ({
    type: LEASE_DETAILS_COMPLETED,
    payload: leases
})

const fetchLeaseDetailsFailed = (err) =>  ({
    type: LEASE_DETAILS_FAILED,
    payload: err   
})
