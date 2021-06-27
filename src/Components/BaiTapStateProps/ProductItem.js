import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let {products} = this.props
        return (
                <div className="card ">
                    <img className="card-img-top" src={products.img} alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{products.name}</h4>
                        <p className="card-text">{products.price}</p>
                        <button className="btn btn-success" onClick={()=>{this.props.setStateModal(products)}} data-toggle="modal" data-target="#exampleModal">Xem chi tiết</button>
                    </div>
                </div>
        )
    }
}
