import Header from "../components/Header"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
import useFetch from "@/hooks/useFetch"
import PageInfo from "@/components/PageInfo"
import PathLinks from "@/components/PathLinks"
import { PathTagFilterProvider } from "@/contexts/PathTagFilterContext";
import ToolBar from "@/components/ToolBar"

const inter = Inter({ subsets: ["latin"] });

export default function App() {

  type dataType = {
    info: object,
    paths: object
  }  

  const {data, error, loading }: 
  {data: object; error: null | undefined | string; loading: boolean; } = useFetch('/data.json');

  const {info, paths} = data as dataType;

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          {info && <PageInfo info={info} styles={styles} />}
          <PathTagFilterProvider>
            <ToolBar />
            {paths && <PathLinks paths={paths} />}
          </PathTagFilterProvider>
        </div>
      </main>
    </>
  );
}
