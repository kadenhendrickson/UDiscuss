import React, { Component } from 'react';
import './../css/LightTheme.css';
import './../css/Design.css';


export class DarkModeToggle extends Component {
    static displayName = DarkModeToggle.name;

    constructor(props) {
        super(props);

        // has two props representing the number of upvotes and if it is currently toggled.
        this.state = { isDarkMode: props.isDarkMode };
        this.toggleMode = this.toggleMode.bind(this);
    }

    /**
     * Change dark/light mode ehre
     * 
     * */
    toggleMode() {

    }

    render() {
        // TODO - toggle based on toggle dark mode.... see my comment below from my 4540 code on how to do this
        return (
            <div className="w-75 d-flex">
                <h5> Dark Mode: &emsp;</h5>
                <div className="custom-switch">
                    <input type="checkbox" className="custom-control-input" checked={true} id="test" />
                    <label class="make-cursor-point custom-control-label" for="test"></label>
                </div>

            </div>
        );
    }
}

/*
// Find if they are this role or not.
string defaultToggled = "";
if (await um.IsInRoleAsync(user, role.Name)) {
    defaultToggled = "checked";
}

                        < !--For each role, mark whether or not the user is in it.Will need an onchange method for changing roles.-- >
    <td>
        <div class="custom-switch">
            <input onchange="execute_swal('@user.Id', '@role.Name')" type="checkbox" class="custom-control-input" id="@userAndRole" @defaultToggled>
            <label class="make-cursor-point custom-control-label" for="@userAndRole"></label>
        </div>
    </td>

*/