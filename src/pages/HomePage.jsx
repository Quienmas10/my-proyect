import HeaderComponent from "../components/HeaderComponent"

function HomePage() {
  const saySomething =()=>{
    console.log("Arriba Olianzaaaaa")
    alert("Toda La Vida")
  }
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div>HomePage</div>
      <hr />
      <button onClick={saySomething}>Pulse Click</button>
    </>
    
  )
}
export default HomePage