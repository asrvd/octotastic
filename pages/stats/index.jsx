/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'

export default function Index() {
    const router = useRouter()
    const [User, setUser] = useState("")
    function handleClick() {
        router.push(`/stats/${User}`)
    }
    function handleChange(e) {
        setUser(e.target.value)
    }
    return (
        <div className='flex flex-col align-center items-center justify-center h-screen w-screen px-6 bg-gray-700 font-mono gap-3'>
            <a href="https://github.com/asheeeshh/">
                <img alt="Stargazers" src="https://img.shields.io/github/stars/asheeeshh/ashterm?style=for-the-badge&logo=github&color=C9CBFF&logoColor=D9E0EE&labelColor=302D41"></img>
            </a>
            <div className='flex flex-col align-center items-center justify-center h-5/6 w-screen px-6 bg-gray-700 font-mono'>
                <h2 className='text-2xl lg:text-3xl md:text-3xl font-mono font-extrabold mb-3 text-gray-200'>✨Octotastic/Stats</h2>
                <div className='lg:w-2/5 md:w-2/4 w-full'>
                    <div className='h-auto'>
                    <label className="relative block p-3 border-2 border-gray-300 rounded-lg" htmlFor="name">
                        <span className="text-base font-medium text-gray-300" htmlFor="name">
                        Username
                        </span>

                        <input className="w-full p-0 text-sm border-none focus:ring-0 bg-transparent text-gray-200" id="name" type="text" placeholder="Your GitHub Username" onChange={handleChange}/>
                    </label>
                    </div>
                    <div className="flex flex-row justify-start gap-3 align-center items-center">
                        <button className="duration-700 px-5 py-2 mt-2 text-sm text-gray-800 bg-white border border-gray-300 rounded bg-gray-300 shadow hover:bg-gray-400" onClick={handleClick}>✨ View Stats</button>
                        {router.pathname !== "/" && (
                            <button onClick={() => router.back()} className="duration-700 w-1/7 max-w-max px-5 py-2 mt-2 text-sm text-gray-800 font-mono bg-white border border-gray-200 rounded shadow hover:bg-gray-400  bg-gray-300">🚪 Go Back</button>
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