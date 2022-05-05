export default function Error(props) {
    return (
        <div className="error">
            {props.error.status === 404 &&
                <div className="error-404">
                    <h1>Error 404</h1>
                    <h2>User not found!</h2>
                </div>
            }
            {props.error.status === 403 &&
                <div className="error-403">
                    <h1>Error 403</h1>
                    <h2>You have hit the GitHub Rate Limit, Please try again later.</h2>
                </div>
            }
        </div>
    )
}