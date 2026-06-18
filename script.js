async function cargarDatos() {

    try {

        const respuesta =
            await fetch("http://172.20.44.193:3000/status");

        const datos = await respuesta.json();

        document.getElementById("cpu").innerText =
            datos.cpu;

        document.getElementById("ram").innerText =
            datos.ram;

        document.getElementById("disk").innerText =
            datos.disk;

    } catch (error) {

        console.error(error);

    }

}

cargarDatos();

setInterval(cargarDatos, 5000);
