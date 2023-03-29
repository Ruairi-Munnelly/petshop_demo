import React, { useContext } from "react";
import { PathTagFilterContext } from "../contexts/PathTagFilterContext";
export default function ToolBar() {
  const { TAGS, filteredTag, setFilteredTag } =
    useContext(PathTagFilterContext);
  return (
    <div className="px-6 py-4">
      <ul>
        <li className="grid d-flex flex-column flex-md-row">
          <strong>Filter by tag</strong>
          <label className="dropmenu">
            <select
              className="form-control"
              value={filteredTag}
              onChange={({ currentTarget }) => {
                setFilteredTag(currentTarget.value);
              }}
            >
              <option disabled>Select a tag filter</option>
              {TAGS.map(function (tag: string) {
                return (
                  <option value={tag} key={tag}>
                    {tag}
                  </option>
                );
              })}
            </select>
          </label>
        </li>
      </ul>
    </div>
  );
}
