import React, { createContext, ReactEventHandler } from "react";
import usePathTagFilter from "../hooks/usePathTagFilter";

type PathTagFilterContextType = {
  TAGS: string[],
  FilteredTag: string,
  setFilteredTag: any
}

const PathTagFilterContext = createContext('') as any;

type childrenType = {
  children: JSX.Element | JSX.Element[] 
}

function PathTagFilterProvider({ children }:{children: any}) {

  const {
    TAGS,
    filteredTag,
    setFilteredTag
  }:{TAGS:string[]; filteredTag:string; setFilteredTag: string | any} = usePathTagFilter();

  return (
    <PathTagFilterContext.Provider 
      value={{
        TAGS,
        filteredTag,
        setFilteredTag
      }}>
      { children } 
    </PathTagFilterContext.Provider>
  )
}

export { PathTagFilterContext, PathTagFilterProvider}

