import useSnapshots from "./valtio/store";

const Funds = () => {
    const { fundsSnap } = useSnapshots();

    return (
        <div>
            <h4>Funds</h4>
            {fundsSnap.funds.map((fund) => (
                <div key={fund.id}>
                    <div>Name: {fund.name}</div>
                    <div>Volume: {fund.volume}</div>
                </div>
            ))}
        </div>
    );
};

export default Funds;
