import React, { Component } from 'react';

class Pagination extends Component {
    render() {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.total / this.props.per_page); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            let classes = this.props.current_page === number ? 'active' : '';

            if (number === 1 || number === this.props.total || (number >= this.props.current_page - 2 && number <= this.props.current_page + 2)) {
                return (
                    <li key={number} className={"page-item " + classes}>
                        <a className="page-link" href="/#"
                            onClick={(e) => {
                                e.preventDefault();
                                this.props.getFetch(this.props.path, number);
                            }}>{number}</a>
                    </li>
                );
            }
        });

        if (this.props.total > 0) {
            return (
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous"
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.props.getFetch(this.props.path, this.props.prev_page);
                                }}>
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        {renderPageNumbers}
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next"
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.props.getFetch(this.props.path, this.props.next_page);
                                }}>
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            )
        } else {
            return (
                <h5 className="text-primary font-weight-bold">Sin resultados</h5>
            )
        }
    }
}

export default Pagination;