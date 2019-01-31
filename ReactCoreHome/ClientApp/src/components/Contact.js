import React, { Component } from 'react';
import './Contacts.css';
export class Contact extends Component {

    static renderContactsTable(contacts)
    {
        return (
            <div className="contactContainer">
                {contacts.map(contacts =>
                    <div className="contactCard" key={contacts.firstName}>
                        <div>{contacts.firstName}</div>
                        <div>{contacts.surName}</div>
                        <div>{contacts.phone}</div>
                        <div><a href={contacts.email}>{contacts.email}</a></div>
                        <div><a href={contacts.webSiteLink}>{contacts.webSiteLink}</a></div >
                        <div>{contacts.source}</div >
                    </div>
                )}
            </div>
        );
    }

    displayName = Contact.name

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };

        fetch('api/SampleData/WebContacts')
            .then(response => response.json())
            .then(data => {
                this.setState({ contacts: data, loading: false });
            });
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Contact.renderContactsTable(this.state.contacts);

        return (
            <div>
                <h1>Contact information</h1>
                {contents}
            </div>
        );
    }
}
