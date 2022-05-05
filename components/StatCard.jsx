import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function StatCard(props) {
    return (
        <div className="flex flex-row justify-between p-3 align-center items-center h-full w-full bg-gray-400 rounded-xl shadow-xl shrink">
            <div className="h-full w-1/2 flex flex-col justify-center items-center align-center text-center border-r-2 border-black border-solid">
            <h2 className="text-xl font-extrabold font-mono">{props.followers || <Skeleton baseColor='rgb(107 114 128)' borderRadius={'0'}/>}</h2>
            <h3 className="text-md font-mono">Followers</h3>
            </div>
            <div className="h-full w-1/2 flex flex-col justify-center items-center align-center text-center">
            <h2 className="text-xl font-extrabold font-mono">{props.following || <Skeleton baseColor='rgb(107 114 128)' borderRadius={'0'}/>}</h2>
            <h3 className="text-md font-mono">Following</h3>
            </div>
        </div>
    )
}