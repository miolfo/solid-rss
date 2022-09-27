import { Accessor } from "solid-js"

interface PaginationProps {
    setPage: (val: number) => void
    currentPage: Accessor<number>
}

const Pagination = (props: PaginationProps) => {

    const onClick = (val: number) => {
        props.setPage(val)
    }

    return (
        <ul class="pagination">
            <li class={`page-item ${props.currentPage() < 1 ? 'disabled' : ''}`}>
                <button type="button" class="page-link" onClick={() => onClick(0)}>First</button>
            </li>
            <li class={`page-item ${props.currentPage() < 1 ? 'disabled' : ''}`}>
                <button type="button" class="page-link" onClick={() => onClick(props.currentPage() - 1)}>Previous</button>
            </li>
            <li class="page-item disabled"><a class="page-link" href="#">{props.currentPage() + 1}</a></li>
            <li class="page-item">
                <button type="button" class="page-link" onClick={() => onClick(props.currentPage() + 1)}>Next</button>
            </li>
        </ul>
    )
}

export default Pagination