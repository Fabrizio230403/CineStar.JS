const getPeliculas = async(id) => {
    
    const dato = await fetch(`https://oaemdl.es/cinestar_sweb_php/peliculas/${id}`)
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
                       <a onClick="getPelicula(${pelicula.id})" style="cursor:pointer;" class="getCine" >
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

const getPelicula = async (id) => {
    
    const dato = await fetch(`https://oaemdl.es/cinestar_sweb_php/peliculas/${id}`)

    if(dato.status == 200){

        const mipelicula = await dato.json();

        let html = `
                <br/><h1>Cartelera</h1><br/>
                <div class="contenido-pelicula">
                <div class="datos-pelicula">
                    <h2>${mipelicula.Titulo}</h2>
                    <p>${mipelicula.Sinopsis}</p>
                <br/>
                <div class="tabla">
                    <div class="fila">
                    <div class="celda-titulo">Título Original :</div>
                    <div class="celda">${mipelicula.Titulo}</div>
                    </div>
                    <div class="fila">
                    <div class="celda-titulo">Estreno :</div>
                    <div class="celda">${mipelicula.FechaEstrenoss}</div>
                    </div>
                    <div class="fila">
                    <div class="celda-titulo">Género :</div>
                    <div class="celda">${mipelicula.Geneross}</div>
                    </div>
                    <div class="fila">
                    <div class="celda-titulo">Director :</div>
                    <div class="celda">${mipelicula.Director}</div>
                    </div>
                    <div class="fila">
                    <div class="celda-titulo">Reparto :</div>
                    <div class="celda">${mipelicula.Reparto}</div>
                    </div>
                    </div>
                    </div>
                    <img src="img/pelicula/${mipelicula.id}.jpg" width="160" height="226"/>
                    </div>
                <div class="pelicula-video">
                <embed src="https://www.youtube.com/v/${mipelicula.Link}" style="cursor:pointer;" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="580" height="400">
                </div>
        `
        document.getElementById('contenido-interno').innerHTML = html;
    }
    
}

