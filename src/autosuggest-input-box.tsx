import React, { MouseEventHandler } from 'react';
import { useState } from 'react';

interface Props {
    id?: string;
    name?: string;
    list: string[];
    onChange: (selected: string) => void;
    listStyle?: React.CSSProperties;
    itemStyle?: React.CSSProperties;
    itemHoverStyle?: React.CSSProperties;
    inputStyle?: React.CSSProperties;
    placeholder?: string;
    /**
     * @deprecated
     */
    className?: string;
}

const AutoSuggestInput = (props: Props) => {
    const [showOption, setShowOption] = useState<boolean>(false);
    const [value, setValue] = useState<string>('in');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [activeIndex, setActiveIndex] = useState<number>(-1);

    const onChange = (event: any) => {
        const input: string = event.target.value;
        setValue(input);
        setSuggestions(getSuggestions(input));
        setShowOption(true);
    };

    const getSuggestions = (input: string): string[] => {
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

    const SuggestionList = (): JSX.Element => {
        if (suggestions.length > 0 && showOption) {
            const listStyle: React.CSSProperties = props.listStyle
                ? { ...props.listStyle }
                : {
                    display: 'block',
                    position: 'absolute',
                    width: '150px',
                    color: '#495057',
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: '0.75rem',
                    fontWeight: '400',
                    padding: '0px 0px',
                    margin: '0px',
                    zIndex: '999',
                };

            const itemStyle = props.itemStyle
                ? { ...props.itemStyle }
                : {
                    padding: '10px',
                    backgroundColor: '#fff',
                    border: '1px solid #d4d4d4',
                    borderTop: 'none',
                    listStyleType: 'none',
                };

            const itemHoverStyle = props.itemHoverStyle
                ? { ...props.itemHoverStyle }
                : {
                    padding: '10px',
                    backgroundColor: '#e9e9e9',
                    border: '1px solid #d4d4d4',
                    borderTop: 'none',
                    listStyleType: 'none',
                };

            return (
                <ul style={listStyle}>
                    {suggestions.map((item, index) => {
                        const iStyle =
                            index === activeIndex ? itemHoverStyle : itemStyle;

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

        return <></>;
    };

    const onItemSelect = (event: any) => {
        const listItem = event.target as HTMLLIElement;
        const value = listItem.innerText;
        updateValue(value);
    };

    const updateValue = (value: string) => {
        setValue(value);
        setShowOption(false);
        setActiveIndex(-1);
        props.onChange(value);
    };

    const onKeyDown = (event: any) => {
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

    const onBlur = (event: any) => {
        setShowOption(false);
        setActiveIndex(-1);
    };

    return (
        <div>
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
        </div>
    );
};

export default AutoSuggestInput;
