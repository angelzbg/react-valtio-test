import { proxy } from "valtio";

const routerProxy = proxy({ page: "funds", pages: { funds: "funds", createFund: "createFund" } });

export default routerProxy;
