import Head from 'next/head';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>About Us | Kidearn</title>
                <meta name="description" content="Learn more about us" />
            </Head>

            <section className="page-header">
                <div className="page-header__bg"></div>
                <div className="container">
                    <h2 className="page-header__title">About us</h2>
                    <ul className="kidearn-breadcrumb list-unstyled">
                        <li><Link href="/">Home</Link></li>
                        <li><span>About</span></li>
                    </ul>
                </div>
            </section>
        </>
    );
}
