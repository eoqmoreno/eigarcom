import React from 'react'
import { connect } from 'react-redux'
import { mudarEstado } from '../actions/mesa';
import { limparPedidos } from '../actions/pedido';
import Linha from './Linha';
import Parte from './Parte';
import Tr from './Tr';

class Mesa extends React.Component {
    constructor(props) {
        super(props)

        this.soma = 0;
        if (this.props.mesas != null && this.props.pedidos != null) {
            this.props.mesas.map((busca) => {
                if (busca.mesa == this.props.match.params.id) {
                    this.props.pedidos.map((pedido) => {
                        if (pedido.mesa == busca.mesa) {
                            pedido.pedidos.map((produto, index) => {
                                this.soma += parseFloat(produto.preco);
                            })
                        }
                    })
                }
            })
        }

        this.state = {
            total: this.soma,
            partes: [],
            restante: 0,
            css: "mb-5 row col-10 hide",
        }
    }

    addParte = (parte) => {
        let restante = this.state.restante;
        let partes = this.state.partes;
        restante += parseFloat(parte.valor);
        if ((this.state.total - restante) < 0) {
            alert("Valor maior que o necessário!")
        } else {
            if ((this.state.total - restante) == 0) {
                if (window.confirm("Pronto, sua conta foi paga!")) {
                    this.props.mudarEstado(this.props.match.params.id);
                    this.props.limparPedidos(this.props.match.params.id);
                }
            } else {
                partes.push(parte);
                this.setState({ partes: partes, restante: restante })
            }
        }
    }

    pagarClick = () => {
        if (window.confirm("Sua conta foi paga! Deseja limpar os pedidos?")) {
            this.props.mudarEstado(this.props.match.params.id);
            this.props.limparPedidos(this.props.match.params.id);
        }
    }

    addClick = () => {
        this.setState({
            css: "mb-5 row col-10",
        })
    }

    render() {



        let a = [];
        var soma = 0;
        if (this.props.mesas != null && this.props.pedidos != null) {
            this.props.mesas.map((busca) => {
                if (busca.mesa == this.props.match.params.id) {
                    this.props.pedidos.map((pedido) => {
                        if (pedido.mesa == busca.mesa) {
                            pedido.pedidos.map((produto, index) => {
                                soma += parseFloat(produto.preco);
                                a.push(<Tr key={index} produto={produto.produto} qtd={produto.qtd} preco={parseFloat(produto.preco)} obs={produto.obs}></Tr>)
                            })
                        }
                    })
                }
            })
        }

        let partes = [];
        if (this.state.partes != null) {
            this.state.partes.map((busca, index) => {
                partes.push(<Linha key={index} valor={busca.valor} local={index + 1}></Linha>)
            })
        }

        return (
            <div className="row">
                <span className="col-6 text-center mb-5 bold">CONSUMO DA MESA</span>
                {a}
                <div className="row col-10">
                    <a className="col-3 btn active p-3 text-center mb-5"><span className="fa fa-plus" aria-hidden="true"></span> Pedido</a>
                </div>
                <div className="row col-10 footer">
                    <div className="row col-10 mb-5">
                        <h3 className="col-10 text-center vermelho">Total: R$ {this.state.total}</h3>
                        <a className="col-4 btn active text-center p-3" onClick={this.addClick}>Pagar parte</a>
                        <a className="col-4 btn active text-center p-3" onClick={this.pagarClick}>Pagar total</a>
                    </div>
                    <div className={this.state.css}>
                        {
                            this.state.restante > 0 &&
                            <span className="col-10 text-center mb-5 bold">PAGAMENTOS</span>
                        }
                        {partes}
                        {
                            this.state.restante > 0 &&
                            <span className="col-10 text-center vermelho">Restante: R$ {this.state.total - this.state.restante}</span>
                        }
                        <Parte add={this.addParte}></Parte>
                    </div>
                </div>
            </div>
        )
    }
}




const mapearEstadoParaProps = (state, props) => {
    return {
        mesas: state.mesa.mesas,
        pedidos: state.pedido.pedidos
    }
}   

const mapearDispatchParaProps = (dispatch) => {
    return {
        mudarEstado: (id) => {
            dispatch(mudarEstado(id))
        },
        limparPedidos: (id) => {
            dispatch(limparPedidos(id))
        }
    }
}

export default connect(mapearEstadoParaProps, mapearDispatchParaProps)(Mesa)
