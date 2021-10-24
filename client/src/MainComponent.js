import { useCallback, useState, useEffect } from "react";
import axios from "axios";
import "./MainComponent.css";

const MainComponent = () => {
    const [values, setValues] = useState([]);
    const [value, setValue] = useState("");

    const getAllNumbers = useCallback(async () => {
        // we will use nginx to redirect it to the proper URL
        const data = await axios.get("/api/values/all");
        setValues(data.data.rows.map(row => row.number));
    }, []);

    const saveNumber = useCallback(
        async event => {
            event.preventDefault();

            await axios.post("/api/values", {
                value
            });

            setValue("");
            getAllNumbers();
        },
        [value, getAllNumbers]
    );

    useEffect(() => {
        getAllNumbers();
    }, []);

    return (
        <div>
            <button onClick={getAllNumbers}>Wyswietl liczby</button>
            <br />
            <span className="title">Wartosci</span>
            <div className="values">
                {values.map(value => (
                    <div className="values">{value}</div>
                ))}
            </div>
            <form className="form" onSubmit={saveNumber}>
                <label>Wprowadz wartosc: </label>
                <input
                    value={value}
                    onChange={event => {
                        setValue(event.target.value);
                    }}
                />
                <button>Zapisz</button>
            </form>
        </div>
    );
};

export default MainComponent;
