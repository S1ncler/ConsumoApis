const url = "https://rickandmortyapi.com/api/character";
// Se trae la informacion de la apo
fetch(url)
    // se pasa la informacion de la api a Json
    .then(response => response.json())
    // se comienza a trabajar con los datos de la api
    .then((data) => {
        // se trae el codigo base de las tarjetas html 
        fetch("card.html")
            // se convierte a texto 
            .then(response => response.text())
            // se comienza a trabajar con las tarjetas y la informacion de la api
            .then((html) => {
                //Se guarda la estructura de las tarjetas en una constante
                const card = html;
                //Se guardan los datos de la api en una constante
                const characters = data.results;
                //Se crea el contenedor donde se van a poner las tarjetas para luego ponerlas en el index
                let html2 = "";
                //Se crean tantas tarjetas como personajes haya
                for (let i = 0; i < characters.length; i++) html2 = html2 + card;
                //Se ponen las tarjetas en la pagina para que se muestren 
                document.querySelector("[contenedor]").innerHTML = html2;
                //Se obtienen todos los campos que se van a rellenar con la informacion de la api
                const imgs = document.querySelectorAll("[img]");
                const names = document.querySelectorAll("[name]");
                const origins = document.querySelectorAll("[origin]");
                const statuses = document.querySelectorAll("[status]");
                const speciess = document.querySelectorAll("[species]");
                const locations = document.querySelectorAll("[location]");
                //Se rellenan los campos con la informacion correspondiente de la api
                for (let i = 0; i < characters.length; i++) {
                    imgs[i].setAttribute("src", characters[i].image);
                    names[i + 1].innerHTML = "Nombre: " + characters[i].name;
                    origins[i].innerHTML = "Lugar de origen: " + characters[i].origin.name;
                    statuses[i].innerHTML = "Estado: " + characters[i].status;
                    speciess[i].innerHTML = "Especie: " + characters[i].species;
                    locations[i].innerHTML = "Localización: " + characters[i].location.name;
                }
            })
            .catch((error) => {
                console.log(error);
            })

    })
    .catch((error) => {
        console.log(error);
    })