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

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
      }
	  
	  onSubmit(event) {
		  event.preventDefault();
		  alert("Value : " + this.state.value);
	  }
	  
	  onChange(input) {
		  this.setState({value: input});
	  }
	  
	  
	render() {
	  return (
		<div>
		<form onSubmit={this.onSubmit}>
			Country: 
			<AutoSuggestInput list={suggestions} onChange={this.onChange} />
			<input type="submit" value="Submit" />
		</form>
		</div>
	  );
	}
}

export default App;
```

## API

|Prop | Type | Required | Description|
|:----|:-----|:---------|:-----------|
|[`list`](#list) | Array|✓| This contains list of values to be shown as suggestions|
[`onChange`](#onChange) | Function|✓| This function is used to capture the change in input box. It can be used to update the state in your file.|