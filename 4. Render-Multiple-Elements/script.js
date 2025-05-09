
import React from 'react'
import ReactDOM from 'react-dom/client'
// import './'


function Card(cardDetails) {

    const {key, title, image} = cardDetails

    return (
        <div className='card' key={key}>
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

const container = [
    Card(1),
    Card(2),
    Card(3),
    Card(4),
    Card(5)
]

fetch('https://dummyjson.com/products')
.then((res) => res.json())
.then((data) => {
    const container2 = data.products.map((item) => {
        console.log(item.thumbnail)
        return Card({key:item.id, title:item.title, image:item.thumbnail})
    })
    root.render(<div className='container'>{container2}</div>);
})

const root = ReactDOM.createRoot(document.querySelector('#root'));

