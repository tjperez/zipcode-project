import React from 'react';

class ZipResult extends React.Component {
    render(){
        return (
            <div className='zip-result'>
                <li className="li"><label className='label'>City: {this.props.City}</label></li>
                <li className="li"><label className='label'>State: {this.props.State}</label></li>
                <li className="li"><label className='label'>Estimated Population: {this.props.EstimatedPopulation}</label></li>
                <li className="li"><label className='label'>Total Wages: {this.props.TotalWages}</label></li> 
            </div>
        )
    }
}


export default ZipResult;