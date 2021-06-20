import Head from "next/head";
import Brand from "../../components/brandpage/Brand";
import Layout from "../../components/layout/Layout";
import {
  connectDatabase,
  getAllDocuments,
  getDocument,
} from "../../lib/db-utils";

import "font-awesome/css/font-awesome.min.css";

const IndividualBrandPage = ({ brand, likesRecord }) => {
  return (
    <>
      <Head>
        <title>{brand.name}</title>
        <meta name="description" content={brand.slogan} />
      </Head>
      <Layout />
      <Brand brand={brand} likesRecord={likesRecord} />
    </>
  );
};

export async function getStaticProps({ params }) {
  const client = await connectDatabase();

  const allUserDocuments = await getAllDocuments(client, "users");
  const users = JSON.parse(JSON.stringify(allUserDocuments));

  const document = await getDocument(
    client,
    "brand_updated",
    Number(params.id)
  );
  const brand = JSON.parse(JSON.stringify(document));

  client.close();
  return {
    props: {
      brand: brand,
      likesRecord: users[0].likes,
    },
    revalidate: 15000,
  };
}

export async function getStaticPaths() {
  const client = await connectDatabase();

  const allBrandDocuments = await getAllDocuments(client, "brand_updated");

  const brands = JSON.parse(JSON.stringify(allBrandDocuments));

  const brandPaths = brands.map((brand) => ({
    params: { id: brand.id.toString() },
  }));

  return {
    paths: brandPaths,
    fallback: false,
  };
}

export default IndividualBrandPage;
