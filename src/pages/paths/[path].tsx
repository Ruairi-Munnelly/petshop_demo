import { useRouter } from "next/router";
import { useState, useEffect } from 'react'
import styles from "@/styles/Home.module.css";
import data from "../../../public/data.json";
import Link from "next/link";
import { Inter } from "next/font/google";
import JsonPrettier from "@/functions/usePrettier";

const inter = Inter({ subsets: ["latin"] });


const Path = () => {
  const [pathData, setPathData] = useState('');
  const router = useRouter();
  const { path } = router.query;
  const pathDataStr = JSON.stringify(data.paths[path], null, 2);

  useEffect(() => {  
    setPathData(pathDataStr);
  },[]);
  
  return (
    <>
      <div>
        <div className={styles.card}>
          <Link href={"/"}>
            <h2 className={inter.className}>
              <span>&lt;-</span> {path}
            </h2>
          </Link>
        </div>
        <div className={`shadow-xl border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400`}>
          <pre dangerouslySetInnerHTML={{__html: JsonPrettier(pathDataStr) }}>
          </pre>
        </div>
      </div>
    </>
  );
};

export default Path;
