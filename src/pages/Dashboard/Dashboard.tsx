import { StateUpdater, useEffect, useState } from "preact/hooks";
import styles from "./Dashboard.module.scss";
import axios from "axios";
import { Content, Loader } from "./components";
import { API_URL } from "../../application/api";


const Dashboard = (state: any) => {
    const [user, setUser] = useState<any>();
    const [loader, setLoader] = useState<boolean>();
    const [userCounter, setUserCounter] = state;

    useEffect(() => {
        (async () => {
            setLoader(true);
            const { data } = await axios.get(API_URL);
            const user = data["results"][0];
            if (user) {
                setUser(user);
                setLoader(false);
            };
        })();
    }, [userCounter])

    const RenderContent = () => {
        return user && !loader
            ? <Content props={[user, setUserCounter, styles]} />
            : <Loader />
    }

    return <RenderContent />;
}

export default Dashboard;
