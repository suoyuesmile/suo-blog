import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg'
import * as serviceWorker from './serviceWorker';

const name = 'shaosuo'
const numbers = [2, 2, 3, 4, 5]
const nameVisiable = false
function filterShao(str) {
    return str.replace('shao', '');
}

// 函数组件 & 条件渲染 & 列表渲染
// props 只读
function CreatEl(props) {
    if (nameVisiable) {
        return <h1>{filterShao(name)} luck!</h1>
    }
    return (<div>
            <h1>{props.name} ok</h1>
            { props.name === 'shaosuo' && <span>very good!</span> }
            { props.name === 'shaosuo' ? <span> very good!</span> : null}
            { numbers.map((item, index) => (<li key={index}>{item}</li>)) }
            <img src={logo} alt="123"></img>
        </div>)
}

// 类组件
// 不能直接修改state
// setState 会合并成一个调用，可能异步更新
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }
    render() {
        return <h2>{this.state.date.toLocaleTimeString()}</h2>
    }
}

// 表单 & 受控组件
class FormDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            selected: 1,
            file: ''
        }
    }
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleSelectChange = (event) => {
        // todo: not immediately change
        this.setState({
            selected: event.target.value
        })
        // this.setState((state) => ({
        //     selected: state.selected
        // }))
        // console.log(event.target.value)
    }
    handleSubmit = (event) => {
        event.preventDefault();
    }
    render() {
        const options = [{id: 1, name: 'apple'}, {id: 2, name: 'banana'}]
        return <form>
            <div className="form-item">
                <label>name: </label>
                <input type="text" value={this.state.name} onChange={this.handleNameChange}/>{this.state.name}
            </div>
            <div className="form-item">
                <input type="submit"  onClick={this.handleSubmit}/>
            </div>
            <div className="form-item">
                <select value={this.state.selected.id} onClick={this.handleSelectChange}>
                    {options.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
                </select>
                {this.state.selected}
            </div>
            <div className="form-item">
                <input type="file"></input>
                {this.state.file}
            </div>
        </form>
    }
}
// 事件处理
class EventHandles extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 1
        }
    }
    handleClick = (e, id) => {
        // console.log(e.target);
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return <button onClick={(e) => this.handleClick(e, '123')}>点击{this.state.count}</button>
    }
}

// 状态提升
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>水沸腾！</p>
    }
    return <p>水不会沸腾！</p>
}

const modeNames = {
    c: 'Celsius',
    f: 'Fahreheit'
};
class TemperatureInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            temperature: ''
        }
    }

    handleChange = (e) => {
        this.props.onTemperatureChange(e.target.value)
    }
    render() {
        const temperature = this.props.temperature
        const mode = this.props.mode
        return <form>
            <h2>{modeNames[mode]} 温度</h2>
            <div className="form-item">
                <label>水温：</label>
                <input type="text" onChange={this.handleChange} value={temperature} />
            </div>
            {/* <BoilingVerdict celsius={this.state.temperature}></BoilingVerdict> */}
        </form>
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: '',
            temperature: ''
        }
    }
    handleCelChange = (temperature) => {
        this.setState({
            mode: 'c',
            temperature: temperature
        })
    }
    handleFahChange = (temperature) => {
        this.setState({
            mode: 'f',
            temperature: temperature
        })
    }
    render() {
        const mode = this.state.mode;
        const temperature = this.state.temperature;
        const celsius = mode === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = mode === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return <div>
            <TemperatureInput
                mode="c"
                temperature={celsius}
                onTemperatureChange={this.handleCelChange}
                ></TemperatureInput>
            <TemperatureInput
                mode="f"
                temperature={fahrenheit}
                onTemperatureChange={this.handleFahchange}
                ></TemperatureInput>
        </div>
    }
}
function toFahrenheit(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toCelsius(celsius) {
    return celsius * 9 / 5 + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded;
}

// 组合组件
function App() {
    return (
        <div>
            <CreatEl name="shaosuo" ></CreatEl>
            <FormDemo></FormDemo>
            <Clock></Clock>
            <EventHandles></EventHandles>
            <Calculator></Calculator>
        </div>
    )
}
// todo 高阶组件

ReactDOM.render(
    <App className="app"></App>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
