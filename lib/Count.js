export function Count() {
    return fetch('https://api.countapi.xyz/hit/octotastic.now.sh/visits').then(
        res => res.json()
    ).then(
        data => {
            return data.value
        }
    )
}