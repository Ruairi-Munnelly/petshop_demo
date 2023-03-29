import React, { createContext, ReactEventHandler } from "react";
import usePathTagFilter from "../hooks/usePathTagFilter";

const PathTagFilterContext = createContext();

type Props = {
  children: JSX.Element | JSX.Element[] 
}

function PathTagFilterProvider({children, pathTags, pathFilters}:{children: Props; pathTags:string[], pathFilters:string[]}) {

  const {
    TAGS,
    filteredTag,
    setFilteredTag
  }:{TAGS:string[]; filteredTag:string; setFilteredTag:any} = usePathTagFilter(pathTags, pathFilters);

  return (
    <PathTagFilterContext.Provider 
    value={{
      TAGS,
      filteredTag,
      setFilteredTag
    }} >
      { children }
    </PathTagFilterContext.Provider>
  )
}

export { PathTagFilterContext, PathTagFilterProvider}

