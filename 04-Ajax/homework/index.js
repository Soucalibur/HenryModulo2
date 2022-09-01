

// Método "Ver Amigos" //////////////////////////////////////

$("#boton").click(()=>{
    console.log("hola")
    $.get("http://localhost:5000/amigos",(respuesta)=>{
        console.log(respuesta)
        for(let i in respuesta){
            
            for(let y in respuesta[i]){
               $(`<div>
                <p>${y} :${respuesta[i][y]} </p>
                 
                </div>`).appendTo("#Ver")
            }
           
            
        }
    })
        
})

/////////////////////////////////////////////////////////////

//Método "Buscar Amigos" ////////////////////////////////////
$("#search").click(()=>{
    const busqueda = $("#input")[0].value;

     $.get(`http://localhost:5000/amigos/${busqueda}`,(respuesta)=>{
        console.log(respuesta)
        
        for(let y in respuesta){
             $(`<div>
            
             <p>${y} :${respuesta[y]} </p>
                 
             </div>`).appendTo("#Buscar")
         }
        

     })
        
})
 

/////////////////////////////////////////////////////////////

//Método "Eliminar Amigos" //////////////////////////////////

$("#delete").click(()=>{
    const busquedas = $("#inputDelete")[0].value;
    
    fetch(`http://localhost:5000/amigos/${busquedas}`, {
        method: 'DELETE'
        })
        .then(function(response) {
          // Transforma la respuesta. En este caso lo convierte a JSON
          return response.json();
        })
        .then(function(json) {
          // Usamos la información recibida como necesitemos
          console.log(json);
          $("#success").text("Borrado")
        });
    
    // $.ajax({                                                              // Otra forma de resolverlo
    //     url: `http://localhost:5000/amigos/${busquedas}`,
    //     type: 'DELETE',
    //     success: function(result) {
    //         console.log(result)
    //         console.log("borrado?")
    //     }
    // });
    
}

)


/////////////////////////////////////////////////////////////

