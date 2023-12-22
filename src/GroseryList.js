import { Component } from "react";
import imageTree from './paket.png';


export class GroseryList extends Component {
   state = {
userImput: "", 
GroseryList: [],
}

onChangeEvent(e) {
    this.setState({userImput: e})
}

addItem(input){ 
if (input === '') {
alert ("Пожалуйста, добавь продукт")
} else {
let listArray = this.state.GroseryList;
listArray.push(input);
this.setState({GroseryList: listArray, userImput: ''})
}
}
crossWords(event) {
    const li = event.target;
    li.classList.toggle('crossed');
}

deleteItem(){
    let listArray = this.state.GroseryList;
    listArray = [];
    this.setState({GroseryList: listArray})
}

onFormSubmit(e) {
    e.preventDefault();
}

render() {
    return(
<form onSubmit = {this.onFormSubmit}>
<div className="conteiner">
    <input type="text" 
    placeholder="Что ты хочешь купить сегодня?"
    value={this.state.userImput}
    onChange={(e) => {this.onChangeEvent(e.target.value)}}/>
</div>
<div className="conteiner">
<button onClick={() => this.addItem(this.state.userImput)} className="btn add">Добавить</button>
</div>
<ul>
{this.state.GroseryList.map((item, index) => (
    <li onClick={ this.crossWords } key={index}>
    <img src={imageTree} width="30px" alt="check-box"/>
    {item}
    </li>
))}

</ul>
<div className="conteiner">
<button onClick={() => this.deleteItem(this.state.userImput)} className="btn delete">Удалить</button>
</div>
</form>
    )
  }
}