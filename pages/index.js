import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "../components/Header/Header";
import Nav from "../components/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
      </Head>

      <Header />

      <Nav />

      {/* Resault */}
    </div>
  );
}
