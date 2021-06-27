import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        let {content} = this.props
        return (
          <div className="modal fade" tabIndex={-1} id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{content.name}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <img src={content.img} className="w-100" height={400} alt="..."/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary">Save</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>

        )
    }
}
