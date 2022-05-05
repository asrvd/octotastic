// Write a function to get total star count of a github user 

export function getStarsAndForks(user) {
    return fetch(`https://github-star-counter.herokuapp.com/user/${user}`).then(
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

