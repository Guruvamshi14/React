
const h2 = <h2>Hello JSX</h2>

// JSX stands for JavaScript XML. Babel is used to compile the JSX code


// const h2 = React.createElement('h2', {className: "subHeading:"}, "Hello World");

console.log(h2);


// const h2 = {
//     $$typeof: Symbol.for("React.element"),
//     type: "h2",
//     key: null,
//     ref: null,
//     props: {
//         className: "subHeading",
//         id: "heading",
//         children: "hello World"
//     },
//     _owner: null,
//     _store: {}
// }

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(h2);