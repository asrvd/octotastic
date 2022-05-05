/* eslint-disable @next/next/no-img-element */
import {useState, useEffect} from "react";
import {useRouter} from "next/router";

export default function Index() {
    const [firstUser, setFirstUser] = useState("");
    const [secondUser, setSecondUser] = useState("");
    function handleFirstUserChange(e) {
        setFirstUser(e.target.value);
    }
    function handleSecondUserChange(e) {
        setSecondUser(e.target.value);
    }
    function handleClick() {
        router.push(`/compare/users?firstuser=${firstUser}&seconduser=${secondUser}`);
    }
    const router = useRouter();
    return (
        <div className='flex flex-col align-center items-center justify-center h-screen w-screen px-6 bg-gray-700 font-mono gap-3'>
            <div className='flex flex-col items-center justify-center h-5/6 w-screen px-6 bg-gray-700 font-mono'>
                <h2 className='text-2xl lg:text-3xl md:text-3xl font-mono font-extrabold mb-3 text-gray-200'>✨Octotastic/Compare</h2>
                <div className='lg:w-2/5 md:w-2/4 w-full gap-3 flex flex-col'>
                    <div className='h-auto'>
                    <label className="relative block p-3 border-2 border-gray-300 rounded-lg" htmlFor="name">
                        <span className="text-base font-medium text-gray-300" htmlFor="name">
                        First User
                        </span>

                        <input className="w-full p-0 text-sm border-none focus:ring-0 bg-transparent text-gray-200" id="name" type="text" placeholder="Enter GitHub Username" onChange={handleFirstUserChange}/>
                    </label>
                    </div>
                    <div className='h-auto'>
                    <label className="relative block p-3 border-2 border-gray-300 rounded-lg" htmlFor="name">
                        <span className="text-base font-medium text-gray-300" htmlFor="name">
                        Second User
                        </span>

                        <input className="w-full p-0 text-sm border-none focus:ring-0 bg-transparent text-gray-200" id="name" type="text" placeholder="Enter GitHub Username" onChange={handleSecondUserChange}/>
                    </label>
                    </div>
                    <div className="flex flex-row justify-start gap-3 align-center items-center">
                        <button className="duration-700 px-5 py-2 text-sm text-gray-800 bg-white border border-gray-300 rounded bg-gray-300 shadow hover:bg-gray-400" onClick={handleClick}>⚡ Compare Stats</button>
                        {router.pathname !== "/" && (
                            <button onClick={() => router.back()} className="duration-700 w-1/7 max-w-max px-5 py-2 text-sm text-gray-800 font-mono bg-white border border-gray-200 rounded shadow hover:bg-gray-400  bg-gray-300">🚪 Go Back</button>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-end align-center items-center w-full h-1/6 p-3">
                <h3 className='text-md font-mono font-extrabold text-gray-200'>{`Made with <3 by `}<a href="https://github.com/asheeeshh" className='cursor-pointer font-extrabold text-white'>ashish</a></h3>
            </div>
        </div>
    )
}