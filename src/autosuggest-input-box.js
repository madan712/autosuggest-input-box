import React from 'react';
import { useState } from 'react';

export default const AutoSuggestInput = (props) => {
    const [showOption, setShowOption] = useState(false);
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [activeIndex, setActiveIndex] = useState(-1);

    const onChange = (event) => {
        const input = event.target.value;
        setValue(input);
        setSuggestions(getSuggestions(input));
        setShowOption(true);
    };

    const getSuggestions = (input) => {
        const inputValue = input.trim().toLowerCase();
        const inputLength = inputValue.length;
        const suggestions =
            inputLength === 0
                ? []
                : props.list.filter((v) =>
                    v.toLowerCase().includes(inputValue)
                );
        return suggestions.length === 1 &&
        suggestions[0].toLowerCase() === inputValue
            ? []
            : suggestions;
    };

    const SuggestionList = () => {
        if (suggestions.length > 0 && showOption) {
            const listStyle = props.listStyle
                ? { ...props.listStyle, display: 'block', position: 'absolute' }
                : {
                    display: 'block',
                    position: 'absolute',
                    width: '200px',
                    color: '#495057',
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: '0.75rem',
                    fontWeight: '400',
                    padding: '0px 0px',
                    margin: '0px',
                    zIndex: '999',
                };

            const itemStyle = props.itemStyle
                ? { ...props.itemStyle, listStyleType: 'none' }
                : {
                    padding: '10px',
                    backgroundColor: '#fff',
                    border: '1px solid #d4d4d4',
                    borderTop: 'none',
                    listStyleType: 'none',
                };

            const itemHoverStyle = props.itemHoverStyle
                ? { ...props.itemHoverStyle, listStyleType: 'none' }
                : {
                    padding: '10px',
                    backgroundColor: '#e9e9e9',
                    border: '1px solid #d4d4d4',
                    borderTop: 'none',
                    listStyleType: 'none',
                };

            const firstItemStyle = props.firstItemStyle
                ? props.firstItemStyle
                : itemStyle;

            const lastItemStyle = props.lastItemStyle
                ? props.lastItemStyle
                : itemStyle;

            return (
                <ul style={listStyle}>
                    {suggestions.map((item, index) => {
                        const iStyle =
                            index === activeIndex
                                ? itemHoverStyle
                                : suggestions.length === index + 1
                                    ? lastItemStyle
                                    : index === 0
                                        ? firstItemStyle
                                        : itemStyle;

                        return (
                            <li
                                style={iStyle}
                                key={item}
                                onMouseDown={onItemSelect}
                                onMouseEnter={() => setActiveIndex(index)}
                            >
                                {item}
                            </li>
                        );
                    })}
                </ul>
            );
        }
    };

    const onItemSelect = (event) => {
        updateValue(event.target.innerText);
    };

    const updateValue = (value) => {
        setValue(value);
        setShowOption(false);
        setActiveIndex(-1);
        props.onChange(value);
    };

    const onKeyDown = (event) => {
        const index = activeIndex;
        let active = '';

        if (event.keyCode === 38) {
            if (index > 0) {
                setActiveIndex(index - 1);
            } else {
                setActiveIndex(suggestions.length - 1);
            }
        } else if (event.keyCode === 40) {
            if (suggestions.length > index + 1) {
                setActiveIndex(index + 1);
            } else {
                setActiveIndex(0);
            }
        } else if (event.keyCode === 13) {
            active = suggestions[index];
            if (active) {
                updateValue(active);
            }
            event.preventDefault();
        } else {
            setShowOption(false);
            setActiveIndex(-1);
        }
    };

    const onBlur = (event) => {
        setShowOption(false);
        setActiveIndex(-1);
    };

    return (
        <>
            <input
                type="text"
                autoComplete="off"
                id={props.id}
                name={props.name}
                style={props.inputStyle}
                placeholder={props.placeholder}
                onChange={onChange}
                onKeyDown={onKeyDown}
                onBlur={onBlur}
                onFocus={onChange}
                onClick={onChange}
                value={value}
            />
            <SuggestionList />
        </>
    );
};
