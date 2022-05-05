import {
    IoIosLink,
    IoLogoTwitter,
    IoIosPin
} from 'react-icons/io';
import ReactTooltip from 'react-tooltip';

export default function Icons(props) {
    return (
        <div className="flex h-full w-full justify-center gap-3 items-center align-center">
            <div className="rounded-full w-10 h-10 flex justify-center items-center align-center bg-gray-600 cursor-pointer shadow-xl duration-500 hover:bg-gray-700">
                <a href={(props.web) ? props.web : "#"} className='color-gray-200'><IoIosLink color='rgb(229 231 235)' size={'1.3rem'} height={"10px"}/></a>
            </div>
            <div className="rounded-full w-10 h-10 flex justify-center items-center align-center bg-gray-600 cursor-pointer shadow-xl duration-500 hover:bg-gray-700">
                <a href={(props.twitter) ? props.twitter : "#"} className='color-gray-200'><IoLogoTwitter color='rgb(229 231 235)' size={'1.3rem'}/></a>
            </div>
            <div className="rounded-full w-10 h-10 flex justify-center items-center align-center bg-gray-600 cursor-pointer shadow-xl duration-500 hover:bg-gray-700">
                <a data-tip data-for="location" className='color-gray-200 text-md'><IoIosPin color='rgb(229 231 235)' size={'1.3rem'}/></a>
                <ReactTooltip id='location' type='dark'>
                    <span>{(props.location) ? props.location : "Not Found"}</span>
                </ReactTooltip>
            </div>
        </div>
    )
}