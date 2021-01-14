const BasicInfo = (props) => {
    return(
        <div>
                <p>{props.name}</p>
                <p>{props.age}</p>
                <p>{props.dob}</p>
            </div>
    )
}

export default BasicInfo