import Rodal from 'rodal';
import { Component } from 'react';
import CompareChart from './CompareChart';

// include styles
import 'rodal/lib/rodal.css';

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            data: this.props.data.chartData,
            users: this.props.data.users,
        }
    }

    componentDidMount() {
        console.log(this.props.data)
        this.setState({
            visible: false,
            data: this.props.data.chartData,
            users: this.props.data.users,
        })
    }

    show() {
        this.setState({
            visible: true,
        });
    }

    hide() {
        this.setState({
            visible: false,
        });
    }

    render() {
        return (
            <div className="w-full h-full flex flex-col justify-center items-center align-center">
                <button className="duration-700 px-5 py-2 mt-2 text-sm text-gray-800 bg-white border border-gray-300 rounded bg-gray-300 shadow hover:bg-gray-400" onClick={this.show.bind(this)}>✨ View Stats</button>
                <Rodal visible={this.state.visible} onClose={this.hide.bind(this)} animation={'zoom'} width={'800'} height={'600'}>
                    <div className='w-full h-full flex flex-col justify-center align-center items-center'>
                        <CompareChart data={this.state.data} users={this.state.users} />
                    </div>
                </Rodal>
            </div>
        )
    }
}