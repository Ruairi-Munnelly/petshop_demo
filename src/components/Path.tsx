import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import JsonPrettier from "@/functions/usePrettier";

const inter = Inter({ subsets: ["latin"] });

const DataTable = ({ pathData }: { pathData: object }) => {
  return (
    <>
      <table className="border-collapse w-full">
        <tbody>
          <tr>
            <th className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
              Method
            </th>
            <th className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
              Parameters
            </th>
            <th className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
              Response
            </th>
          </tr>
          {Object.keys(pathData).map((method) => {
            const {
              parameters,
              responses,
            }: { parameters: object; responses: object } = pathData[method];
            return (
              <tr key={method}>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400" style={{width: "10%"}}>
                  <pre
                    dangerouslySetInnerHTML={{
                      __html: JsonPrettier(JSON.stringify(method, null, 2)),
                    }}
                  ></pre>
                </td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400" style={{width: "45%"}}>
                  <pre
                    dangerouslySetInnerHTML={{
                      __html: JsonPrettier(JSON.stringify(parameters, null, 2)),
                    }}
                  ></pre>
                </td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400" style={{width: "45%"}}>
                  <pre
                    dangerouslySetInnerHTML={{
                      __html: JsonPrettier(JSON.stringify(responses, null, 2)),
                    }}
                  ></pre>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default function Path({
  pathData,
  pathname,
}: {
  pathData: object;
  pathname: string;
}) {
  const [showChildren, setShowChildren] = useState(false);
  const [onHoverUrl, setOnHoverUrl] = useState(false);
  return (
    <div
      className={`${styles.card} shadow-xl`}
      onClick={() => {
        setShowChildren(!showChildren);
      }}
    >
      <h2 className={inter.className}>
        <Link
          href={`paths/${encodeURIComponent(pathname)}`}
          onClick={(e) => {
            setShowChildren(showChildren);
          }}
          onMouseEnter={() => {
            setOnHoverUrl(!onHoverUrl);
          }}
          onMouseLeave={() => {
            setOnHoverUrl(!onHoverUrl);
          }}
        >
          {pathname} {onHoverUrl && <span>-&gt;</span>}
        </Link>
        {!showChildren ? (
          <span style={{ float: "right" }}>&#x25BC;</span>
        ) : (
          <span style={{ float: "right" }}>&#x25B2;</span>
        )}
      </h2>
      {showChildren && <DataTable pathData={pathData} />}
    </div>
  );
}
