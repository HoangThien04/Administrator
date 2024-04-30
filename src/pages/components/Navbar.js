import React from 'react';
import './Navbar.css';
const Navbar = ({show, toggleState, setToggleState}) => {
    const ToggleTab = (index) => {
        setToggleState(index)
    }
    return (
         <div className={show? "sidenav active" : "sidenav"}>
            <img src="https://hcmut.edu.vn/img/logo.jpg?t=26899198" alt="logo" className="logo" />
            <ul>
                <li><a className={toggleState === 1? "tabs active" : "tabs"} href="#" onClick={() => ToggleTab(1)}>Doctors</a></li>
                <li><a className={toggleState === 2? "tabs active" : "tabs"} href="#" onClick={() => ToggleTab(2)}>Equipments</a></li>
                <li><a className={toggleState === 3? "tabs active" : "tabs"} href="#" onClick={() => ToggleTab(3)}>Drug</a></li>
            </ul>
        </div>
    )
}
export default Navbar