export function getUser(username) {
    return fetch(`https://api.github.com/users/${username}`, {
        headers: {
            'Authorization': `token ${process.env.NEXT_PUBLIC_PAT}`
        }
    }).then(
        response => {
            if(response.status === 200) {
                return response.json()
            } else if (response.status === 404) {
                alert('User not found')
                return response.json()
            } else if(response.status === 403) {
                alert('You have hit the rate limit for GitHub API, try again later.')
                return response.json()
            }
        }
    ).then(
        data => {
            return data
        }
    ).catch(
        error => {
            return error
        }
    )
}