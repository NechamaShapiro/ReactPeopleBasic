import React from 'react';
class PersonRow extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.p.firstName}</td>
                <td>{this.props.p.lastName}</td>
                <td>{this.props.p.age}</td>
            </tr>
               )
    }
}

export default PersonRow;