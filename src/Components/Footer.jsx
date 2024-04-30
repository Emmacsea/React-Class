const Total = (props) => {
    const exercisesTotal = (props.parts).reduce((total, part) => total + part.exercises, 0);
   
    return (
        <div>
           <p>Total exercises is {exercisesTotal}  </p>

        </div>

    )
}

export default Total