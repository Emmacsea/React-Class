const Total = (props) => {
    // const exercisesTotal = (props.parts).reduce((total, part) => total + part.exercises, 0);
   
    return (
        <div>
            {(props.parts).map(part => {
                <p>{part.exercises}</p>
            })}
            {(props.parts).map(part => {
                <p>{part.exercises}</p>
            })}
            {(props.parts).map(part => {
                <p>{part.exercises}</p>
            })}

        </div>

    )
}

export default Total