import React, { Component } from 'react'

export default class QuizComponent extends Component {
    render() {
        return (
            <div className="box">
                <h1>Question</h1>
                <span className="quesNo">4 of 15</span>
                <div className="QueData">
                    <span>Why are you running?</span>
                </div>
                <div className="options">
                    <button>Option 1</button>
                    <button>Option 2</button>
                    <button>Option 3</button>
                    <button>Option 4</button>
                </div>
                <div className="bottom">
                    <button>Previous</button>
                    <button>Next</button>
                    <button>Quit</button>
                </div>
            </div>
        )
    }
}
