import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    renderProduct =()=>{
        let arrProduct = this.props.productData;

        return arrProduct.map((item,index)=>{
            return (
                <div className="col-3" key={index}>
                    <ProductItem products={item} setStateModal={this.props.setStateModal} />
                </div>
            )
        })
    }
    render() {
        
        return (
            <div className="container">
                <h3>Danh sách xe</h3>
                <div className="row ">
                    {this.renderProduct()}
                </div>

            </div>
        )
    }
}
