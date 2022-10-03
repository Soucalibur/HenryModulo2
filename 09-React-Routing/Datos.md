
    Routing

Todo puede estar ocurriendo dentro de la misma pagina.
SPA (Single Page Application) permite hacer cambios dentro de un solo archivo con distintas url de forma declarativa 
    (renderiza los componentes en la misma pagina)
    Para ello se usa el componente <Router> y este envuelve la App.js (como ejemplo) , y esta tiene multiples rutas las cuales
    se acceden con <Route path="/ruta"> 
    Ademas tiene la capacidad de tener un historial (como en el navegador) para poder avanzar y retroceder.

Para configurar la aplicacion primero tenemos que decir que tipo de router vamos a usar, puede ser <HashRouter> o
    <BrowserRouter> (acá se trabajará con el segundo)

    npx create-react-app demorouting en la carpeta para crear una app con todo instalado (el demorouting es el nombre
    que le voy a poner a la aplicacion, puede ser cualquier nombre)

    El componente Route es el cokmponente que define la ruta, y contiene a los demasw componentes que tendran otras rutas.
    Dentro de route le escribo la ruta del componenete y dentro el componente, y asi poder acceder a su direccion.
    Sencillamente se puede espesificar la urncon : path="/componente" y asi se puede acceder, pero con exact asi cuando
    el nombre es explicitamente el mismo se pone, sino lo obvia (por si pongo una direccioncon / y nada mas, y quedaria
    algo como: <Route exact path="/">)
    Si hay algun componente que quiero que este en todos los componentes solamente tengo que no especificar su ruta.
    Si no se encuentra algun componente se puede crear un  componente que se active cuando suceda esto.

