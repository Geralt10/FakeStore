import { useState } from "react"


export const usePagination=(items,itemPerPage=10)=>{
    const [currentPage,setCurrentPage]=useState(1);

    const totalPages = Math.ceil(items.length/itemPerPage);

    const safeCurrentPage = totalPages===0? 1 : Math.min(currentPage,totalPages);

    const startIndex = (safeCurrentPage-1)*itemPerPage;
    const endIndex = startIndex+itemPerPage;

    const currentItems = items.slice(startIndex,endIndex);

    function goToPage (page){
        const pageNumber = Math.max(1,Math.min(page,totalPages));
        setCurrentPage(pageNumber)
    }

    const nextPage = ()=> goToPage(currentPage+1);
    const prevPage = ()=> goToPage(currentPage-1);

    return({
        currentPage:safeCurrentPage,
        totalPages,
        currentItems,
        goToPage,
        nextPage,
        prevPage
    })
}