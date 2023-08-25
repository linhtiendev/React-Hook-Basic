import React, { useState, useEffect } from "react";

// class countdown
class CountDown extends React.Component {
    state = {
        count: 10,
    };

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    componentDidMount() {
        // setTimeout(() =>{}, 1000)
        // lập vô hạn
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1,
            });
        }, 1000);
    }

    // prevProps, prevState: giá trị quá khứ của props và state
    componentDidUpdate(prevProps, prevState) {
        // xét đk clear interval
        if (prevState.count !== this.state.count && this.state.count === 0) {
            if (this.timer) {
                clearInterval(this.timer);
                // this.props.onTimesUp();
            }
        }
    }

    render() {
        return (
            <>
                <div>class: {this.state.count}</div>
            </>
        );
    }
}

// hook countdown
const NewCountDown = (props) => {
    // khởi tạo state count = 10
    const [count, setCount] = useState(10);

    useEffect(() => {
        // đk nếu count = 0
        if (count === 0) {
            props.onTimesUp();
            return;
        }
        // lập trừ giá trị state count đi 1 sau 1 giây
        let timer = setInterval(() => {
            setCount(count - 1);
        }, 1000);
        // xóa vòng lập chạy là clear để khởi tạo vòng lập mới
        return () => {
            clearInterval(timer);
        };
    }, [count]);
    return (
        <>
            <div>hook: {count}</div>
        </>
    );
};

export { CountDown, NewCountDown };
