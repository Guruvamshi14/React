
import React from 'react'
import ReactDOM from 'react-dom/client'
// import './'


function Card(cardDetails) {

    const {title, image} = cardDetails

    return (
        <div className='card'>
            <div className='image'>
                <img src={image}
            alt ="Img" />
            </div>
            <div className='content'>
                <h3>{title}</h3>
                <p>Apple</p>
                <p><b>$</b>899</p>
            </div>
        </div>
    )
}

function Card2() {
    return <h1>Hello World</h1>
    
}

// const container = [
//     Card(1),
//     Card(2),
//     Card(3),
//     Card(4),
//     Card(5)
// ]

fetch('https://dummyjson.com/products')
.then((res) => res.json())
// .then((data) => {
//     const container2 = data.products.map((item) => {
//         // console.log(item.thumbnail)
//         // return Card({key:item.id, title:item.title, image:item.thumbnail})
//         return <Card key={item.id} title={item.title} image = {item.thumbnail}/>
//     })

//     console.log(container2);
//     root.render(<div className='container'>{container2}</div>);
// })
.then((data) => {
    root.render(
        <div className='container'>
            {
                data.products.map((item) => {
                    return <Card key = {item.id} title={item.title} image = {item.thumbnail} />
                })
            }
        </div>
    )
})

const root = ReactDOM.createRoot(document.querySelector('#root'));


// const h2 = {
//     $$typeof: Symbol.for("React.element"),
//     type: Card2,
//     key: null,
//     ref: null,
//     props: {

//     }
// }

// const h2 = React.createElement(Card, {
//      title:"item.title", image:"item.thumbnail"
// })

// root.render(h2)

// const h2 = <Card2 />

// console.log(h2);

// root.render(h2);

// root.render(<Card title = "iphone 13" image="https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png"/>)



// React componenet is function that returns the JSX  => Technicla Defination

// React Componenet is piece of Reuasble Componenet 

// Class Component and Functional Componenet

