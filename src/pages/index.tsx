import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import PageFixed from "@site/src/components/PageFixed/index";
import Description from "@site/src/components/Description/index";

import styles from "./index.module.css";

import type { ReactNode } from "react";

export default function(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title="Home"
            description={siteConfig.tagline}>
            <header className={clsx("hero hero--primary", styles.heroBanner)}>
                <div className="container">
                    <Heading as="h1" className="hero__title">{siteConfig.title}</Heading>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className="button button--secondary button--lg"
                            to="/docs/intro">
                            Go to documents.
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                <PageFixed />
                <Description />
            </main>
        </Layout>
    );
}
