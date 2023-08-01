import { proxy, useSnapshot } from "valtio";
import { createFund } from "./api/api";

const inputs = proxy({ name: "", volume: "" });

const CreateFund = () => {
    const { name, volume } = useSnapshot(inputs, { sync: true });

    // this is dogshit - you have to manually reset every single fucking proxy on unmount

    return (
        <div>
            <input type="text" value={name} onChange={({ target: { value } }) => (inputs.name = value)} />
            <input type="number" value={volume} onChange={({ target: { value } }) => (inputs.volume = value)} />
            <button onClick={() => createFund(name, volume)}>Create</button>
        </div>
    );
};

export default CreateFund;
