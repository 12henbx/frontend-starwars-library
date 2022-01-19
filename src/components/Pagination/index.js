import React from 'react';
import ReactPaginate from 'react-paginate';


function Pagination({ dataLength, pageItemOffset }) {
    // const [pageItemOffset, setPageItemOffset] = useState();
    const itemsPerPage = 10;

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % dataLength;
        pageItemOffset(newOffset);
      };

    return (
            <div className="mx-8 my-12">
              <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={Math.ceil(dataLength / itemsPerPage)}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
              />
            </div>
    )
}
const MemoizedPagination = React.memo(Pagination);
export default MemoizedPagination;