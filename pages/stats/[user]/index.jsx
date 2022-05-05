/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router"
import StatCard from "../../../components/StatCard";
import {useState, useEffect} from "react";
import { getStarsAndForks } from "../../../lib/GetStarsAndForks";
import { getIssues } from "../../../lib/GetIssues";
import { getCommits } from "../../../lib/GetCommits";
import { getPRS } from "../../../lib/GetPRS";
import { getUser } from "../../../lib/GetUser";
import Icons from "../../../components/Icons";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Index2(props) {
    const router = useRouter()
    const { user } = router.query
    const [stats, setStats] = useState({
        saf: {
            stars: 0,
            forks: 0
        },
        issues: 0,
        commits: 0,
        prs: 0,
        user: {
            name: "",
            login: "",
            followers: 0,
            following: 0,
            public_repos: 0,
            twitter_username: "",
            blog: "",
            location: "",
        }
    })
    console.log(user)
    useEffect(() => {
        if (!user) {
            return;
        }
        console.log("user", user)
        Promise.all([
            getStarsAndForks(user),
            getIssues(user),
            getCommits(user),
            getPRS(user),
            getUser(user)
        ]).then(
            ([stars, issues, commits, prs, user]) => {
                setStats({
                    saf: stars,
                    issues: issues,
                    commits: commits,
                    prs: prs,
                    user: user
                })
            }
        ).catch(
            err => {
                console.log(err)    
            }
        )
    }, [user])
    return (
        <div className="flex flex-col w-screen h-screen p-6 align-center justify-center items-center bg-gray-600">
            <div className="lg:flex lg:flex-row sm:flex sm:flex-col items-center align-center justify-center h-5/6 lg:w-4/6 md:w-full sm:w-full w-full md:h-full sm:h-5/6 shadow-2xl rounded-sm">
                <div className="flex flex-row lg:flex lg:flex-col sm:flex sm:flex-row items-center justify-center h-1/6 lg:w-1/5 sm:w-full md:w-full lg:h-full sm:h-1/6 md:h-1/5 bg-gray-500 pt-3 pl-3 pr-3 lg:justify-start md:justify-center">
                    <img src={`https://unavatar.io/github/${stats.user.login}/`} className="shadow-xl w-20 h-20 lg:h-40 lg:w-40 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-full mb-2" alt="image"/>
                    <div className="flex flex-col items-center justify-center ml-5 lg:ml-0 md:ml-0 min-w-1/5">
                    <h2 className="text-center text-2xl md:text-3xl lg:text-3xl sm:text-2xl font-extrabold font-mono text-gray-200">{stats.user.name || <Skeleton baseColor='rgb(107 114 128)' borderRadius={'0'}/>}</h2>
                    <h3 className="text-center text-md md:text-xl lg:text-xl sm:text-md font-bold font-mono cursor-pointer text-gray-300"><a href={`https://github.com/${encodeURIComponent(stats.user.login)}`}>{`@${stats.user.login}` || <Skeleton baseColor='rgb(107 114 128)' borderRadius={'0'}/>}</a></h3>
                    </div>
                    <div className="h-8 lg:h-16 md:h-16 w-full flex flex-col justify-center items-center align-center color-gray-200">
                        <Icons twitter={`https://twitter.com/${stats.user.twitter_username}`} web={stats.user.blog} location={stats.user.location}/>
                    </div>
                </div>
                <div className="flex flex-col items-center justify center h-5/6 lg:w-4/5 sm:w-full md:w-full lg:h-full sm:h-5/6 md:h-4/5 bg-gray-500 p-3">
                    <div className="flex flex-col justify-center align-enter items-center h-1/6 w-full pt-1 pb-1">
                        <div className="w-2/4 h-1/4 text-center mb-2">
                            <h2 className="text-xl font-extrabold font-mono text-gray-200">⚡Stats for {stats.user.name || <Skeleton baseColor='rgb(107 114 128)' borderRadius={'0'}/>}</h2>
                        </div>
                        <div className="lg:w-2/4 h-3/4 w-full md:w-2/4">
                            <StatCard followers={stats.user.followers} following={stats.user.following} />
                        </div>
                    </div>
                    <div className="flex align-center h-5/6 w-full justify-center items-center pt-1 pb-1">
                        <ul className="grid grid-cols-2 gap-5 lg:grid sm:grid sm:grid-rows-3 sm:grid-cols-2 md:grid-cols-3 sm:gap-5 lg:gap-5 md:gap-5 lg:grid-cols-2 font-mono">
                        <li className="lg:p-8 sm:p-4 md:p-8 p-4 shadow-xl rounded-xl bg-gray-400">
                            <p className="lg:text-3xl sm:text-xl font-extrabold ">{stats.user.public_repos || <Skeleton baseColor='rgb(107 114 128)' borderRadius={'0'}/>}</p>
                            <p className="mt-1 lg:text-xl sm:text-md font-medium">📔 Repositories</p>
                        </li>
                        <li className="lg:p-8 sm:p-4 md:p-8 p-4 shadow-xl rounded-xl bg-gray-400">
                            <p className="lg:text-3xl sm:text-xl font-extrabold">{stats.issues || <Skeleton baseColor='rgb(107 114 128)' borderRadius={'0'}/>}</p>
                            <p className="mt-1 lg:text-xl sm:text-md font-medium">📄 Issues</p>
                        </li>

                        <li className="lg:p-8 sm:p-4 md:p-8 p-4 shadow-xl rounded-xl bg-gray-400">
                            <p className="lg:text-3xl sm:text-xl font-extrabold">{stats.saf.stars || <Skeleton baseColor='rgb(107 114 128)' borderRadius={'0'}/>}</p>
                            <p className="mt-1 lg:text-xl sm:text-md font-medium">⭐ Stars</p>
                        </li>

                        <li className="lg:p-8 sm:p-4 md:p-8 p-4 shadow-xl rounded-xl bg-gray-400">
                            <p className="lg:text-3xl sm:text-xl font-extrabold">{stats.commits || <Skeleton baseColor='rgb(107 114 128)' borderRadius={'0'}/>}</p>
                            <p className="mt-1 lg:text-xl sm:text-md font-medium">🚀 Commits</p>
                        </li>

                        <li className="lg:p-8 sm:p-4 md:p-8 p-4 shadow-xl rounded-xl bg-gray-400">
                            <p className="lg:text-3xl sm:text-xl font-extrabold">{stats.prs || <Skeleton baseColor='rgb(107 114 128)' borderRadius={'0'}/>}</p>
                            <p className="mt-1 lg:text-xl sm:text-md font-medium">💜 Pull Requests</p>
                        </li>

                        <li className="lg:p-8 sm:p-4 md:p-8 p-4 shadow-xl rounded-xl bg-gray-400">
                            <p className="lg:text-3xl sm:text-xl font-extrabold">{stats.saf.forks || <Skeleton baseColor='rgb(107 114 128)' borderRadius={'0'}/>}</p>
                            <p className="mt-1 lg:text-xl sm:text-md font-medium">🍀 Forks</p>
                        </li>
                        </ul>
                    </div>
                    <div className="flex flex-row justify-center gap-3 align-center items-center h-1/6 w-full">
                        <a className="duration-700 w-1/7 max-w-max px-5 py-2 text-sm text-gray-800 font-mono bg-white border border-gray-200 rounded shadow hover:bg-gray-400  bg-gray-300" href={`/stats/${user}/advanced`}>🚀 View Advanced Stats</a>
                        {router.pathname !== "/" && (
                            <button onClick={() => router.back()} className="duration-700 w-1/7 max-w-max px-5 py-2 text-sm text-gray-800 font-mono bg-white border border-gray-200 rounded shadow hover:bg-gray-400  bg-gray-300">🚪 Go Back</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}