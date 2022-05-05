import {useRouter } from "next/router";
import { useState, useEffect } from "react";
import Modal from "../../components/Modal";
import CompareCard from "../../components/CompareCard";
import { getIssues } from "../../lib/GetIssues";
import { getPRS } from "../../lib/GetPRS";
import { getStarsAndForks } from "../../lib/GetStarsAndForks";
import { getCommits } from "../../lib/GetCommits";
import { getUser } from "../../lib/GetUser";

export default function Users() {
    const router = useRouter()
    const [users, setUsers] = useState({})
    const [chartData, setChartData] = useState({})
    const [usersData, setUsersData] = useState({
        first: {
            user: {
                login: "",
                avatar_url: "",
                followers: 0,
                following: 0,
                public_repos: 0,
                name: "",
            },
            issues: 0,
            prs: 0,
            starsAndForks: {
                stars: 0,
                forks: 0,
            }
        },
        second: {
            user: {
                login: "",
                avatar_url: "",
                followers: 0,
                following: 0,
                public_repos: 0,
                name: "",
            },
            issues: 0,
            prs: 0,
            starsAndForks: {
                stars: 0,
                forks: 0,
            }
        },
    })
    useEffect(() => {
        if(router.query.firstuser && router.query.seconduser) {
            setUsers({
                firstuser: router.query.firstuser,
                seconduser: router.query.seconduser
            })
        }
    },[router.query])
    useEffect(() => {
        if(users.firstuser && users.seconduser) {
            Promise.all(
                [
                    getUser(users.firstuser),
                    getUser(users.seconduser),
                    getCommits(users.firstuser),
                    getCommits(users.seconduser),
                    getPRS(users.firstuser),
                    getPRS(users.seconduser),
                    getStarsAndForks(users.firstuser),
                    getStarsAndForks(users.seconduser),
                    getIssues(users.firstuser),
                    getIssues(users.seconduser)
                ]
            ).then(
                ([
                    firstuser,
                    seconduser,
                    firstuserCommits,
                    seconduserCommits,
                    firstuserPRS,
                    seconduserPRS,
                    firstuserStarsAndForks,
                    seconduserStarsAndForks,
                    firstuserIssues,
                    seconduserIssues
                ]) => {
                    setUsersData({
                        first: {
                            user: firstuser,
                            commits: firstuserCommits,
                            prs: firstuserPRS,
                            starsAndForks: firstuserStarsAndForks,
                            issues: firstuserIssues
                        },
                        second: {
                            user: seconduser,
                            commits: seconduserCommits,
                            prs: seconduserPRS,
                            starsAndForks: seconduserStarsAndForks,
                            issues: seconduserIssues
                        },
                        // chart: {
                        //     chartData: [
                        //         {
                        //             title: "Commits",
                        //             a: firstuserCommits,
                        //             b: seconduserCommits,
                        //             total: 500
                        //         },
                        //         {
                        //             title: "Pull Requests",
                        //             a: firstuserPRS,
                        //             b: seconduserPRS,
                        //             total: 500
                        //         },
                        //         {
                        //             title: "Issues",
                        //             a: firstuserIssues,
                        //             b: seconduserIssues,
                        //             total: 500
                        //         },
                        //         {
                        //             title: "Stars",
                        //             a: firstuserStarsAndForks.stars,
                        //             b: seconduserStarsAndForks.stars,
                        //             total: 500
                        //         },
                        //         {
                        //             title: "Forks",
                        //             a: firstuserStarsAndForks.forks,
                        //             b: seconduserStarsAndForks.forks,
                        //             total: 500
                        //         },
                        //         {
                        //             title: "Repositories",
                        //             a: firstuser.public_repos,
                        //             b: seconduser.public_repos,
                        //             total: 500
                        //         }
                        //     ],
                        //     users: {
                        //         first: firstuser.name,
                        //         second: seconduser.name
                        //     }
                        // }
                    })
                }
            ).catch(
                err => {
                    return;   
                }
            )
        }
    }, [users])
    return (
        // TODO: Implement Graph in Modal
        <div className="bg-gray-700 flex flex-col justify-center align-center items-center w-screen h-screen p-6">
            <div className="rounded bg-gray-700 flex flex-col justify-center align-center items-center h-full w-full lg:h-5/6 lg:w-3/5 p-0 pl-0 pr-0 gap-3 md:h-full xl:p-4 xl:pl-6 xl:pr-6 md:p-4 md:pl-6 md:pr-6">
                <div className="h-auto flex flex-col align-center items-center justify-center">
                    <h2 className="text-md lg:text-xl md:text-xl text-center font-extrabold font-mono text-gray-200">⚡Stats Comparision for {users.firstuser} and {users.seconduser}</h2>
                </div>
                <div className="flex flex-col gap-4 lg:flex md:flex lg:flex-row md:flex-row justify-center items-center h-5/6 md:h-3/4 w-full lg:h-full">
                    <div className="shadow-xl rounded flex flex-col justify-center align-center items-center w-full h-1/2 lg:w-1/2 lg:h-full md:h-full md:w-1/2">
                        <CompareCard data={usersData.first}/>
                    </div>
                    <div className="shadow-xl rounded flex flex-col justify-center align-center items-center w-full h-1/2 lg:w-1/2 lg:h-full md:h-full md:w-1/2">
                        <CompareCard data={usersData.second}/>
                    </div>
                </div>
                {/* <div className="h-auto">
                    <Modal data={usersData.chart}/>
                </div> */}
                <div className="flex flex-row justify-start gap-3 align-center items-center h-auto w-full">
                    {router.pathname !== "/" && (
                        <button onClick={() => router.back()} className="duration-700 w-1/7 max-w-max px-5 py-2 text-sm text-gray-800 font-mono bg-white border border-gray-200 rounded shadow hover:bg-gray-400  bg-gray-300">🚪 Go Back</button>
                    )}
                </div>
            </div>
        </div>
    )
}