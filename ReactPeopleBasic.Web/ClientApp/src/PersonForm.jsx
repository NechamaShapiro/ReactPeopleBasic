import React from 'react';

class PersonForm extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-3'>
                    <input value={this.props.currentPerson.firstName} onChange={this.props.onFirstNameTextChange} type='text' placeholder='First Name' className='form-control' />
                </div>
                <div className='col-md-3'>
                    <input value={this.props.currentPerson.lastName} onChange={this.props.onLastNameTextChange} type='text' placeholder='Last Name' className='form-control' />
                </div>
                <div className='col-md-2'>
                    <input value={this.props.currentPerson.age} onChange={this.props.onAgeTextChange} type='text' placeholder='Age' className='form-control' />
                </div>
                <div className='col-md-2'>
                    <button onClick={this.props.onAddClick} className='btn btn-primary w-100'>Add</button>

                </div>
                <div className='col-md-2'>
                    <button onClick={this.props.onClearClick} className='btn btn-warning w-100'>Clear People</button>
                </div>
                
            </div>
        );
    }
}

export default PersonForm;