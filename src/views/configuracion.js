import React, { useContext, useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Context } from './../store/appContext';

const Configuracion = props => {
    const { store } = useContext(Context);
    const { mod, setMod } = useState(props.match.params.mod);
    //6LcXsh4TAAAAAIMQIRcgdLIoA9KOz3mB2qKs4LOY
    useEffect(() => {
        if (!store.isAuthenticated) props.history.push("/login");
        if (store.currentUser.user.role.id !== 1) props.history.push("/login");
    })

    const handleMod = mod => {
        console.log(mod);
    }
    return (
        <section id="page">
            <div className="container">

                <h1>Configuracion</h1>
                <hr />

                <div className="row">
                    <div className="col-md-3">
                        <div className="list-group">
                            <Link to="/configuracion/roles" className={"list-group-item " + (mod == 'roles' ? " active" : "")} onClick={() => handleMod('roles')}>
                                <h4 className="list-group-item-heading">Roles</h4>
                                <p className="list-group-item-text">Modulo de Roles</p>
                            </Link>
                            <Link to="/configuracion/users" className={"list-group-item " + (mod == 'users' ? " active" : "")}>
                                <h4 className="list-group-item-heading">Usuarios</h4>
                                <p className="list-group-item-text">Modulo de Usuarios</p>
                            </Link>
                            <Link to="/configuracion/contacto-web" className={"list-group-item " + (mod == 'contacto-web' ? " active" : "")}>
                                <h4 className="list-group-item-heading">Contacto Web</h4>
                                <p className="list-group-item-text">Modulo de Contactos Web</p>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Role</th>
                                    <th width="8%" colSpan="2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    !!store.roles &&
                                    store.roles.map((role, i) => (
                                        <tr>
                                            <td>{role.id}</td>
                                            <td>{role.name}</td>
                                            <td>
                                                <button className="btn btn-info">
                                                    <i className="fa fa-edit"></i>
                                                </button>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger">
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>

                        </table>

                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Rol</th>
                                    <th width="8%" colSpan="2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    !!store.users &&
                                    store.users.map((user, i) => (
                                        <tr>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.role.name}</td>
                                            <td>
                                                <button className="btn btn-info">
                                                    <i className="fa fa-edit"></i>
                                                </button>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger">
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default withRouter(Configuracion);