import React, { useReducer, useContext } from 'react';
import { Context } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const reducer = (state, action) => {
    // eslint-disable-next-line
    switch (action.type) {
        case 'q1': {
            return {
                ...state,
                q1: action.q1,
            };
        }
        case 'q2': {
            return {
                ...state,
                q2: action.q2
            };
        }
        case 'q3': {
            return {
                ...state,
                q3: action.q3
            };
        }
        case 'q4': {
            return {
                ...state,
                q4: action.q4
            };
        }
        case 'q5': {
            return {
                ...state,
                q5: action.q5
            };
        }
        case 'q6': {
            return {
                ...state,
                q6: action.q6
            };
        }
        case 'q7': {
            return {
                ...state,
                q7: action.q7
            };
        }
        case 'q8': {
            return {
                ...state,
                q8: action.q8
            };
        }
        case 'q9': {
            return {
                ...state,
                q9: action.q9
            };
        }
        case 'q10': {
            return {
                ...state,
                q10: action.q10
            };
        }
        case 'q11': {
            return {
                ...state,
                q11: action.q11
            };
        }
        case 'q12': {
            return {
                ...state,
                q12: action.q12
            };
        }
        case 'q13': {
            return {
                ...state,
                q13: action.q13
            };
        }
        case 'q14': {
            return {
                ...state,
                q14: action.q14
            };
        }
        case 'q15': {
            return {
                ...state,
                q15: action.q15
            };
        }
        case 'q16': {
            return {
                ...state,
                q16: action.q16
            };
        }
        case 'q17': {
            return {
                ...state,
                q17: action.q17
            };
        }
        case 'q18': {
            return {
                ...state,
                q18: action.q18
            };
        }
    }
    throw Error('Unknown action: ' + action.type);
};

