import { ReactNode } from "react";

import ABlank from "../ABlank/index";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

export default function(): ReactNode {
    return (
        <div className={`container ${styles.contents}`}>
            <div className="text--center padding-horiz--md">
                <Heading as="h1">本ドキュメントの運営</Heading>
                <p>本ドキュメントの運営は<ABlank href="https://thunlights.com" content="Team ThunLights"/>と有志によって運営されています。</p>
                <p>また本ドキュメントは<ABlank href="https://github.com/thunlights/oauth-document" content="Github"/>にて公開されており、誰でも修正可能です。</p>
                <p>本ドキュメントについて問い合わせをしたい場合は<ABlank href="https://twitter.com/thunlights" content="公式Twitter"/>にご連絡ください</p>
            </div>
        </div>
    )
}
