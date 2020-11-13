import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../img/logo.svg';

export class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar row p-2">
                <div className="col-2">
                    <Link to="/">
                    <img alt="Logo do Ei Garçom" src={logo} className="p-2"></img>
                    </Link>
                </div>
                <div className="col-8 text-right">
                    <NavLink to="/" exact className="btn p-2"><span className="fa fa-home" aria-hidden="true"></span> Início</NavLink>
                    <NavLink to="/pagar" exact className="btn p-2"><span className="fa fa-money" aria-hidden="true"></span> Pagar</NavLink>
                </div>
            </div>
        )
    }
}

export default Navbar
