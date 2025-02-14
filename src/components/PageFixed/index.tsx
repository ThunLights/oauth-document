import { ReactNode } from "react";

import ABlank from "../ABlank/index";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

export default function(): ReactNode {
    return (
        <div className={`container ${styles.contents}`}>
            <div className="text--center padding-horiz--md">
                <Heading as="h1">Modifications to this document</Heading>
                <p>Anyone can modify the documentation by submitting a Pull Request <ABlank href="https://github.com/thunlights/oauth-document" content="here" />.</p>
                <p>We would be grateful if you could use it for various things, such as pointing out typographical errors and multilingual support.</p>
                <p>If you have any remaining concerns about the revisions, we would appreciate it if you could use the <ABlank href="https://github.com/ThunLights/oauth-document/issues" content="issue"/>.</p>
            </div>
        </div>
    )
}
