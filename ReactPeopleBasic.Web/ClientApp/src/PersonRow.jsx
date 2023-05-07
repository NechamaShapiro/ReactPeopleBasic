import React from 'react';
class PersonRow extends React.Component {
    
    render() {
        let dangerClass = '';
        if (this.props.currentPerson.age > 65) {
            dangerClass = 'table-danger';
        }
        else {
            dangerClass = '';
        }
        return (
            <tr className={dangerClass}>
                <td>{this.props.currentPerson.firstName}</td>
                <td>{this.props.currentPerson.lastName}</td>
                <td>{this.props.currentPerson.age}</td>
            </tr>
               )
    }
}

export default PersonRow;