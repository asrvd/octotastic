import GhPolyglot from "gh-polyglot";

export function getLangData(user) {
    const me = new GhPolyglot(user);
    me.userStats(function (err, stats) {
        if (err) {
            console.log(err);
            return;
        }
        const data = stats.map(lang => {
            return {
                id: lang.label,
                value: lang.label,
                color: lang.color,
                value: lang.color
            }
        })
        console.log(data)
        return data;
    })
    
}

