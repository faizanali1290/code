import PropType from 'prop-types'

function Prop(props) {

  return (
    <>
      <nav>
        <li>{props.fristName}</li>
        <li>{props.middleName}</li>
        <li>{props.lastName}</li>
      </nav>

      <button onClick={props.fa}> alert</button>
    </>
  );
}

function Hi() {

    return(
<h1>next section</h1>

    )
}

Prop.PropType = {
    fristName: PropType.string.isRequired,
};
Prop.defaultProps = {
  fristName: "faizan",
  middleName: "ali",
  lastName: "khan",
};



export {Prop,Hi}
