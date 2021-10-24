import { Link } from "react-router-dom";

const OtherPage = () => {
    return (
        <div>
            Kolejna strona!
            <br/>
            <br/>
            <Link to="/">Powrot do strony glownej</Link>
        </div>
    );
};

export default OtherPage;
