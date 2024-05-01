const getPeliculas = async(id) => {
    
    const dato = await fecth(`https://oaemdl.es/cinestar_sweb_php/peliculas/${id}`)
    if(dato.status == 200){

        const mispeliculas = await dato.json()
        let html = "<br/><h1>Cartelera</h1><br/>"

        mispeliculas.forEach(pelicula =>         
        {
            html += `<div class="contenido-pelicula">
            <div class="datos-pelicula">
                <h2>${pelicula.Titulo}</h2><br/>
                <p>${pelicula.Sinopsis}</p>
                <br/>
                   <div class="boton-pelicula"> 
                       <a onClick="getPelicula(${pelicula.id})" class="getCine" >
                           <img src="img/varios/btn-mas-info.jpg" width="120" height="30" alt="Ver info"/>
                       </a>
                   </div>
                   <div class="boton-pelicula"> 
                       <a href="https://www.youtube.com/v/${pelicula.Link}" target=_blank  onclick="return hs.htmlExpand(this, { objectType: 'iframe' } )" >
                           <img src="img/varios/btn-trailer.jpg" width="120" height="30" alt="Ver trailer"/>
                       </a>
                </div> 
            </div>
            <img src="img/pelicula/${pelicula.id}.jpg" width="160" height="226"/><br/><br/>
        </div>
        `
        });
        document.getElementById('contenido-interno').innerHTML = html

    }
}
