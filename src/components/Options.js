import React from 'react';
import Option from './Option';

const Options = props => {
  const { options } = props;
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button
          onClick={props.handleDeleteOptions}
          className="button button--link"
        >
          remove all
        </button>
      </div>

      {props.options.length === 0 && (
        <p className="widget-message">Please add an option to get started!</p>
      )}
      <ol>
        {options.map((option, index) => (
          <Option
            option={option}
            count={index + 1}
            key={index}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))}
      </ol>
    </div>
  );
};

export default Options;
