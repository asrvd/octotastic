/* eslint-disable react-hooks/exhaustive-deps */
import {useRouter} from 'next/router'
import { useState, useEffect } from 'react';
import GhPolyglot from 'gh-polyglot';
import LangCharts from '../../../components/LangCharts';
import { getPRS } from '../../../lib/GetPrs';
import { getIssues } from '../../../lib/GetIssues';
import { getCommits } from '../../../lib/GetCommits';

export default function Advanced() {
    const router = useRouter()
    console.log(router.query)
    const {user} = router.query
    console.log(user)
    const [LangData, setLangData] = useState([]);
    const [RepoData, setRepoData] = useState([]);
    const [ContData, setContData] = useState([]);
    const [ContChartData, setContChartData] = useState({});
    const [Error, setError] = useState({error: false, status: 200})
    const fills = ['dots', 'lines']
    const getLangData = (username) => {
        const me = new GhPolyglot(username);
        //getStarsAndForks("asheeeshh")
        me.userStats(function (err, stats) {
            if (err) {
                console.log(err);
                setError({error: true, status: 400})
                return;
            }
            const data = stats.map(lang => {
                return {
                    name: lang.label,
                    value: lang.value,
                }
                
            })
            setLangData(data)
        }
        )
    }
    const getRepoData = (username) => {
        fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
        .then(response => {
            if (response.status === 404) {
            return setError({ error: true, status: 404 });
            }
            if (response.status === 403) {
            return setError({ error: true, status: 403 });
            }
            return response.json();
        })
        .then(json => {
            const repos = json.sort(
                (a, b) => {
                    return b.stargazers_count - a.stargazers_count;
                }
            ).slice(0,5).map(
                repo => {
                    return {
                        name: repo.name,
                        value: repo.stargazers_count
                    }
                }
            )
            setRepoData(repos)
        })
        .catch(error => {
            setError({ active: true, status: 200 });
            console.error('Error:', error);
        });
    }
    const getContData = (username) => {
        Promise.all(
            [getPRS(username), getIssues(username), getCommits(username)]
        ).then(data => {
            const prs = data[0];
            const issues = data[1];
            const commits = data[2];
            setContChartData(
                [
                    {
                        name: 'Issues',
                        value: issues,
                    },
                    {
                        name: 'Pull Requests',
                        value: prs,
                    }
                ],
            )
        })
        
    }
    useEffect(() => {
        if(!user) {
            return;
        }
        getLangData(user)
        getRepoData(user)
        getContData(user)
        //console.log(ContData)
    }, [user])
    //console.log(user)
    return(
        <div className="h-screen w-screen flex flex-col justify-center align-center items-center p-6 bg-gray-700">
            {router.pathname !== "/" && (
                <button onClick={() => router.back()} className="duration-700 w-1/7 max-w-max px-5 py-2 text-sm text-gray-800 font-mono bg-white border border-gray-200 rounded shadow hover:bg-gray-400  bg-gray-300">🚪 Go Back</button>
            )}
            <LangCharts LangData={LangData} RepoData={RepoData} ContData={ContChartData}/>
        </div>

    )
}