import { author } from "./index";
import styles from "./Footer.module.scss";
import logoPreact from "../../../assets/preact.svg";

export const Footer = () => {
    return (
        <footer id={styles.footer}>
            <span id={styles.preact}>
                <strong> Builded with: </strong>
                <span> Preact </span>
                <img id={styles.logoPreact} src={logoPreact} alt="Logo Preact" />
            </span>

            <a href={author.link} target="__blank" id={styles.author}>
                <img id={styles.logo} src={author.logo} alt="Logo of author" />
                <span> {author.name} </span>
            </a>
        </footer>
    );
}
