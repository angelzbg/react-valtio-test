import "./App.css";
import useSnapshots from "./valtio/store";
import routerProxy from "./valtio/mockRouter";
import Funds from "./Funds";
import CreateFund from "./CreateFund";

const App = () => {
    const { routerSnap } = useSnapshots();
    return (
        <div className="App">
            <div>
                {Object.values(routerSnap.pages).map((page) => (
                    <button key={page} onClick={() => (routerProxy.page = page)}>
                        {page}
                    </button>
                ))}
            </div>
            <div>Current page: {routerSnap.page}</div>
            {routerSnap.page === routerProxy.pages.funds && <Funds />}
            {routerSnap.page === routerProxy.pages.createFund && <CreateFund />}
        </div>
    );
};

export default App;
