import HeaderComponent from "../components/HeaderComponent"

function BlogPage() {
  const handleSubmit = (e) =>{
    e.prevenDefault();
    console.log("El formulario se ha enviado");
  }
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div>BlogPage</div>
      <h1>Formulario - Tu opinión</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="username">Nombre</label>
          <input type="text" id="username" />
        </fieldset>
        <fieldset>
          <label htmlFor="comentario">Comentario</label>
          <input type="text" id="comentario" />
        </fieldset>
        <button>Enviar</button>
      </form>
    </>
    
  )
}

export default BlogPage