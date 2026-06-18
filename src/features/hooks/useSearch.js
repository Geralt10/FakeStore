import { useContext } from "react";
import { SearchContext } from "../context/search.context";

export function useSearch(){
    const {searchQuery,setSearchQuery}=useContext(SearchContext);

    return({searchQuery,setSearchQuery})
}