import HeaderComponent from "../components/HeaderComponent"
import './BlogPage.css';

function BlogPage() {
  const handleSubmit = (e) =>{
    e.prevenDefault();
    console.log("El formulario se ha enviado");
  }
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div className="blog-container">
      <div>BlogPage</div>
      <h1>Formulario - Tu opinión</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="username">Nombre:</label>
          <input type="text" id="username" />
        </fieldset>
        <fieldset>
          <label htmlFor="comentario">Comentario:</label>
          <input type="text" id="comentario" />
        </fieldset>
        <button>Enviar</button>
      </form>
      </div>
    </>
    
  )
}

export default BlogPage