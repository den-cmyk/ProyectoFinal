// JSON
var objeto = {
    nombre: "Sunset Crush",
    autor: ["Cristina Cascajares", "Denisse Signoret", "Fer Lizano"]
    descripcion: "Beauty Salon & Shop",
    anio: 2020,
    lugar: "DevF Remoto",
}
obtenerInfo: function() {
    this.nombre + " fue creada en DEV.F por " + this.autor[0] + " " + this.autor[1] + " " + this.autor[2] + " en el año " + this.anio;
}