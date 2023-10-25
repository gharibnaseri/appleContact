import { useRouteError } from "react-router-dom";
export default function ErrorPage() {

    const error = useRouteError();
    

    return (

        <div id="error-page">
            <h1>Ooops!</h1>
            <p>sorry , an unexpected error has occurded</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>

        </div>
    )
}