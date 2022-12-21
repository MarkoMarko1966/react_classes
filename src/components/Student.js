import PropTypes from 'prop-types';

const Student = (props) => {

    const { shouldTheComponentShow, name, age, fruits } = props

    // if(shouldTheComponentShow){
    //     console.log("true")
    // }else {
    //     console.log("false")
    // }

    // shouldTheComponentShow ? console.log("true") :  console.log("false")
    
    //console.log(props)

    if(!shouldTheComponentShow){
        return null
    }

    return shouldTheComponentShow && 
    <div>
        <h1>Student</h1>
        <div>Name: {props.name}</div>
        <div>Age: {props.age}</div>
        <div>ShouldShow: {props.shouldTheComponentShow}</div>
        <div>Fruits : {fruits.map(fruit => <li key={fruit}>{fruit}</li>)}</div>
    </div>
}

export default Student

Student.propTypes = {
    shouldTheComponentShow : PropTypes.bool, 
    name : PropTypes.string,
    age : PropTypes.number,
    fruits : PropTypes.arrayOf(PropTypes.string)
}