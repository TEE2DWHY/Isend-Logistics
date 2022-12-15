import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <>
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <Link to='/'>Home</Link>
            <Link to='/privacy-policy'>Blog</Link>
        </>
    )
}

export default NotFound