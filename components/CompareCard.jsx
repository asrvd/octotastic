/* eslint-disable @next/next/no-img-element */
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function CompareCard(props) {
    return(
        <div className="gap-2 flex flex-col lg:flex-col md:flex-col w-full h-full align-center justify-center items-center bg-gray-600 p-3">
            <div className="flex flex-col lg:flex lg:flex-col md:flex-col items-center justify-center h-2/6 w-full bg-gray-600 lg:justify-center md:justify-center">
                <div className="flex flex-row items-center justify-center h-2/3 w-full">
                    <img src={`https://unavatar.io/github/${props.data.user.login}/`} className="shadow-xl w-12 h-12 lg:w-20 lg:h-20 md:h-20 md:w-20 rounded-full " alt="image"/>
                    <div className="flex flex-col items-center justify-center ml-5 min-w-1/5">
                        <h2 className="w-full text-center text-xl md:text-2xl lg:text-2xl font-extrabold font-mono text-gray-200">{props.data.user.name || <Skeleton baseColor='rgb(107 114 128)' borderRadius={'0'}/>}</h2>
                        <h3 className="w-full text-center text-sm md:text-md lg:text-md font-bold font-mono cursor-pointer text-gray-300"><a href={`https://github.com/${encodeURIComponent(props.data.user.login)}`}>{`@${props.data.user.login}` || <Skeleton baseColor='rgb(107 114 128)' borderRadius={'0'}/>}</a></h3>
                    </div>
                </div>
                <div className="flex flex-col justify-center align-center h-1/3 w-2/3 items-center">
                    <div className="flex flex-row justify-between p-3 align-center items-center h-full w-full bg-gray-500 rounded-sm shadow-xl shrink">
                        <div className="h-full w-1/2 flex flex-col justify-center items-center align-center text-center border-r-2 border-black border-solid">
                        <h2 className="text-md md:text-xl lg:text-xl font-extrabold font-mono text-gray-200">{props.data.user.followers || <Skeleton baseColor='rgb(107 114 128)' borderRadius={'0'}/>}</h2>
                        <h3 className="text-sm font-mono text-gray-300">FOLLOWERS</h3>
                        </div>
                        <div className="h-full w-1/2 flex flex-col justify-center items-center align-center text-center">
                        <h2 className="text-md md:text-xl lg:text-xl font-extrabold font-mono text-gray-200">{props.data.user.following || <Skeleton baseColor='rgb(107 114 128)' borderRadius={'0'}/>}</h2>
                        <h3 className="text-sm font-mono text-gray-300">FOLLOWING</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex align-center h-4/6 w-full justify-center items-center pt-1 pb-1">
                <ul className="grid grid-cols-2 gap-2 lg:gap-4 lg:grid sm:grid sm:grid-rows-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 font-mono">
                <li className="p-2 lg:p-3 md:p-4 shadow-xl rounded-sm bg-gray-500">
                    <p className="text-md lg:text-xl md:text-xl font-extrabold text-gray-200">{props.data.user.public_repos || <Skeleton baseColor='rgb(107 114 128)' borderRadius={'0'}/>}</p>
                    <p className="mt-1 text-sm lg:text-md font-medium text-gray-300">📔 Repositories</p>
                </li>
                <li className="p-2 lg:p-3 md:p-4 shadow-xl rounded-sm bg-gray-500">
                    <p className="text-md lg:text-xl text-xl font-extrabold text-gray-200">{props.data.issues || <Skeleton baseColor='rgb(107 114 128)' borderRadius={'0'}/>}</p>
                    <p className="mt-1 text-sm lg:text-md font-medium text-gray-300">📄 Issues</p>
                </li>

                <li className="p-2 lg:p-3 md:p-4 shadow-xl rounded-sm bg-gray-500">
                    <p className="text-md lg:text-xl md:text-xl font-extrabold text-gray-200">{props.data.starsAndForks.stars || <Skeleton baseColor='rgb(107 114 128)' borderRadius={'0'}/>}</p>
                    <p className="mt-1 text-sm lg:text-md font-medium text-gray-300">⭐ Stars</p>
                </li>

                <li className="p-2 lg:p-3 md:p-4 shadow-xl rounded-sm bg-gray-500">
                    <p className="text-md lg:text-xl md:text-xl font-extrabold text-gray-200">{props.data.commits || <Skeleton baseColor='rgb(107 114 128)' borderRadius={'0'}/>}</p>
                    <p className="mt-1 text-sm lg:text-md font-medium text-gray-300">🚀 Commits</p>
                </li>

                <li className="p-2 lg:p-3 md:p-4 shadow-xl rounded-sm bg-gray-500">
                    <p className="text-md lg:text-xl md:text-xll font-extrabold text-gray-200">{props.data.prs || <Skeleton baseColor='rgb(107 114 128)' borderRadius={'0'}/>}</p>
                    <p className="mt-1 text-sm lg:text-md font-medium text-gray-300">💜 Pull Requests</p>
                </li>

                <li className="p-2 lg:p-3 md:p-4 shadow-xl rounded-sm bg-gray-500">
                    <p className="text-md lg:text-xl md:text-xl font-extrabold text-gray-200">{props.data.starsAndForks.forks || <Skeleton baseColor='rgb(107 114 128)' borderRadius={'0'}/>}</p>
                    <p className="mt-1 text-sm lg:text-md font-medium text-gray-300">🍀 Forks</p>
                </li>
                </ul>
            </div>
        </div>
    )
}