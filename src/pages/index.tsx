import Header from "../components/Header"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
import useFetch from "@/hooks/useFetch"
import PageInfo from "@/components/PageInfo"
import Footer from '@/components/Footer'
import PathLinks from "@/components/PathLinks"
import { PathTagFilterProvider } from "@/contexts/PathTagFilterContext";
import ToolBar from "@/components/ToolBar"

const inter = Inter({ subsets: ["latin"] });

export default function App() {

  const {data: {info, paths}, error, loading }: 
  {data: object, error: null | undefined | string; loading: boolean; } = useFetch('/data.json');

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
        <Footer />
      </main>
    </>
  );
}
