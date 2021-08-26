import { connect } from "react-redux"
import { addOne } from '../actions'

const Counter = (props) => {
    return(<div>
        <div>{props.count}</div>
        <button onClick={() => props.addOne()}>Add One</button>
    </div>)
}

const mapStateToProps = state => {
    return {
        count: state.counter.count
    }
}

export default connect(mapStateToProps, { addOne: addOne })(Counter);