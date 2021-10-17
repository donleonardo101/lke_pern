import { useCallback, useState } from "react";
import axios from "axios";
import './MainComponent.css';

const MainComponent = () => {
    const [values, setValues] = useState([]);

    const getAllNumbers = useCallback(async () => {
        const values = await axios.get('/api/values/all');
        setValues(values);
    });

    return (
        <div>
            <button onClick={getAllNumbers}>Get all numbers</button><br/>
            <span className="title">Values</span>
            <div className="values">
                {values.map((value) => <div className="values">{value}</div>)}
            </div>
        </div>
    );
};

export default MainComponent;
