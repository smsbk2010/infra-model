
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function HomePage() {
  const { t } = useTranslation("common");

  return (
    <div>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
      </Head>
      <main>
        <h1>{t("subtitle")}</h1>
        <p>{t("description")}</p>
      </main>
    </div>
  );
}
