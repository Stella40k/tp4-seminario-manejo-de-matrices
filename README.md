# tp4-seminario-manejo-de-matrices

Sistema de Gestión de Calificaciones (CLI)
Aplicación de consola desarrollada en Node.js para la administración de estudiantes y notas, diseñada bajo el paradigma de estructuras de datos basadas en matrices multidimensionales.

Descripción Técnica
El proyecto implementa un sistema CRUD (Create, Read, Update) básico operado totalmente a través de la interfaz de línea de comandos. La restricción principal del desarrollo fue prescindir de objetos literales ({}) y bases de datos, utilizando en su lugar una arquitectura de listas anidadas para representar la persistencia en memoria.

Estructura de Datos
La información se organiza siguiendo un esquema de matriz de tres niveles:

Nivel 1 (Matriz Principal): Almacena la colección de alumnos.

Nivel 2 (Sub-matriz Alumno): Contiene el nombre (String) y una matriz de materias.

Nivel 3 (Sub-matriz Materia): Par de valores [Nombre de materia (String), Nota (Number)].

Formato:
[ [ String, [ [ String, Number ] ] ] ]

Funcionalidades Implementadas
Visualización de Datos: Renderizado de la matriz con cálculo dinámico de promedios.

Ordenamiento: Algoritmo de ordenación descendente basado en el promedio de calificaciones (Bonus).

Lógica de Existencia: Validación de duplicados mediante búsqueda de índices. Si el alumno existe, el sistema permite actualizar una nota o añadir una nueva cátedra a su registro.

Persistencia Volátil: Gestión de estado en tiempo de ejecución.

Instalación y Ejecución
Requisitos: Node.js (v14 o superior).

Clonar el repositorio:
git clone https://github.com/Stella40k/tp4-seminario-manejo-de-matrices.git

Acceder al directorio:
cd tp4-seminario-manejo-de-matrices

Instalar dependencias:
npm install

Iniciar aplicación:
npm start

Scripts Disponibles
npm start: Ejecuta la aplicación utilizando el motor de Node.js.
npm run dev: Ejecuta la aplicación mediante nodemon para entorno de desarrollo.