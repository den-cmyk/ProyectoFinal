var arreglo = [1, 3, 5, 8];

// No tienen un ordenº
// Llave: valor

// JSON

// JavaScript
// Object
// Notation

var objeto = {
    // Atributos
    nombre: "Sunset Crush",
    autor:  "Cristina Cascajares, Denisse Signoret, Fer Lizano",
    anio: 2020,
    lugar: "Remoto",
    // Métodos
    calcularEdad: function() { 
        return 2020 - this.anio;
    },
   
    obtenerInfo: function() {
        return "Nombre " + " fue creada por " + this.autor + " en el año " + this.anio;
    }
}
