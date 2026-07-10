const Header = (props) => {
  console.log
  return (
    <header className="bg-dark text-white p-3">
      <h1 className="text-center">Header Component {props.xyz}</h1>
      <p className="text-center">Count: {props.abc}</p>
    </header>
  )
}
export default Header