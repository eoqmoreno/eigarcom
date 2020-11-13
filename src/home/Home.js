import React from 'react'
import { connect } from 'react-redux'
import Mesa from './Mesa'

class Home extends React.Component {
    constructor(props){
        super(props)
        this.a = this.props
    }

    render() {
        
        let mesas = []
        if(this.props.mesas){
            this.props.mesas.map((busca, index)=>{
                if(!busca.estado){
                    return mesas.push(<Mesa key={index} numero={busca.mesa} css="mesa p-3"></Mesa>);
                }else{
                    return mesas.push(<Mesa key={index} numero={busca.mesa} css="aberta p-3"></Mesa>);
                }
            })
        }

        return (
            <div className="row">
                {mesas}
            </div>
        )
    }
}

const mapearEstadoParaProps = (state, props) =>{
    return{
        mesas: state.mesa.mesas,
    }
}

export default connect(mapearEstadoParaProps)(Home)
