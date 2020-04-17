// JSON
var objeto = {
    nombre: "Sunset Crush",
    autor: ["Cristina Cascajares", "Denisse Signoret", "Fer Lizano"]
    descripcion: "Beauty Salon & Shop",
    anio: 2020,
    lugar: "DevF Remoto",
}
obtenerInfo: function() {
    this.nombre + " fue creada en DevF por " + this.autor + " en el año " + this.anio;
}