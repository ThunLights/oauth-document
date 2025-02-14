import { ReactNode } from "react";

import ABlank from "../ABlank/index";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

export default function(): ReactNode {
    return (
        <div className={`container ${styles.contents}`}>
            <div className="text--center padding-horiz--md">
                <Heading as="h1">Support for this document</Heading>
                <p>This Document is run by <ABlank href="https://thunlights.com" content="Team ThunLights"/> adn volunteers.</p>
                <p>This document is available on <ABlank href="https://github.com/thunlights/oauth-document" content="Github"/> and can be modified by anyone.</p>
                <p>If you would like to inquire about this document, please use the <ABlank href="https://twitter.com/thunlights" content="Official Twitter"/>.</p>
            </div>
        </div>
    )
}
