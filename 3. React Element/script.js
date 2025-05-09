/*      Lec 1    Uses of React          */


// Declarative Programming, Componenet Architecture, Single Page Application
//  JavaScript is imperative Programming Language, if there is change in variables then we need to chane that explcitly using the textContent
// 
//  Imperative means we need to handle every thing Explicity 

//  In react We write the JSX In it converted in to the DOM  Implecoty by the react using the babel
// 
// 
// Episode 1





/*   Lec2    React ELement     */



// const h2 = React.createElement('h2', {className: "subHeading", id: "heading"}, "hello World")
//It returns a object

const h2 = {
    $$typeof: Symbol(React.element),
    type: "h2",
    key: null,
    ref: null,
    props: {
        className: "subHeading",
        id: "heading",
        children: "hello World"
    },
    _owner: null,
    _store: {}
}

//The typeof operater will not copy as it is malicius code
// Try copy the object from console, then paste it here you cant see the $$typeoff key 


// It is a json Object 


// It is called the Virtual DOM

// 1. React Cretes the new Virtual DOM .React
// 2. React Updates the changes the in the virtual DOM .
// 3. React COMPARES the virtual DOM and real DOM , It makes changes only where it is requried .
// 4. It uses the diffling Algorithm to make changes in the real DOM


// we do can nested tags 

const div = React.createElement('div', {className: "container"},
    [
        React.createElement('p', {key: 1}, "para1"),
        React.createElement('p', {key: 2}, "para2"),
        React.createElement('p', {key: 3}, "para3"),
    ]
);


const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(div);

const h1 = document.createElement('h1');

console.log(h1);     

console.log(h2);
