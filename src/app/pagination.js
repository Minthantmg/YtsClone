import previous from '../../public/previous.svg'
import arrow from '../../public/pvArrow.svg'
import React from 'react';
import Image from 'next/image';

const Pagination = ({currentPage, totalPages, setCurrentPage}) => {
    const itemsToShow = 5; // Number of page numbers to display
    const halfItemsToShow = Math.floor(itemsToShow / 2);

    const startPage = Math.max(1, currentPage - halfItemsToShow);
    const endPage = Math.min(totalPages, startPage + itemsToShow - 1);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleNextPageChange = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPageChange = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="flex justify-center items-center h-full ml-3 mr-3 md:ml-16 lg:ml-36 xl:ml-64">
            <div className="flex justify-center items-center mt-4 mb-4 sm:-ml-60">
                <nav className="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
                    <a
                        className={`relative inline-flex items-center px-2 py-2 rounded-l-md border ${
                            currentPage === 1
                                ? ''
                                : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
                        } text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500`}
                        onClick={handleNextPageChange}
                    >
                        <span className="sr-only">Previous</span>
                        <Image src={previous} alt="" />
                    </a>

                    {Array.from({length: itemsToShow}, (_, index) => startPage + index).map((pageNumber) => (
                        <a
                            key={pageNumber}
                            onClick={() => handlePageChange(pageNumber)}
                            className={`relative inline-flex items-center py-2 w-12 pl-[16px] border cursor-pointer ${
                                pageNumber === currentPage
                                    ? 'border-indigo-500 bg-indigo-500 text-white'
                                    : 'border-gray-300 bg-white text-gray-700'
                            } text-sm font-medium hover:bg-indigo-500 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500`}
                        >
                            {pageNumber}
                        </a>
                    ))}

                    <a
                        className={`relative inline-flex items-center px-2 py-2 rounded-r-md border ${
                            currentPage === totalPages
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
                        } text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500`}
                        onClick={handlePreviousPageChange}
                    >
                        <span className="sr-only">Next</span>
                        <Image src={arrow} alt="" />
                    </a>
                </nav>
            </div>
        </div>
    );
};

export default Pagination;

