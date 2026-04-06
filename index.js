const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//estructura iniciasl de la matriz
let alumnos = [
    ['santi', [['estadistica', 8], ['tlp', 9], ['python', 7], ['servidores', 7]]],
    ['ana', [['tlp', 9], ['estadistica', 10], ['python', 8], ['servidores', 6]]],
    ['fabi', [['tlp', 6], ['python', 8], ['estadistica', 7], ['servidores', 6]]],
    ['euge', [['tlp', 9], ['python', 10], ['servidores', 10], ['estadistica', 9]]]
];

//p//calcular promedios
function calcularPromedio(materias) {
    if (materias.length === 0) return 0;
    let suma = 0;
    for (let i = 0; i < materias.length; i++) {
        suma += materias[i][1];
    }
    return suma / materias.length;
}

function mostrarAlumnos() {
    //promedio ordenado (++ a -)
    let ordenados = [...alumnos].sort((a, b) => calcularPromedio(b[1]) - calcularPromedio(a[1]));

    console.log("\n--- LISTADO DE ALUMNOS ---");
    ordenados.forEach(alu => {
        console.log(`Alumno: ${alu[0]} | Promedio: ${calcularPromedio(alu[1]).toFixed(2)}`);
        alu[1].forEach(mat => {
            console.log(`  - ${mat[0]}: ${mat[1]}`);
        });
    });
    console.log(`\nMejor promedio: ${ordenados[0][0]}`);
    menu();
}

function gestionarAlumno() {
    rl.question("\nNombre del alumno: ", (nombre) => {
        let index = alumnos.findIndex(a => a[0].toLowerCase() === nombre.toLowerCase());

        rl.question("Materia: ", (materia) => {
            rl.question("Nota: ", (nota) => {
                let n = parseInt(nota);

                if (index !== -1) {
                    ///verificaa existencia alumno
                    let matIndex = alumnos[index][1].findIndex(m => m[0].toLowerCase() === materia.toLowerCase());
                    if (matIndex !== -1) {
                        alumnos[index][1][matIndex][1] = n; // mdificar una nota
                    } else {
                        alumnos[index][1].push([materia, n]); // agregar una materia
                    }
                } else {
                    // alumno nuevo
                    alumnos.push([nombre, [[materia, n]]]);
                }
                console.log("Datos guardados.");
                menu();
            });
        });
    });
}

function menu() {
    console.log("\n1. Ver alumnos\n2. Agregar alumno\n3. Agregar o modificar notas\n4. Salir");
    rl.question("Opción: ", (op) => {
        if (op === "1") mostrarAlumnos();
        else if (op === "2" || op === "3") gestionarAlumno();
        else if (op === "4") rl.close();
        else menu();
    });
}

menu();