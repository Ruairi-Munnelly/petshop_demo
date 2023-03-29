import Path from "../components/Path"
import { useContext } from "react";
import { PathTagFilterContext } from "../contexts/PathTagFilterContext";

export default function PathLinks({ paths }: { paths: object }) {
const { filteredTag } = useContext(PathTagFilterContext);

  return (
    <div className="">
      {Object.keys(paths)
      .filter((path) => {
        if (filteredTag == 'All') { return true };
        return path.includes(filteredTag)
      })
      .map((path) => {
        return (
          <Path pathData={paths[path]} pathname={path} key={path}></Path>
        );
      })}
    </div>
  );
}
