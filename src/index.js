import React from 'react';
import ReactDOM from 'react-dom';

//ลองแบบเขียนร่วมไว้ที่เดียวก่อน

// เอาไว้แสดงรายการที่ทำ
// โดยทำเป็น component
class RowDataList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: props.data };
    }

    //ส่งไปแสดง
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <ol>
                    {
                        this.props.data && this.props.data.map((number) =>
                            <li>{number}</li>
                        )
                    }
                </ol>
            </div>
        );
    }
}

//หน้าหลัก
class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = { data: [], input: '' }

        //when jsx call function by function will bind "this" inside function
        this.handleClick = this.handleClick.bind(this);
        this.handleInputInsert = this.handleInputInsert.bind(this);
    }

    //handler event
    handleClick() {
        let currectList = this.state.data;
        currectList.push(this.state.input)
        this.setState({ data: currectList });
    }

    handleInputInsert(data) {
        this.setState({ input: data.target.value });
    }
    render() {
        return (
            <div>
                <label>รายการที่จะทำ</label> <input type='text' value={this.state.input} onChange={this.handleInputInsert} />
                <button onClick={this.handleClick}>Insert</button>
                <RowDataList title="รายการที่จะทำ" data={this.state.data} />
            </div>
        );
    }
}
ReactDOM.render(<App />,
    document.getElementById('root'))