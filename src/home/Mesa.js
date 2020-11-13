import React from 'react'
import { Link } from 'react-router-dom';

export class Mesa extends React.Component {
    constructor(props) {
        super(props);
        this.css = this.props.css;
    }
    render() {
        return (
            <div className="col-4 text-center" >
                <Link to={"/mesa" + this.props.numero}>
                    <span className={this.props.css}>
                        Mesa {this.props.numero}
                    </span>
                </Link>
            </div>
        )
    }
}

export default Mesa
