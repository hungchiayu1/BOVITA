// Main Page when user first logs in
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { SiteFilterProvider } from "../../contexts/filter-context";
import { connectDatabase, getAllDocuments } from "../../lib/db-utils";

import classes from "./mainPage.module.css";

// Consists of 3 components
import Layout from "../../components/layout/Layout";
import WelcomeSign from "../../components/layout/WelcomeSign";
import BrandList from "../../components/brands/BrandList";

function BrandPage({ brands, likesRecord }) {
  return (
    <SiteFilterProvider>
      <Head>
        <title>Bovita</title>
        <meta name="description" content="List of brands" />
      </Head>
      <div className={classes.main}>
        <Layout />
        <WelcomeSign
          header="Welcome, Melissa Yung "
          sub="Brands tailored just for you."
        />
        <BrandList brands={brands} likesRecord={likesRecord} />
      </div>
    </SiteFilterProvider>
  );
}

export async function getStaticProps() {
  const client = await connectDatabase();

  const allBrandDocuments = await getAllDocuments(client, "brand_updated");
  const allUserDocuments = await getAllDocuments(client, "users");

  const brands = JSON.parse(JSON.stringify(allBrandDocuments));
  const users = JSON.parse(JSON.stringify(allUserDocuments));
  client.close();
  return {
    props: {
      brands: brands,
      likesRecord: users[0].likes,
    },
    revalidate: 15000,
  };
}

export default BrandPage;
