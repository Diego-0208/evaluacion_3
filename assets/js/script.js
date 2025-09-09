// Función con parámetro
function adoptar(nombreMascota) {
  alert("¡Gracias por adoptar a " + nombreMascota + "! ❤️");
}

// Condición
let hora = new Date().getHours();
if (hora < 12) console.log("Buenos días, adopta y cambia una vida 🌞");
else if (hora < 18) console.log("Buenas tardes — hora perfecta para adoptar 🐾");
else console.log("Buenas noches — adoptar es un acto de amor 🌙");

// Manipulación del DOM
document.getElementById("titulo-principal").innerText = "Adopción de Mascotas - Tu Nuevo Amigo";
