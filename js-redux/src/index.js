import { legacy_createStore } from 'redux';

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = text => {
  return {
    type: ADD_TODO,
    text
  }
};

const delToDo = id => {
  return {
    type: DELETE_TODO,
    id
  }
};

const reducer = (state = [], action) => {
  console.log(state)
  switch(action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter(toDos => toDos.id !== action.id);
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

const dispatchAddaddToDo = text => {
  store.dispatch(addToDo(text));
};

const dispatchDelToDo = e => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(delToDo(id))
};

const paintToDo = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button")
    btn.innerText = "삭제";
    btn.addEventListener("click", dispatchDelToDo)
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn)
    ul.appendChild(li);
  })
};

store.subscribe(paintToDo);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddaddToDo(toDo);
};

form.addEventListener("submit", onSubmit);