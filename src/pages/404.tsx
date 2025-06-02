import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { ReactNode } from "react";

import styles from "./404.module.css";

export default function (): ReactNode {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout title="Home" description={siteConfig.tagline}>
			<header>
				<h1 className={clsx("hero hero--primary", styles.notFound)}>404 Not Found</h1>
			</header>
			<main>
				<div className={styles.buttons}>
					<Link className="button button--secondary button--lg" to="/">
						Go to Home.
					</Link>
				</div>
			</main>
		</Layout>
	);
}
