import React from 'react'
import { connect } from 'react-redux';
import Mesa from './Mesa';

class Abertas extends React.Component {
    constructor(props) {
        super(props);
        this.a = this.props;
    }
    render() {
        let mesa = []

        if (this.props.mesas != null) {
            this.props.mesas.map(function(busca, index){
                if (busca.estado) {
                    return mesa.push(<Mesa key={index} numero={busca.mesa} css="aberta p-3"></Mesa>);
                }
            }.bind())
        }
        return (
            <div className="row">
                {mesa}
            </div>
        )
    }
}

const mapearEstadoParaProps = (state, props) => {
    return {
        mesas: state.mesa.mesas,
    }
}

export default connect(mapearEstadoParaProps)(Abertas)