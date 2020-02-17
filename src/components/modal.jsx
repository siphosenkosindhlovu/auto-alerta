import React from 'react';

const Modal = props => {
    return (
        <form>
            <div className="modal fade" id={props.id} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="myModalLabel">{props.title}</h4>
                        </div>
                        <div className="modal-body">
                            {props.children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => props.callFunc('/api/roles')}>Guardar Cambios</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Modal;