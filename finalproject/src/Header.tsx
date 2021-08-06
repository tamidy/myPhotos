import React from 'react';
import { withRouter } from 'react-router-dom';
import './Header.css';
import Menu from './Menu';
import defaultpic from './images/defaultprofilepic.png';

const LogoButton = withRouter(({ history }) => (
    <a href="" onClick={() => { history.push('/') }}><h1>myPhotos</h1></a>
))

const UploadButton = withRouter(({ history }) => (
    <a href="" id="uploadbutton" onClick={() => { history.push('/upload') }}>Upload</a>
))

const AccountButton = withRouter(({ history }) => (
    <a href="" onClick={() => { history.push('/account') }}><img id="profilepic" src={defaultpic} alt="Go to profile" /></a>
))

function Header() {
    return(
        <div>
            <header>
                <section className="header-section">
                    <Menu />
                    <LogoButton />                    
                </section>

                <section className="header-section">
                    <UploadButton />
                    <AccountButton />
                </section>
            </header>
        </div>

    );
}

export default Header

/**References:
 * https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router
 */