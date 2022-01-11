import DisplayNumber from "../components/DisplayNumber";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        number: state.number
    }
}

export default connect(mapStateToProps)(DisplayNumber);

// export default class extends Component {
//     state = {number:store.getState().number}

//     constructor(props) {
//         super(props);
//         store.subscribe(function(){
//         this.setState({number: store.getState().number});
//         }.bind(this));
//     }
    
//     render() {
//         return <DisplayNumber number={this.state.number}/>
//     }
// }