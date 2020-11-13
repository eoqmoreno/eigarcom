import React from 'react'

export class Parte extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            valor:0,
        }
    }

    addParte = () => {
        let parte = {
            valor: this.state.valor,
        }
        this.props.add(parte)
        this.setState({valor:0})
    }

    onChangeValue = event => {
        this.setState({ valor: event.target.value });
    };

    render() {
        return (
            <div className="row col-10 mb-5">
                <input type="number" onChange={this.onChangeValue} placeholder="Valor" className="col-7 p-2 btn"></input>
                <button className="col-2 btn p-3 active" onClick={this.addParte}><span className="fa fa-plus-circle" aria-hidden="true"></span></button>
            </div>
        )
    }
}

export default Parte
