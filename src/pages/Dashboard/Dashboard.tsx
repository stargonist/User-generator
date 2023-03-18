import { useEffect, useState } from "preact/hooks";
import styles from "./Dashboard.module.scss";
import axios from "axios";
import { Content, Loader } from "./components";


const Dashboard = (state: any) => {
    const [user, setUser] = useState<any>();
    const [loader, setLoader] = useState<boolean>();
    const [userCounter, setUserCounter] = state;
    const API = "https://randomuser.me/api/";

    useEffect(() => {
        (async () => {
            setLoader(true);
            const { data } = await axios.get(API);
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
