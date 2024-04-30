const Total = (props) => {
    const exercisesTotal = (props.parts).reduce((total, part) => total + part.exercises, 0);
   
    return (
        <div>
            <p> Number of exercises is {exercisesTotal} </p>

        </div>

    )
}

export default Total