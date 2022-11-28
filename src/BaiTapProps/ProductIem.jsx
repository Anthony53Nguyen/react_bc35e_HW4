import React, { Component } from "react";
import style from './ProductItem.module.css';

export default class ProductIem extends Component {
  render() {
    return (
      <div className={`${style.card} card`}>
        <img
          src={this.props.prod.image}
          alt="..."
          data-toggle="modal"
          data-target="#myModal"
        />
        <div className="card-body">
          <h5 className="card-title" data-toggle="modal" data-target="#myModal">
            {this.props.prod.name}
          </h5>
          <p data-toggle="modal" data-target="#myModal">
            {this.props.prod.price}$
          </p>
          <a href="#" className="btn btn-dark">
            Add to cart <i class="fa-solid fa-cart-shopping ml-3"></i>
          </a>
        </div>
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Thông tin chi tiết sản phẩm</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body">
                <img src={this.props.prod.image} alt="..." />
                <div className="pl-4">
                  <h5>{this.props.prod.name}</h5>
                  <h6>Alias: {this.props.prod.alias}</h6>
                  <p className="mt-3">{this.props.prod.description}</p>
                  <p>{this.props.prod.shortDescription}</p>
                  <p>{this.props.prod.price}$</p>
                  <p>Available: {this.props.prod.quantity}</p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
