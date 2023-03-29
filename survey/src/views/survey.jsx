import React, { useReducer, useState } from 'react';

const reducer = (state, action) => {
    // eslint-disable-next-line
    switch (action.type) {
        case 'Q1': {
            return {
                ...state,
                Q1: action.Q1,
            };
        }
        case 'Q2': {
            return {
                ...state,
                Q2: action.Q2
            };
        }
        case 'Q3': {
            return {
                ...state,
                Q3: action.Q3
            };
        }
        case 'Q4': {
            return {
                ...state,
                Q4: action.Q4
            };
        }
        case 'Q5': {
            return {
                ...state,
                Q5: action.Q5
            };
        }
        case 'Q6': {
            return {
                ...state,
                Q6: action.Q6
            };
        }
        case 'Q7': {
            return {
                ...state,
                Q7: action.Q7
            };
        }
        case 'Q8': {
            return {
                ...state,
                Q8: action.Q8
            };
        }
        case 'Q9': {
            return {
                ...state,
                Q9: action.Q9
            };
        }
        case 'Q10': {
            return {
                ...state,
                Q10: action.Q10
            };
        }
        case 'Q11': {
            return {
                ...state,
                Q11: action.Q11
            };
        }
        case 'Q12': {
            return {
                ...state,
                Q12: action.Q12
            };
        }
        case 'Q13': {
            return {
                ...state,
                Q13: action.Q13
            };
        }
        case 'Q14': {
            return {
                ...state,
                Q14: action.Q14
            };
        }
        case 'Q15': {
            return {
                ...state,
                Q15: action.Q15
            };
        }
        case 'Q16': {
            return {
                ...state,
                Q16: action.Q16
            };
        }
        case 'Q17': {
            return {
                ...state,
                Q17: action.Q17
            };
        }
        case 'Q18': {
            return {
                ...state,
                Q18: action.Q18
            };
        }
    }
    throw Error('Unknown action: ' + action.type);
};

function Survey() {

    const [state, dispatch] = useReducer(reducer, { Q1: "", Q2: "", Q3: "", Q4: "", Q5: "", Q6: "", Q7: "", Q8: "", Q9: "", Q10: "", Q11: "", Q12: "", Q13: "", Q14: "", Q15: "", Q16: "", Q17: "", Q18: "" });

    
    const handleQ1 = (e) => {
        dispatch({ type: 'Q1', Q1: e.target.value });
    };

    const handleQ2 = (e) => {
        dispatch({ type: 'Q2', Q2: e.target.value });
    };
    const handleQ3 = (e) => {
        dispatch({ type: 'Q3', Q3: e.target.value });
    };
    const handleQ4 = (e) => {
        dispatch({ type: 'Q4', Q4: e.target.value });
    };
    const handleQ5 = (e) => {
        dispatch({ type: 'Q5', Q5: e.target.value });
    };
    const handleQ6 = (e) => {
        dispatch({ type: 'Q6', Q6: e.target.value });
    };
    const handleQ7 = (e) => {
        dispatch({ type: 'Q7', Q7: e.target.value });
    };
    const handleQ8 = (e) => {
        dispatch({ type: 'Q8', Q8: e.target.value });
    };
    const handleQ9 = (e) => {
        dispatch({ type: 'Q9', Q9: e.target.value });
    };
    const handleQ10 = (e) => {
        dispatch({ type: 'Q10', Q10: e.target.value });
    };
    const handleQ11 = (e) => {
        dispatch({ type: 'Q11', Q11: e.target.value });
    };
    const handleQ12 = (e) => {
        dispatch({ type: 'Q12', Q12: e.target.value });
    };
    const handleQ13 = (e) => {
        dispatch({ type: 'Q13', Q13: e.target.value });
    };
    const handleQ14 = (e) => {
        dispatch({ type: 'Q14', Q14: e.target.value });
    };
    const handleQ15 = (e) => {
        dispatch({ type: 'Q15', Q15: e.target.value });
    };

    const handleQ16 = (e) => {
        dispatch({ type: 'Q16', Q16: e.target.value });
    };

    const handleQ17 = (e) => {
        dispatch({ type: 'Q17', Q17: e.target.value });
    };
    const handleQ18 = (e) => {
        dispatch({ type: 'Q18', Q18: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);

    }


    return (
        <div className="container">
            <div className='d-flex justify-content-between'>
                <h1 className='title'>SCREENWRITERS' QUEST Survey</h1>
                
            </div>
            <form className='mt-5' onSubmit={handleSubmit}>
                <h2>Student specific questions:</h2>
                <div className='my-5'>
                    <h4>1.	Hello! Please, introduce yourself (name, last name).</h4>
                    <input id='one' name='questionone' type="text" value={state.Q1} onChange={handleQ1} />

                </div>
                <div className='my-5'>
                    <h4>2.	Where are you from?</h4>
                    <input id='one' name='questionone' type="text" value={state.Q2} onChange={handleQ2} />

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
                <div className='my-5'>
                    <button className='btn rounded-0 border' onClick={handleSubmit} >Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Survey;
