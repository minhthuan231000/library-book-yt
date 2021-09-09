import React from 'react';
import PropTypes from 'prop-types';

Step2.propTypes = {
    currentStep: PropTypes.number,
    addCheckBox: PropTypes.func,
    checklist: PropTypes.array
};
export default function Step2(props) {
    if (props.currentStep !== 2) {
        return null
    }
    return (
        <div className="favorite__box">
            {props.checklist.map((x, index) => {
                return <article key={index}>
                    <input
                        type="checkbox"
                        onChange={props.addCheckBox}
                        value={x} 
                        />
                    <div>
                        <span>{x}</span>
                    </div>
                </article>
            })}
        </div>
    );
}