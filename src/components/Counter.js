import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.count !== this.state.count) {
            return true;
        }
        return false;
    }

    incrementCount() {
        this.setState(prev => ({
            ...prev,
            count: this.state.count + 1
        }))
    }

    decrementCount() {
        this.setState(prev => ({
            ...prev,
            count: this.state.count - 1
        }))
    }

    render() {
        console.log('count render');

        return (
            <>
                <hr />
                <h2>{`Counter: ${this.state.count}`}</h2>
                <div className="row">
                    <div className="col-auto">
                        <button
                            className="btn btn-success"
                            onClick={this.incrementCount}
                        >Plus</button>
                    </div>
                    <div className="col-auto">
                        <button 
                            className="btn btn-danger"
                            onClick={this.decrementCount}
                        >Minus</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Counter;