import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Context } from './../store/appContext';
import Pagination from '../components/pagination.jsx';
import moment from 'moment';
import Modal from '../components/modal';
import EditRole from '../forms/editRole';
import CreateRole from '../forms/createRole';

const Configuracion = props => {
    const { store, actions } = useContext(Context);
    //6LcXsh4TAAAAAIMQIRcgdLIoA9KOz3mB2qKs4LOY
    useEffect(() => {
        if (!store.isAuthenticated) props.history.push("/login");
        if (store.currentUser.user)
            if (store.currentUser.user.role.id !== 1) props.history.push("/login");
    }, [props.history, store.currentUser, store.isAuthenticated])

    const handleDate = date => {
        return moment(date).format('D MMM YYYY, h:mm:ss a');
    }
    return (
        <section id="page">
            <div className="container">

                <h1>Configuracion</h1>
                <hr />

                <div className="row">

                    <div className="col-md-12">
                        <button className="btn btn-success btn-sm pull-right mb-4" data-toggle="modal" data-target="#crearRole"
                            onClick={() => actions.setObject('role', { name: '' })}>
                            <i className="fa fa-pen"></i> Crear Role
                        </button>
                        <Modal id="crearRole" title="Crear Role" callFunc={actions.createRole}>
                            <CreateRole
                                handleChange={actions.handleChangeObject}
                            />
                        </Modal>
                        <table className="table table-bordered table-hover">
                            <thead style={{ "backgroundColor": 'black', 'color': 'white' }}>
                                <tr>
                                    <th width="5%">#</th>
                                    <th>Role</th>
                                    <th width="8%" colSpan="2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    !!store.roles.results &&
                                    store.roles.results.map((role, i) => (
                                        <tr key={i}>
                                            <td>{role.id}</td>
                                            <td>{role.name}</td>
                                            <td>
                                                <button className="btn btn-info" data-toggle="modal" data-target="#editRole"
                                                    onClick={() => actions.setObject('role', role)}>
                                                    <i className="fa fa-edit"></i>
                                                </button>
                                                <Modal id="editRole" title="Editar Role" callFunc={actions.editRole}>
                                                    <EditRole role={role}
                                                        handleChange={actions.handleChangeObject}
                                                    />
                                                </Modal>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger" data-toggle="modal" data-target="#editRole"
                                                    onClick={() => actions.setObject('role', role)}>
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                                <Modal id="deleteRole" title="Eliminar Role" callFunc={actions.deleteRole}>
                                                    <EditRole role={role}
                                                        handleChange={actions.handleChangeObject}
                                                    />
                                                </Modal>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="4" className="text-center">
                                        <Pagination {...store.roles} getFetch={actions.getRoles} path='/api/roles' />
                                    </td>
                                </tr>
                            </tfoot>
                        </table>

                        <button className="btn btn-success btn-sm pull-right mb-4" data-toggle="modal" data-target="#editUser"
                            onClick={() => actions.setObject('role', {})}>
                            <i className="fa fa-pen"></i> Crear User
                        </button>
                        <table className="table table-bordered table-hover">
                            <thead style={{ "backgroundColor": 'black', 'color': 'white' }}>
                                <tr>
                                    <th width="5%">#</th>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Patente</th>
                                    <th>Rol</th>
                                    <th width="8%" colSpan="2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    !!store.users.results &&
                                    store.users.results.map((user, i) => (
                                        <tr key={i}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.patent}</td>
                                            <td>{user.role.name}</td>
                                            <td>
                                                <button className="btn btn-info" data-toggle="modal" data-target="#editUser">
                                                    <i className="fa fa-edit"></i>
                                                </button>
                                                <Modal id="editUser" title="Editar Usuario" />
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
                            <tfoot>
                                <tr>
                                    <td colSpan="6" className="text-center">
                                        <Pagination {...store.users} getFetch={actions.getUsers} path='/api/users' />
                                    </td>
                                </tr>
                            </tfoot>
                        </table>

                        <table className="table table-bordered table-hover">
                            <thead style={{ "backgroundColor": 'black', 'color': 'white' }}>
                                <tr>
                                    <th width="5%">#</th>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Asunto</th>
                                    <th>Mensaje</th>
                                    <th>Fecha</th>
                                    <th width="8%" colSpan="2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    !!store.contacts_web.results &&
                                    store.contacts_web.results.map((contact_web, i) => (
                                        <tr key={i}>
                                            <td>{contact_web.id}</td>
                                            <td>{contact_web.name}</td>
                                            <td>{contact_web.email}</td>
                                            <td>{contact_web.subject}</td>
                                            <td>{contact_web.message}</td>
                                            <td>{handleDate(contact_web.date_msg)}</td>
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
                            <tfoot>
                                <tr>
                                    <td colSpan="8" className="text-center">
                                        <Pagination {...store.contacts_web} getFetch={actions.getContactWeb} path='/api/webcontacts' />
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default withRouter(Configuracion);