import { useDeferredValue, useMemo } from "react";
import { useCategory } from "./useCategory";
import { useProduct } from "./useProduct";
import { useSearch } from "./useSearch";

export const useFilteredProduct =()=>{
    const{products}=useProduct()
    const {selectedCategory,selectedSort}=useCategory()
    const {searchQuery}=useSearch();
    const deferredSearchValue = useDeferredValue(searchQuery);
    const normalizedSearchValue = deferredSearchValue.trim().toLowerCase();

    const makeCategory = useMemo(()=>{
        const categorySet = new Set();
        for(const product of products){
            categorySet.add(product.category)
        }
        return ["all",...categorySet]
    }, [products])

    const filteredAndSortedProduct = useMemo(()=>{
        const filteredProduct= [];
        for(const product of products){
            const matchSearch = !normalizedSearchValue ||
                                product.category.toLowerCase().includes(normalizedSearchValue) ||
                                product.title.toLowerCase().includes(normalizedSearchValue) ||
                                product.description.toLowerCase().includes(normalizedSearchValue) ;

            const matchesCategory = selectedCategory==="all" || product.category=== selectedCategory;
            
            if(matchSearch && matchesCategory){
                filteredProduct.push(product)
            }
        }

        if(selectedSort ==="none"){
            return filteredProduct
        }

        const sortedProducts = [...filteredProduct];

        const sortDirection = selectedSort==="lowToHigh"? 1 : -1;

        sortedProducts.sort((a,b)=>sortDirection * (a.price-b.price));

        return sortedProducts

    }, [
        products,
        normalizedSearchValue,
        selectedCategory,
        selectedSort,
    ])

    return{
        makeCategory,filteredAndSortedProduct
    }
    
} 