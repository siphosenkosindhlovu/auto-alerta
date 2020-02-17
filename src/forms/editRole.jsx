import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';

const EditRole = props => {
    const {store} = useContext(Context);

    return (
        <>
            <div className="form-group">
                <label htmlFor="role_name">Role</label>
                <input type="text" className="form-control" id="name" name="name" value={store.role.name}
                    placeholder="Nombre del Role" onChange={(e) => props.handleChange(e, 'role')} />
            </div>
        </>
    )
}

export default EditRole;