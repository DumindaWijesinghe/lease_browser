import React, { Component } from 'react';
import moment from 'moment'

class LeaseDetailsTable extends Component{

    frequencyDictionary = {
        weekly: 7,
        fortnightly: 14,
        monthly: 28
    }

    ///
    // Generate payments
    ///
    generatePaymentsTable = () => {
        const lease = this.props.item;
        const payment_day = moment().day(lease.payment_day).weekday();

        var paymentTable = [];
        var pointer = moment(lease.start_date);

        const startDate = moment(lease.start_date)
        const endDate = moment(lease.end_date);
        const step = this.frequencyDictionary[lease.frequency]

        var payment = {
            startDate: pointer.clone()
        }
        while (pointer.isSameOrBefore(endDate)) {
            pointer.add(1, 'days');

            // handle the startDate to first payment_day payment
            if (payment_day == pointer.weekday() && payment.startDate.isSame(startDate)) {
                payment = {
                    ...payment,
                    endDate: pointer.clone()
                }
                paymentTable.push(payment)
                payment = {
                    startDate: pointer.clone().add(1, 'days')
                }
            } 
            // handle subsequent payments with full lease frequency 
            else if (payment_day == pointer.weekday() && pointer.diff(payment.startDate, 'days') == step - 1) {
                payment = {
                    ...payment,
                    endDate: pointer.clone()
                }
                paymentTable.push(payment)
                if(pointer.isSame(endDate)){
                    break;
                }
                payment = {
                    startDate: pointer.clone().add(1, 'days')
                }
            } 
            // handle last payment_day to endDate payment
            else if (pointer.diff(endDate, 'days') == 1) {
                payment = {
                    ...payment,
                    endDate: endDate
                }
                paymentTable.push(payment)
            }
        }
        return paymentTable;
    }

    calculateDays = (start, end) => {
        return end.diff(start, 'days') + 1
    }

    // calculate total rent from rent per week
    calculateAmount = (start, end, rent) => {
        return '$'+(this.calculateDays(start, end)*rent/7).toFixed(2);
    }

    componentDidUpdate(prevProps) {
        if (this.props.item && this.props.item !== prevProps.item) {
            if(Object.keys(this.props.item).length){
                let paymentTable = this.generatePaymentsTable()
                this.setState({
                    paymentTable: paymentTable
                })
            }
        }
    }

    render(){
        return(   
            <div style={{width:550, height:500}}>

                { this.props.isFetching ? 
                <div style={fetchingStyle}>
                    <img src={require('../images/loading.gif')} style={{height:50, width:50}} alt='loading...'/>
                </div> : (
                this.props.didInvalidated ?
                <div style={invalidatedStyle}>
                    <p>Somthing went wrong :(</p>
                </div> : (this.props.item.start_date ?
                <div>
                    <div style={tableHeaderStyle}>
                        <span><b>Start</b><br/>{moment(this.props.item.start_date).format('MMM, Do, YYYY')}</span>
                        <span><b>End</b><br/>{moment(this.props.item.end_date).format('MMM, Do, YYYY')}</span>
                        <span>Days</span>
                        <span style={{fontWeight:800}}>Amount</span>
                    </div>
                    <div style={tableBodyStyle}>
                        <div>
                            {this.state && this.state.paymentTable.map(row => 
                                <div style={tableRowStyle}>
                                    <span>{row.startDate.format('MMM, Do, YYYY')}</span>
                                    <span>{row.endDate.format('MMM, Do, YYYY')}</span>
                                    <span>{this.calculateDays(row.startDate,row.endDate)}</span>
                                    <span style={{fontWeight:800, color:'#444' }}>{this.calculateAmount(row.startDate,row.endDate,this.props.item.rent)}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div> :
                <div style={{width:550, height:500, display:'flex', alignItems:'center', justifyContent:'center', backgroundColor: '#FFF'}}>
                    <p>Please select a lease...</p>
                </div> 
                ))}

                
            </div>
        );
    }
}

export default LeaseDetailsTable;

const fetchingStyle = {
    width:550, 
    height:500, 
    display:'flex', 
    alignItems:'center', 
    justifyContent:'center', 
    backgroundColor: '#FFF'
}

const invalidatedStyle = { 
    width:550, 
    height:500, 
    display:'flex', 
    alignItems:'center', 
    justifyContent:'center', 
    backgroundColor: '#FFF'
}

const tableHeaderStyle = {
    width:550, 
    height:80, 
    backgroundColor:"#FFF",
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.08)',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around',
    color:"#636363"
}

const tableBodyStyle = {
    width:550, 
    height:(500-80), 
    overflow:'scroll'
}

const tableRowStyle = {
    width:550, 
    height:40, 
    backgroundColor:"#E2F2F2",
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around',
    color:"#636363"
}