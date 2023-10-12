import Head from "next/head";

export default function Page({ params }: { params: { id: string } }) {
  <Head>
    <title>{params.id}</title>
  </Head>;
  return <div>My Post: {params.id}</div>;
}
