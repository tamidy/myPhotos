import React from 'react';
import { withRouter } from 'react-router-dom';
import {name, email, bio} from './Account';
import './Account.css';
import defaultpic from './images/defaultprofilepic.png';

const SaveProfileButton = withRouter(({ history }) => (
    <a href="" id="editButton" onClick={() => { 
        saveNewInfo()
        history.push('/account')
    }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
        </svg>
    </a> 
))

let newName = "";
let newEmail = "";
let newBio = "";
let changed = false;

let saveNewInfo = () => {
    changed = true;
    newName = (document.getElementById("newName") as HTMLInputElement).value;
    newEmail = (document.getElementById("newEmail") as HTMLInputElement).value;
    newBio = (document.getElementById("newBio") as HTMLInputElement).value;
}

const EditProfilePage =  () => {
    return (
        <div id="accountpage">

            <div id="topInfo">
                <img id="pic" src={defaultpic} alt="Profile" />
                <input type="text" defaultValue={name} id="newName"/>
                <SaveProfileButton />
            </div>

            <table>
                <tr>
                    <td>Email</td>
                    <td><input type="text" defaultValue={email} id="newEmail"/></td>
                </tr>
                <tr>
                    <td>Bio</td>
                    <td><input type="text" defaultValue={bio} id="newBio"/></td>
                </tr>
            </table>
        </div>
    )
}

export {newName, newEmail, newBio, changed};
export default EditProfilePage;