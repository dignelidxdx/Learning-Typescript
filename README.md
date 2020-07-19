# Learning Typescrypt

1. Es necesario tener instalado Nodejs y Si lo tienes verifica la version en la terminar con node -v / node --version / npm --version
2. Lee un poco mas en Node Version Manager por https://github.com/nvm-sh/nvm
3. Navegación y refactorización en https://editorjs.io/ https://github.com/codex-team/editor.js > Clone > luego npm install
4. El editor de código VSC se integra de una manera facil con el lenguaje typescrypt para hacer cambios de una manera rápida en nuestro código, se puede hacer cambios como rename Symbol y el editor entiende los cambios para que estos puedan persistirse en el disco. En otros editores de código es necesario tener descargada extensiones para que entienda y compile cuando se usa Typescrypt.
5. El compilador de TypeScrypt: para instalar usamos npm install -g typescript y para verificar su versión y saber si esta integrada usamos tsc -v. Para compilar nuestros ficheros es con tsc your_file.ts y para instalar de manera 'Automatica'usamos tsc --watch your_file.ts.
6. El comportamiento ser algo asi cuando compilemos hello.ts > tsc > hello.js
7. tsc hello.ts (ejemplo) para compilarlo luego para ejecutarlo con npm hello.js (ejemplo)
8. El archivo de configuración de TypeScript: tsconfig.json este configura opciones para compilar. Para comenzar colocar tsc --init luego tsc para compilar además reconoce todos los archivos en toda la raíz del proyecto.
9. En el tipado en Tyscrypt  existe Explícito y Inferido
10. Explícito: nombreVariable : Tipo de Dato
11. Inferido: nombreVariable = valor ya definidos antriormente.
12. En Typescrypt existen datos Tipos Primitivos: Number, Boolean, String, Array, Tuple, Enum, Any, Void, Null, Undefined, Never, Object.
13. Tipo de Datos: Any, se usa como ultimo recurso.
14. Tipo de Datos: Void, lo opuesto de Any que representa la ausencia de tipo del dato.