// index.tsx - English Landing Page with i18n Support for Infrastructure Model Platform
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export default function HomePageEn() {
  const { t } = useTranslation("common");
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-white text-gray-800">
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
      </Head>
      <header className="px-6 py-4 bg-green-700 text-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
            <h1 className="text-2xl font-bold">Infra Model</h1>
          </div>
          <nav className="space-x-4">
            <Link href="/dashboard" className="hover:underline">Dashboard</Link>
            <Link href="/risk" className="hover:underline">Risk Management</Link>
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">{t('subtitle')}</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">{t('description')}</p>
        <div className="flex justify-center gap-6 mb-12">
          <Link href="/dashboard" className="bg-green-600 text-white px-6 py-3 rounded-full font-medium shadow hover:bg-green-700">Get Started</Link>
          <Link href="/risk" className="border border-green-600 text-green-700 px-6 py-3 rounded-full font-medium hover:bg-green-50">Explore Risk Management</Link>
        </div>
        <section className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white border rounded-xl shadow">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Sensitivity Analysis</h3>
            <p className="text-gray-600">Evaluate the impact of changes in prices, sellable area, and financing on project viability.</p>
          </div>
          <div className="p-6 bg-white border rounded-xl shadow">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Dynamic Dashboard</h3>
            <p className="text-gray-600">Real-time view of financial outcomes and returns based on user inputs.</p>
          </div>
          <div className="p-6 bg-white border rounded-xl shadow">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Risk Management</h3>
            <p className="text-gray-600">Comprehensive risk classification and evaluation with smart mitigation plans.</p>
          </div>
        </section>
      </main>
      <footer className="text-center text-sm text-gray-500 py-6 border-t">
        <p>&copy; {new Date().getFullYear()} All rights reserved. S.ALKINDI</p>
      </footer>
    </div>
  );
}