function Survey() {

    const { store, actions } = useContext(Context);
    const [state, dispatch] = useReducer(reducer, { q1: "", q2: "", q3: "", q4: "", q5: "", q6: "", q7: "", q8: "", q9: "", q10: "", q11: "", q12: "", q13: "", q14: "", q15: "", q16: "", q17: "", q18: "", user_id: store.credentials });
    const navigate = useNavigate();

    console.log(store.credentials);

    const handleQ1 = (e) => {
        dispatch({ type: 'q1', q1: e.target.value });
    };

    const handleQ2 = (e) => {
        dispatch({ type: 'q2', q2: e.target.value });
    };
    const handleQ3 = (e) => {
        dispatch({ type: 'q3', q3: e.target.value });
    };
    const handleQ4 = (e) => {
        dispatch({ type: 'q4', q4: e.target.value });
    };
    const handleQ5 = (e) => {
        dispatch({ type: 'q5', q5: e.target.value });
    };
    const handleQ6 = (e) => {
        dispatch({ type: 'q6', q6: e.target.value });
    };
    const handleQ7 = (e) => {
        dispatch({ type: 'q7', q7: e.target.value });
    };
    const handleQ8 = (e) => {
        dispatch({ type: 'q8', q8: e.target.value });
    };
    const handleQ9 = (e) => {
        dispatch({ type: 'q9', q9: e.target.value });
    };
    const handleQ10 = (e) => {
        dispatch({ type: 'q10', q10: e.target.value });
    };
    const handleQ11 = (e) => {
        dispatch({ type: 'q11', q11: e.target.value });
    };
    const handleQ12 = (e) => {
        dispatch({ type: 'q12', q12: e.target.value });
    };
    const handleQ13 = (e) => {
        dispatch({ type: 'q13', q13: e.target.value });
    };
    const handleQ14 = (e) => {
        dispatch({ type: 'q14', q14: e.target.value });
    };
    const handleQ15 = (e) => {
        dispatch({ type: 'q15', q15: e.target.value });
    };

    const handleQ16 = (e) => {
        dispatch({ type: 'q16', q16: e.target.value });
    };

    const handleQ17 = (e) => {
        dispatch({ type: 'q17', q17: e.target.value });
    };
    const handleQ18 = (e) => {
        dispatch({ type: 'q18', q18: e.target.value });
    };
    const handleUser_Id = (e) => {
        dispatch({ type: 'user_id', user_id: store.credentials });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUser_Id();
        if (state.q1 !== "" && state.q2 !== "" && state.q3 !== "" && state.q4 !== "" && state.q5 !== "" && state.q6 !== "" && state.q7 !== "" && state.q8 !== "" && state.q9 !== "" && state.q10 !== "" && state.q11 !== "" && state.q12 !== "" && state.q13 !== "" && state.q14 !== "" && state.q15 !== "" && state.Q16 !== "" && state.q18 !== "") {
            actions.postSurvey(state);
            alert("THANK YOU!");
            navigate("/");
        }
        else {
            alert("You have to answer all the questions before submitting :)")
        }

    };


    return (
        <div className="container mt-5">
            <div className='d-block text-center'>
                <h1 className='title'>Screenwriters' Quest Survey</h1>
                <p className='title'>A short survey for the quest evaluation and improvement.</p>
            </div>
            <form className='mt-5' onSubmit={handleSubmit}>
                <h2>Student specific questions:</h2>
                <div className='my-5'>
                    <h4>1.	Hello! Please, introduce yourself (name, last name).</h4>
                    <input className='w-50' id='one' name='questionone' type="text" value={state.Q1} onChange={handleQ1} />

                </div>
                <div className='my-5'>
                    <h4>2.	Where are you from?</h4>
                    <input className='w-50' id='one' name='questionone' type="text" value={state.Q2} onChange={handleQ2} />

                </div>
                <h2>Course material-specific questions:</h2>
                <div className='my-5'>
                    <h4>3.	How long have you been writing?</h4>
                    <label htmlFor='one'>Less than half a  year</label>
                    <input id='one' name='questionthree' type="radio" value="0" onChange={handleQ3} />
                    <label htmlFor='two'>Around a year</label>
                    <input id='two' name='questionthree' type="radio" value="1" onChange={handleQ3} />
                    <label htmlFor='three'>2-3 years</label>
                    <input id='three' name='questionthree' type="radio" value="2" onChange={handleQ3} />
                    <label htmlFor='four'>4-5 years</label>
                    <input id='four' name='questionthree' type="radio" value="3" onChange={handleQ3} />
                    <label htmlFor='five'>More than 5 years</label>
                    <input id='five' name='questionthree' type="radio" value="4" onChange={handleQ3} />
                </div>
                <div className='my-5'>
                    <h4>4.	The quest method was clear and made me learn effectively and fast.</h4>
                    <label htmlFor='one'>Strongly agree</label>
                    <input id='one' name='questionfour' type="radio" value="0" onChange={handleQ4} />
                    <label htmlFor='two'>Agree</label>
                    <input id='two' name='questionfour' type="radio" value="1" onChange={handleQ4} />
                    <label htmlFor='three'>Neither agree nor disagree</label>
                    <input id='three' name='questionfour' type="radio" value="2" onChange={handleQ4} />
                    <label htmlFor='four'>Disagree</label>
                    <input id='four' name='questionfour' type="radio" value="3" onChange={handleQ4} />
                    <label htmlFor='five'>Strongly disagree</label>
                    <input id='five' name='questionfour' type="radio" value="4" onChange={handleQ4} />
                </div>
                <div className='my-5'>
                    <h4>5.	The quest provided a good balance of theory and practice.</h4>
                    <label htmlFor='one'>Strongly agree</label>
                    <input id='one' name='questionfive' type="radio" value="0" onChange={handleQ5} />
                    <label htmlFor='two'>Agree</label>
                    <input id='two' name='questionfive' type="radio" value="1" onChange={handleQ5} />
                    <label htmlFor='three'>Neither agree nor disagree</label>
                    <input id='three' name='questionfive' type="radio" value="2" onChange={handleQ5} />
                    <label htmlFor='four'>Disagree</label>
                    <input id='four' name='questionfive' type="radio" value="3" onChange={handleQ5} />
                    <label htmlFor='five'>Strongly disagree</label>
                    <input id='five' name='questionfive' type="radio" value="4" onChange={handleQ5} />
                </div>
                <div className='my-5'>
                    <h4>6.	The amount of writing or other work you were asked to do was enough.</h4>
                    <label htmlFor='one'>Strongly agree</label>
                    <input id='one' name='questionsix' type="radio" value="0" onChange={handleQ6} />
                    <label htmlFor='two'>Agree</label>
                    <input id='two' name='questionsix' type="radio" value="1" onChange={handleQ6} />
                    <label htmlFor='three'>Neither agree nor disagree</label>
                    <input id='three' name='questionsix' type="radio" value="2" onChange={handleQ6} />
                    <label htmlFor='four'>Disagree</label>
                    <input id='four' name='questionsix' type="radio" value="3" onChange={handleQ6} />
                    <label htmlFor='five'>Strongly disagree</label>
                    <input id='five' name='questionsix' type="radio" value="4" onChange={handleQ6} />
                </div>
                <div className='my-5'>
                    <h4>7.	The quest schedule and homework were not too lengthy and did not take away my personal time.</h4>
                    <label htmlFor='one'>Strongly agree</label>
                    <input id='one' name='questionseven' type="radio" value="0" onChange={handleQ7} />
                    <label htmlFor='two'>Agree</label>
                    <input id='two' name='questionseven' type="radio" value="1" onChange={handleQ7} />
                    <label htmlFor='three'>Neither agree nor disagree</label>
                    <input id='three' name='questionseven' type="radio" value="2" onChange={handleQ7} />
                    <label htmlFor='four'>Disagree</label>
                    <input id='four' name='questionseven' type="radio" value="3" onChange={handleQ7} />
                    <label htmlFor='five'>Strongly disagree</label>
                    <input id='five' name='questionseven' type="radio" value="4" onChange={handleQ7} />
                </div>
                <div className='my-5'>
                    <h4>8.	The assignments given were fun to do and enhanced my learning experience.</h4>
                    <label htmlFor='one'>Strongly agree</label>
                    <input id='one' name='questioneight' type="radio" value="0" onChange={handleQ8} />
                    <label htmlFor='two'>Agree</label>
                    <input id='two' name='questioneight' type="radio" value="1" onChange={handleQ8} />
                    <label htmlFor='three'>Neither agree nor disagree</label>
                    <input id='three' name='questioneight' type="radio" value="2" onChange={handleQ8} />
                    <label htmlFor='four'>Disagree</label>
                    <input id='four' name='questioneight' type="radio" value="3" onChange={handleQ8} />
                    <label htmlFor='five'>Strongly disagree</label>
                    <input id='five' name='questioneight' type="radio" value="4" onChange={handleQ8} />
                </div>
                <div className='my-5'>
                    <h4>9.	The online course platform was accessible and accurate.</h4>
                    <label htmlFor='one'>Strongly agree</label>
                    <input id='one' name='questionnine' type="radio" value="0" onChange={handleQ9} />
                    <label htmlFor='two'>Agree</label>
                    <input id='two' name='questionnine' type="radio" value="1" onChange={handleQ9} />
                    <label htmlFor='three'>Neither agree nor disagree</label>
                    <input id='three' name='questionnine' type="radio" value="2" onChange={handleQ9} />
                    <label htmlFor='four'>Disagree</label>
                    <input id='four' name='questionnine' type="radio" value="3" onChange={handleQ9} />
                    <label htmlFor='five'>Strongly disagree</label>
                    <input id='five' name='questionnine' type="radio" value="4" onChange={handleQ9} />
                </div>
                <div className='my-5'>
                    <h4>10.	By the end of the quest, I am as interested in the course as I was at the beginning.</h4>
                    <label htmlFor='one'>Strongly agree</label>
                    <input id='one' name='questionten' type="radio" value="0" onChange={handleQ10} />
                    <label htmlFor='two'>Agree</label>
                    <input id='two' name='questionten' type="radio" value="1" onChange={handleQ10} />
                    <label htmlFor='three'>Neither agree nor disagree</label>
                    <input id='three' name='questionten' type="radio" value="2" onChange={handleQ10} />
                    <label htmlFor='four'>Disagree</label>
                    <input id='four' name='questionten' type="radio" value="3" onChange={handleQ10} />
                    <label htmlFor='five'>Strongly disagree</label>
                    <input id='five' name='questionten' type="radio" value="4" onChange={handleQ10} />
                </div>
                <h2>Instructor specific questions:</h2>
                <div className='my-5'>
                    <h4>11.	The instructor was well prepared for the meetings.</h4>
                    <label htmlFor='one'>Strongly agree</label>
                    <input id='one' name='questioneleven' type="radio" value="0" onChange={handleQ11} />
                    <label htmlFor='two'>Agree</label>
                    <input id='two' name='questioneleven' type="radio" value="1" onChange={handleQ11} />
                    <label htmlFor='three'>Neither agree nor disagree</label>
                    <input id='three' name='questioneleven' type="radio" value="2" onChange={handleQ11} />
                    <label htmlFor='four'>Disagree</label>
                    <input id='four' name='questioneleven' type="radio" value="3" onChange={handleQ11} />
                    <label htmlFor='five'>Strongly disagree</label>
                    <input id='five' name='questioneleven' type="radio" value="4" onChange={handleQ11} />
                </div>
                <div className='my-5'>
                    <h4>12.	The instructor paid attention to my process and understanding of the material</h4>
                    <label htmlFor='one'>Strongly agree</label>
                    <input id='one' name='questiontwelve' type="radio" value="0" onChange={handleQ12} />
                    <label htmlFor='two'>Agree</label>
                    <input id='two' name='questiontwelve' type="radio" value="1" onChange={handleQ12} />
                    <label htmlFor='three'>Neither agree nor disagree</label>
                    <input id='three' name='questiontwelve' type="radio" value="2" onChange={handleQ12} />
                    <label htmlFor='four'>Disagree</label>
                    <input id='four' name='questiontwelve' type="radio" value="3" onChange={handleQ12} />
                    <label htmlFor='five'>Strongly disagree</label>
                    <input id='five' name='questiontwelve' type="radio" value="4" onChange={handleQ12} />
                </div>
                <div className='my-5'>
                    <h4>13.	The instructor made sure that everyone was actively involved in the meetings</h4>
                    <label htmlFor='one'>Strongly agree</label>
                    <input id='one' name='questionthirdteen' type="radio" value="0" onChange={handleQ13} />
                    <label htmlFor='two'>Agree</label>
                    <input id='two' name='questionthirdteen' type="radio" value="1" onChange={handleQ13} />
                    <label htmlFor='three'>Neither agree nor disagree</label>
                    <input id='three' name='questionthirdteen' type="radio" value="2" onChange={handleQ13} />
                    <label htmlFor='four'>Disagree</label>
                    <input id='four' name='questionthirdteen' type="radio" value="3" onChange={handleQ13} />
                    <label htmlFor='five'>Strongly disagree</label>
                    <input id='five' name='questionthirdteen' type="radio" value="4" onChange={handleQ13} />
                </div>
                <div className='my-5'>
                    <h4>14.	I received useful feedback on my performance on tests, assignments, etc.</h4>
                    <label htmlFor='one'>Strongly agree</label>
                    <input id='one' name='questionfourteen' type="radio" value="0" onChange={handleQ14} />
                    <label htmlFor='two'>Agree</label>
                    <input id='two' name='questionfourteen' type="radio" value="1" onChange={handleQ14} />
                    <label htmlFor='three'>Neither agree nor disagree</label>
                    <input id='three' name='questionfourteen' type="radio" value="2" onChange={handleQ14} />
                    <label htmlFor='four'>Disagree</label>
                    <input id='four' name='questionfourteen' type="radio" value="3" onChange={handleQ14} />
                    <label htmlFor='five'>Strongly disagree</label>
                    <input id='five' name='questionfourteen' type="radio" value="4" onChange={handleQ14} />
                </div>
                <h2>Feedback specific questions:</h2>
                <div className='my-5'>
                    <h4>15.	What overall rating would you give the quest? (or star rating)</h4>
                    <label htmlFor='one'>Excellent</label>
                    <input id='one' name='questionfifteen' type="radio" value="0" onChange={handleQ15} />
                    <label htmlFor='two'>Good</label>
                    <input id='two' name='questionfifteen' type="radio" value="1" onChange={handleQ15} />
                    <label htmlFor='three'>Average</label>
                    <input id='three' name='questionfifteen' type="radio" value="2" onChange={handleQ15} />
                    <label htmlFor='four'>Poor</label>
                    <input id='four' name='questionfifteen' type="radio" value="3" onChange={handleQ15} />
                    <label htmlFor='five'>Very Poor</label>
                    <input id='five' name='questionfifteen' type="radio" value="4" onChange={handleQ15} />
                </div>
                <div className='my-5'>
                    <h4>16.	What are the major strengths of the quest? </h4>
                    <textarea className="form-control" id="Textarea1" rows="3" onChange={handleQ16} ></textarea>
                </div>
                <div className='my-5'>
                    <h4>17.	What are the major weaknesses of the quest? Do you have any recommendations for improving it?</h4>
                    <textarea className="form-control" id="Textarea2" rows="3" onChange={handleQ17}></textarea>
                </div>
                <div className='my-5'>
                    <h4>18.	Would you recommend the quest to other students?</h4>
                    <label htmlFor='one'>Yes</label>
                    <input id='one' name='questioneighteen' type="radio" value="0" onChange={handleQ18} />
                    <label htmlFor='two'>Yes, but it can be improved</label>
                    <input id='two' name='questioneighteen' type="radio" value="1" onChange={handleQ18} />
                    <label htmlFor='three'>Not sure</label>
                    <input id='three' name='questioneighteen' type="radio" value="2" onChange={handleQ18} />
                    <label htmlFor='four'>No</label>
                    <input id='four' name='questioneighteen' type="radio" value="3" onChange={handleQ18} />
                </div>
                <div className='my-5 d-flex justify-content-center'>
                    <button className='btn rounded-0 border submit' onClick={handleSubmit} >Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Survey;
