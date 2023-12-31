import { GetServerSideProps } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "../components/Header/Header";
import Nav from "../components/Nav";
import Content from "../components/Content";
import requests from "../utils/requests";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
      </Head>

      <Header />

      <Nav />

      <Content results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { genre } = context.query;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    } `
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
