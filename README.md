# A simple react auto suggest input box

A simple baisc auto suggest input box for react form, just pass the list of suggestions and get the selected value in react state for futher processing.

## Install

### npm

```
npm install --save autosuggest-input-box
```

### yarn

```
yarn add autosuggest-input-box
```

## Example

```javascript
import { Component } from "react";
import AutoSuggestInput from "autosuggest-input-box";

const suggestions = ["China","India","United States","Indonesia","Pakistan","Brazil","Nigeria","Bangladesh","Russia","Mexico","Japan","Ethiopia","Philippines","gypt","Vietnam","DR Congo","Turkey","Iran","Germany","Thailand","United Kingdom","France","Italy","Tanzania","SouthAfrica","Myanmar","Kenya","South Korea","Colombia","Spain","Uganda","Argentina","Algeria","Sudan","Ukraine","Iraq","Afghanistan","Poland","Canada","Moocco","Saudi Arabia","Uzbekistan","Peru","Angola","Malaysia","Mozambique","Ghana","Yemen","Nepal","Venezuela"];

const App = () => {
    const onChange = (input) => {
        console.log(input);
    };
    return (
        <div>
            Country:
            <AutoSuggestInput list={suggestions} onChange={onChange} />
        </div>
    );
};

export default App;
```

## API

| Prop                             | Type     | Required | Description                                                                                                |
|:---------------------------------| :------- | :------: |:-----------------------------------------------------------------------------------------------------------|
| [`list`](#list)                  | Array    |    ✓     | This contains list of values to be shown as suggestions                                                    |
| [`onChange`](#onChange)          | Function |    ✓     | This function is used to capture the change in input box. It can be used to update the state in your file. |
| [`id`](#id)                      | String   |          | Element id to uniquely identify the input box in DOM                                                       |
| [`name`](#name)                  | String   |          | Element name to identify the element in form submissions                                                   |
| [`placeholder`](#placeholder)    | String   |          | Placeholder for the input box                                                                              |
| [`inputStyle`](#inputStyle)      | String   |          | Input box react style object                                                                               |
| [`listStyle`](#placeholder)      | String   |          | List react style object                                                                                    |
| [`itemStyle`](#placeholder)      | String   |          | Item react style object                                                                                    |
| [`itemHoverStyle`](#placeholder) | String   |          | Input hover react style object                                                                             |
| [`className`](#className)        | String   |          | Deprecated from 1.0.14                                                                                     |
