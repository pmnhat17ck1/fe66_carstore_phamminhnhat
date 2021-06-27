import React, { Component } from 'react'
import ProductList from "./ProductList";
import Modal from './Modal';

export default class ExerciseCarStore extends Component {
    state= {
        productDetail : { id: 1, name: 'black car', img: './images/products/black-car.jpg', price: 1000 }
    }
    
    setStateModal=(sanphamduocclick)=>{
        this.setState({
            productDetail : sanphamduocclick
        })
    }
    render() {
        const products = [
            { id: 1, name: 'black car', img: './images/products/black-car.jpg', price: 1000 },
            { id: 2, name: 'red car', img: './images/products/red-car.jpg', price: 2000 },
            { id: 3, name: 'silver car', img: './images/products/silver-car.jpg', price: 3000 },
            { id: 4, name: 'Steel car', img: './images/products/steel-car.jpg', price: 4000 }
            ];
        return (
            <div>
                <Modal content={this.state.productDetail}/>
                <ProductList productData={products} setStateModal = {this.setStateModal}/>
            </div>
        )
    }
}
