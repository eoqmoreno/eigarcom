import React from 'react'

export class Linha extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="row mb-5 col-8">
                <span className="col-8">
                    Pagamento {this.props.local}
                </span>
                <span className="col-2 text-right">
                    R$ {this.props.valor}
                </span>
            </div>
        )
    }
}

export default Linha
