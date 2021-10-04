import React, { Component } from 'react'

export default class ResultComponent extends Component {
    render() {
        return (
            <div className="resCont">
                <div className="logo"></div>
                <h2>Result</h2>
                <div className="box resC">
                    <h2>You need more practice</h2>
                    <h1>Your Score: 20%</h1>
                    <div className="res">
                        <div className="li"><span>Total number of questions</span><span>15</span></div>
                        <div className="li"><span>Number of attempted questions</span><span>9</span></div>
                        <div className="li"><span>Number of Correct Answers</span><span>3</span></div>
                        <div className="li"><span>Number of Wrong Answers</span><span>6</span></div>
                    </div>
                </div>
                <div className="btns"><button>Play Again</button><button>Back to Home</button></div>
            </div>
        )
    }
}
