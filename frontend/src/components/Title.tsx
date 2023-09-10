export const Title = ({text, color, action}) => {
  // debugger
  return (
    <>
      <h1 className={color}>{text}</h1>
      <button onClick={action}>Accion</button>
    </>
  )
}
