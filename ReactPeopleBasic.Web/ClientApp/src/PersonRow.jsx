import React from 'react';
class PersonRow extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.currentPerson.firstName}</td>
                <td>{this.props.currentPerson.lastName}</td>
                <td>{this.props.currentPerson.age}</td>
            </tr>
               )
    }
}

export default PersonRow;