import Loading from "../components/Loading";

const shutdown = (setShuttingDown) => {
    setTimeout(() => {
        window.open("about:blank", "_self");
        window.close();
    }, 2000);
    setShuttingDown(true);
}

export default shutdown;