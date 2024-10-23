//el archivo app.js es el archivo de ejecucion de nuestro aplicativo web
//aca vamos a configurar nuestro servidor con EXPRESS y vamos a gestionar todo lo relacionado con la logica de negocio (conexion, bases de datos,peticiones, respuestas)

//paso 1: importar las dependencias y modulos que necesitamos
import express from "express";

//paso 2: configurar el uso del servidor
const app = express();
const port = 3000; //6000, 9000

//paso 2: ejecutar el servidor en nuestro computador
app.listen(port, ()=>{
    console.log ("el servidor esta ejecutandose correctamente en el puerto", port);
});
