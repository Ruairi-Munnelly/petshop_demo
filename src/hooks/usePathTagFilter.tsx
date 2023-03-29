import { useState } from "react";

export default function usePathTagFilter(pathFilter:string = 'All') {
  const TAGS = [
    "All",
    "/pet",
    "/store",
    "/user"
  ]
  const [filteredTag, setFilteredTag] = useState(pathFilter);

  return {
    TAGS,
    filteredTag,
    setFilteredTag
  };
};