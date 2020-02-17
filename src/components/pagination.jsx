import React, { useEffect, useState } from 'react';

const Pagination = props => {
    const [pageNumbers, setPageNumbers] = useState([]);


    useEffect(() => {
        let numbers = [];
        for (let i = 1; i <= Math.ceil(props.total / props.per_page); i++) {
            numbers.push(i);
        }
        setPageNumbers(numbers);
    })

    const renderPageNumbers = pageNumbers.map(number => {
        let classes = props.current_page === number ? 'active' : '';
        return (
            <li key={number} className={"page-item " + classes}>
                <a className="page-link" href="/#"
                    onClick={(e) => {
                        e.preventDefault();
                        props.getFetch(props.path, number);
                    }}>{number}</a>
            </li>
        );
    });

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous"
                        onClick={(e) => {
                            e.preventDefault();
                            props.getFetch(props.path, props.prev_page);
                        }}>
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {renderPageNumbers}
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next"
                        onClick={(e) => {
                            e.preventDefault();
                            props.getFetch(props.path, props.next_page);
                        }}>
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;