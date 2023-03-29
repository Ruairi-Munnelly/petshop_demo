import Path from "../components/Path"
import { useContext } from "react";
import { PathTagFilterContext } from "../contexts/PathTagFilterContext";

export default function PathLinks({ paths }: { paths: object }) {
const ctxt = useContext(PathTagFilterContext);

  const { filteredTag } = useContext(PathTagFilterContext) as any;

  return (
    <div className="">
      {Object.keys(paths)
      .filter((path) => {
        if (filteredTag == 'All') { return true };
        return path.includes(filteredTag)
      })
      .map((path) => {
        type ObjKey = keyof typeof paths;
        const key = path as ObjKey;

        return (
          <Path pathData={paths[key]} pathname={path} key={path}></Path>
        );
      })}
    </div>
  );
}
