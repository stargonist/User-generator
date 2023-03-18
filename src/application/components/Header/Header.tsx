import { StateUpdater } from "preact/hooks";
import logo from "../../../assets/user.png";
import styles from "./Header.module.scss";

const handleClick = () => {
    return location.href = "/"
}

export const Header = ({state}: {state:any}) => {
    const setUserCounter: StateUpdater<number> = state[1];

    return (
        <header id={styles.header}>
            <div onClick={handleClick} id={styles.logo}>
                <img src={logo} alt="Logo user generator" />
                <span> User generator </span>
            </div>
            <button
            id={styles.btnChangeUser}
            onClick={() => setUserCounter((prev: number) => prev + 1)}> Get user </button>
        </header>
    );
}