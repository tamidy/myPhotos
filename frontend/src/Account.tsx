import React from 'react';
import './Account.css';
import {newName, newEmail, newBio, changed} from './EditProfile';
import defaultpic from './images/defaultprofilepic.png';
import { withRouter } from 'react-router-dom';

const EditProfileButton = withRouter(({ history }) => (
  <a href="" id="editButton" onClick={() => { history.push('/editprofile') }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
      <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
    </svg>
  </a> 
))

let name = "";
let email = "";
let bio = "";

if (changed) {
  name = newName;
  email = newEmail; 
  bio = newBio;
} else {
  name = "Tami Yousafi";
  email = "tahmina.yousafi@cognizant.com";
  bio = "I am a person!";
}

function AccountPage() {
  return (
    <div id="accountpage">

      <div id="topInfo">
        <img id="pic" src={defaultpic} alt="Profile" />
        <h2 id="name">{name}</h2>
        <EditProfileButton />
      </div>

      <table>
        <tr>
          <td>Email</td>
          <td>{email}</td>
        </tr>
        <tr>
          <td>Bio</td>
          <td>{bio}</td>
        </tr>
      </table>
    </div>
  );
}

export {name, email, bio};
export default AccountPage;
