import { Link } from "react-router-dom";

function Home () {
    return (
        <>
            <h1>Home</h1>
            <p>This is the Home page.</p>
            <Link to={"/"}>Go to Home </Link>
        </>
    )
}

export default Home;