/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, Component } from "react";
import Select from 'react-select'
import Chart from "./Chart";

export default function LangCharts(props) {
    const options = [
        { value: 'lang', label: 'Language Stats' },
        { value: 'repo', label: 'Repository Stats' },
        { value: 'cont', label: 'Contribution Stats' },
    ]
    const [Current, setCurrent] = useState('lang');
    const ShowLangChart = (Current === `lang`) ? true : false;
    const ShowRepoChart = (Current === `repo`) ? true : false;
    const ShowContChart = (Current === `cont`) ? true : false;
    function handleChange(e) {
        setCurrent(e.value);
    }
    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            
            <Select options={options} className="border-none outline-none lg:w-1/4 sm:w-full bg-gray-500" onChange={handleChange} placeholder={options[0].label}/>
            <div className='h-3/4 w-full flex flex-col justify-center align-center items-center'>
                {ShowLangChart && <Chart data={props.LangData} chartData={{title: "REPOSITORIES", fill: "#DDB6F2"}}/>}
                {ShowRepoChart && <Chart data={props.RepoData} chartData={{title: "STARS", fill: "#96CDFB"}}/>}
                {ShowContChart && <Chart data={props.ContData} chartData={{title: "TOTAL", fill: "#ABE9B3"}}/>}
            </div>
        </div>
    )
}