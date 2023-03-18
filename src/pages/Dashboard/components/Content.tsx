import { motion } from "framer-motion";
import { animationConfig } from "./";

export const Content = ({props}: {props:any}) => {
    const [user, setUserCounter, styles] = props;

    return (
        <motion.main 
            initial={animationConfig.init}
            animate={animationConfig.variants}
            transition={animationConfig.transition}
            id={styles.dashboard}
        >
            <motion.img
                initial={animationConfig.init}
                animate={animationConfig.variants}
                transition={animationConfig.transitionImg}
                id={styles.photo}
                src={user.picture.large}
                alt="Photo from random user api"
            />
            <div id={styles.information}>
                <span>
                    <strong> Name: </strong>
                    {`${user.name.first} ${user.name.last}`}
                </span>
                <span>
                    <strong> Username: </strong>
                    {user.login.username}
                </span>
                <span>
                    <strong> Gender: </strong>
                    {user.gender}
                </span>
                <span>
                    <strong> Email: </strong>
                    {user.email}
                </span>
                <span>
                    <strong> State: </strong>
                    {user.location.state}
                </span>
                <span>
                    <strong> Street: </strong> 
                    <span>
                        {user.location.street.name}
                    </span>
                    <span>
                        #{user.location.street.number}
                    </span>
                </span>
            </div>
        </motion.main>
    );
}