import React from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';

class PeopleTable extends React.Component {

    state = {
        currentPerson: {firstName: '', lastName: '', age: ''},
        people: []
    }

    onFirstNameTextChange = (e) => {
        const copy = this.state.currentPerson;
        copy.firstName = e.target.value;
        this.setState({ currentPerson: copy });
    }
    onLastNameTextChange = (e) => {
        const copy = this.state.currentPerson;
        copy.lastName = e.target.value;
        this.setState({ currentPerson: copy });
    }
    onAgeTextChange = (e) => {
        const copy = this.state.currentPerson;
        copy.age = e.target.value;
        this.setState({ currentPerson: copy });
    }

    onClearClick = () => {
        this.setState({ currentPerson: { firstName: '', lastName: '', age: '' }, people: []});
    }

    onAddClick = () => {
        const copy = [...this.state.people];
        copy.push(this.state.currentPerson);
        this.setState({ people: copy, currentPerson: { firstName: '', lastName: '', age: '' } });
    }

    render() {
        return (
            <div>
                <div className='container mt-5'>
                    <PersonForm currentPerson={this.state.currentPerson}
                        onClearClick={this.onClearClick}
                        onFirstNameTextChange={this.onFirstNameTextChange}
                        onLastNameTextChange={this.onLastNameTextChange}
                        onAgeTextChange={this.onAgeTextChange}
                        onAddClick={this.onAddClick}
                    />
                </div>
                <table className="table table-hover table-striped table-bordered mt-5">
                    <thead>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </thead>
                    <tbody>
                        {this.state.people.map(p => <PersonRow currentPerson={firstName = p.firstName, lastName = p.lastName, age = p.age} />) }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PeopleTable;