const Contactenos=(props)=>{
    return(
        <main class="holder contacto">
        <div>
            <h2>Contactenos</h2>
            <form action="" method="" class="Formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name="nombre"/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="mail" name="email"/>
                </p>
                <p>
                    <label for="mensajes">Mensaje</label>
                    <textarea name="mensajes"></textarea>
                </p>
                <input type="submit"/>
            </form>
        </div>
        <div>
            <h2>Nuestros datos</h2>
            <p>Instagram:</p>
            <p>Numero de telefono:</p>
            <p>Gmail:</p>
            <p>Facebook:</p>
        </div>
   </main>
    )
}

export default Contactenos;