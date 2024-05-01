const getPelicula = async (id) => {
    
    const dato = await fecth(`https://oaemdl.es/cinestar_sweb_php/peliculas/${id}`)

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
                            <div class="celda">${mipelicula.Generos}</div>
                        </div>
                        <div class="fila">
                            <div class="celda-titulo">Director :</div>
                            <div class="celda">${mipelicula.Director}</div>
                        </div>
                        <div class="fila">
                            <div class="celda-titulo">Reparto :</div>
                            <div class="celda">${mipelicula.Reparto}/div>
                        </div>
                    </div>
                </div>
                <img src="img/pelicula/${mipelicula.id}.jpg" width="160" height="226"><br/><br/>
            </div>
        <div class="pelicula-video">
            <embed src="https://www.youtube.com/v/${mipelicula.Link}" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="580" height="400">
        </div>
    `
    document.getElementById('contenido-interno').innerHTML = html;
    }
    
}