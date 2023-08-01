import { proxy, useSnapshot } from "valtio";
import routerProxy from "./mockRouter";
import fundsProxy from "./funds";

const snapshots = proxy({
    routerSnap: routerProxy,
    fundsSnap: fundsProxy,
});

const useSnapshots = () => useSnapshot(snapshots);

export default useSnapshots;
