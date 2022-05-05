/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/a-passhref */

import {useState, useEffect} from 'react'
import { Count } from '../lib/Count'
import { useRouter } from 'next/router'

export default function Home() {
  const [count, setCount] = useState(0)
  const router = useRouter()
  useEffect(() => {
      Count().then(res => {
        setCount(res)
      })
  }, [])
  return (
    <div className='flex items-center flex-col align-center justify-center h-screen w-screen px-6 bg-gray-700'>
      <div className='flex items-center flex-col align-center justify-center h-5/6 w-screen px-6 bg-gray-700 gap-3'>
        <div className='flex gap-3 justify-center align-center items-center'>
          <a href="https://github.com/asheeeshh/octotastic/">
            <img alt="Stargazers" src="https://img.shields.io/github/stars/asheeeshh/octotastic?style=for-the-badge&logo=github&color=C9CBFF&logoColor=D9E0EE&labelColor=302D41"></img>
          </a>
          <a href="https://octotastic.now.sh/">
            <img alt="Hits" src={`https://img.shields.io/badge/Hits-${count}-lightgrey?style=for-the-badge&logo=vercel&color=C9CBFF&logoColor=D9E0EE&labelColor=302D41`}></img>
          </a>
        </div>
        <div className='flex flex-col justify-center items-center align-center lg:w-3/6 md:w-3/4 w-full bg-gray-600 p-20 shadow-2xl rounded'>
          <h2 className='text-2xl lg:text-3xl md:text-3xl font-mono font-extrabold mb-3 text-gray-200'>✨Octotastic</h2>
          
          <div className="flex flex-col lg:flex-row md:flex-col justify-start gap-2 lg:gap-3 md:gap-3 align-center items-center">
            <button onClick={() => router.push('/stats')} className="duration-700 w-1/7 max-w-max px-5 py-2 mt-2 text-sm text-gray-800 font-mono bg-white border border-gray-200 rounded shadow hover:bg-gray-400  bg-gray-300">😎 View your stats</button>
            <button onClick={() => router.push('/compare')} className="duration-700 w-1/7 max-w-max px-5 py-2 mt-2 text-sm text-gray-800 font-mono bg-white border border-gray-200 rounded shadow hover:bg-gray-400  bg-gray-300">⚡ Compare stats</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end align-center items-center w-full h-1/6 p-3">
        <h3 className='text-md font-mono font-extrabold text-gray-200'>{`Made with <3 by `}<a href="https://github.com/asheeeshh" className='cursor-pointer font-extrabold text-white'>ashish</a></h3>
      </div>
    </div>
  )
}
