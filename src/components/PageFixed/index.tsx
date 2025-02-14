import { ReactNode } from "react";

import Heading from "@theme/Heading";
import styles from "./styles.module.css";

export default function(): ReactNode {
    return (
        <div className={`container ${styles.contents}`}>
            <div className="text--center padding-horiz--md">
                <Heading as="h1">ドキュメントの修正について</Heading>
                <p>ドキュメントの修正は<a href="https://github.com/thunlights/oauth-document" target="_blank" rel="noopener noreferrer">こちら</a>にPull Requestを出すことで誰でも行う事が可能です。</p>
                <p>誤字脱字の指摘や多言語対応など様々な事に活用していただけるとありがたいです。</p>
                <p>修正箇所について不安が残る場合は<a href="https://github.com/ThunLights/oauth-document/issues" target="_blank" rel="noopener noreferrer">issue</a>を活用していただけると幸いです。</p>
            </div>
        </div>
    )
}
