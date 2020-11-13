import React from 'react'

export class Tr extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row col-8 mb-5">
                <span className="col-1">
                    {this.props.qtd}x
                </span>
                <span className="col-7">
                    <b>
                    {this.props.produto}
                    </b>
                    <br></br>
                    <small>{this.props.obs}</small>
                </span>
                <span className="col-2 text-right">
                    R$ {this.props.preco}
                </span>
            </div>
        )
    }
}

export default Tr
