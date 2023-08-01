import { proxy } from "valtio";

const fundsProxy = proxy({ funds: [] });

export default fundsProxy;
