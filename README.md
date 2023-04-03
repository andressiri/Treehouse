# [<img src="/assets/treehouse-logo.png" alt="Treehouse logo" width="40"/>](#) Treehouse school

## Ir al sitio

El sitio se encuentra desplegado en dos sitios, el cliente está en Vercel y el servidor y la base de datos fueron desplegados con Railway.

Cliente: [https://treehouse-andressiri.vercel.app](https://treehouse-andressiri.vercel.app)

Servidor: [https://treehouse-andressiri.up.railway.app](https://treehouse-andressiri.up.railway.app)

## Breve descripción

Se trata de una aplicación para el manejo de los datos de una escuela ficticia llamada "Treehouse". Los requerimientos son poder realizar las operaciones básicas de los diversas entidades presentes en esta lógica y poder manejar las distintas relaciones entre ellas. En otras palabras, para los salones, estudiantes y profesores se requiere poder crear información que los represente, poder modificar esta información, eliminarla si fuera necesario y poder acceder a ella cuando se lo solicita. A su vez, respecto a las relaciones, se debe poder saber quienes forman parte de un determinado salon y agregarlos o quitarlos del mismo. Por otro lado esta escuela considera información de importancia saber relaciones de hermanos entre sus estudiantes, por lo cual es necesario poder registrar dicha información.

<details>
  
  <summary>Estas son algunas de las acciones que se pueden realizar:</summary>

- Crear y editar las distintas entidades a través de formularios:

![Crear](/assets/actions/1-create.png)

![Editar](/assets/actions/1-edit.png)

- Eliminar las distintas entidades (salones, estudiantes y profesores):

![Eliminar](/assets/actions/2-delete.png)

- Ver los distintos alumnos de un salón y elegir quitarlos o verlos en detalle:

![Lista de estudiantes](/assets/actions/3-students-list.png)

- Definir a un estudiante como hermano de otro/s estudiante/s:

![Agregar hermano](/assets/actions/4-add-sibling.png)

- Agregar estudiantes o profesores a un salon:

![Agregar a salon](/assets/actions/5-add-to-room.png)

- Agregar imágenes para reconocerlos mejor:

![Agregar imagenn](/assets/actions/6-add-image.png)

</details>

## Tecnologías utilizadas

<details>
  
  <summary>Next.js</summary>
  
  [Next.js](https://nextjs.org) es un framework de React para construir aplicaciones web del lado del servidor. Proporciona características como renderizado del lado del servidor (SSR), pre-renderizado estático, enrutamiento simple y escalabilidad. Además, Next.js viene con algunas características incorporadas para mejorar el rendimiento, como la división de código y la precarga automática de páginas. También es compatible con una amplia variedad de bibliotecas y herramientas de desarrollo, lo que lo convierte en una herramienta poderosa para desarrolladores de todos los niveles de experiencia. En resumen, Next.js es una excelente opción para aquellos que desean desarrollar aplicaciones web rápidas y escalables utilizando React.
    
</details>
  
<details>
    
  <summary>TypeScript</summary>
  
  [TypeScript](https://www.typescriptlang.org/) es un lenguaje de programación de código abierto desarrollado y mantenido por Microsoft. Es una superconjunto tipado de JavaScript que agrega características como tipos de datos estáticos opcionales, interfaces, clases y decoradores. Estas características permiten una mayor verificación de errores y una mejor documentación del código, lo que lo hace más fácil de mantener y escalar. TypeScript se compila a JavaScript para su uso en navegadores web y en entornos de servidor. Es una herramienta popular para el desarrollo de aplicaciones de una sola página (SPA), aplicaciones de Node.js, y para proyectos de código abierto y empresariales.
  
</details>

<details>
  
  <summary>Node JS</summary>

[Node.js](https://nodejs.org/es) es un entorno de ejecución orientado a eventos asíncronos para JavaScript construido con [V8, motor de JavaScript de Chrome](https://v8.dev/), y diseñado para crear aplicaciones network escalables. Por supuesto Node.js tiene varios pros y contras comparado con otros lenguajes y frameworks con los que compite, pero las principales razones que explican por qué lo elegí para este proyecto son, primero, por la ventaja de poder utilizar "Javascript en todos lados", siendo que Node.js soporta Javascript tanto en el lado del cliente como en el lado del servidor, y segundo, el vasto repositorio de librerías al que se tiene acceso con Node Package Manager.

</details>

<details>

  <summary>Express</summary>

[Express](https://expressjs.com/es) es una infraestructura web rápida, minimalista y flexible para Node.js que proporciona un conjunto sólido de prestaciones. La principal razón por la cual la elegí es que, sin agregar muchas restricciones, hace mucho más claro y fácil el control de las peticiones y las respuestas y el diseño de rutas con, como dice en su sitio oficial, "con miles de métodos de programa de utilidad HTTP y middleware a su disposición".

  </details>
  
  <details>

  <summary>React JS</summary>

[React](https://es.reactjs.org/) es una librería de Javascript de código abierto eficiente, declarativa, y flexible para construir interfaces de usuario simples, rápidas, y escalables para el frontend de aplicaciones web. Utiliza JSX que es una extensión de sintaxis de JavaScript que permite mezclar HTML, lo que facilita el desarrollo de componentes. Elegí React en su momento por recomendaciones, siendo que estoy de acuerdo con las razones que me dieron: que es más fácil de aprender y usar en un principio y que tiene un enorme potencial cuando se lo aprende en profundidad, que tiene un gran apoyo de la comunidad y que es empleado ampliamente en el mercado laboral IT; junto con otras ventajas tecnológicas como un renderizado rápido. Hoy en día, utilizando Next.js no tengo dudas de que tomñe ua buena decisión.

  </details>

<details>
  
  <summary>PostgreSQL</summary>

[PostgreSQL](https://www.postgresql.org/) es un poderoso sistema de bases de datos objeto-relacional. Una de las razones para tomar esta decisión en lugar de elegir otra base de datos relacional es que es de código abierto con más de 30 años de actividad y hay una gran cantidad de información fácil de encontrar que describe cómo instalarla y utilizarla en la documentación oficial. Otra razón importante es que algunas funciones, como crear, actualizar o eliminar, en mi opinión, tienen un mejor retorno de información luego de que la acción es realizada.

  </details>

  <details>

  <summary>Sequelize</summary>

[Sequelize](https://sequelize.org/) es un moderno Mapeador de Objetos Relacionales u ORM (por las siglas en inglés de Object Relational Mapping) para TypeScript y Node.js en conjunto con PostgresSQL y otras bases de datos relacionales SQL. Siendo un ORM, Sequelize me permite acceder a la base de datos usando una lógica orientada a objetos con Javascript, una gran ventaja. La utilización del cliente de sequelize con las migraciones y los seeders realmente facilita la creación, el trabajo y las pruebas con la base de datos.

  </details>

  <details>

  <summary>Json Web Token</summary>

[JSON Web Token (JWT)](https://jwt.io/) es un estándar abierto ([RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519)) que define una forma compacta y contenida en sí misma de transmitir de forma segura información entre dos partes en formato de objeto JSON. Esta información puede ser verificada y es confiable porque está cifrada digitalmente, ya que los tokens pueden ser cifrados utilizando un secreto o un par de llaves público/privado. Elegí esto para mis métodos de autorización y autenticación porque resulta en una manera bastante sencilla de llevarlos a cabo. Me parece mejor que otras opciones, como Passport, esto debido a que encuentro menos restricciones, pese a que Passport provea un middleware ya incluído que tuve que desarrollar en este caso.

  </details>
  
  <details>
  
  <summary>Material UI</summary>

[Material UI](https://mui.com/) es un proyecto de código abierto que cuenta con componentes de React que implementan Material Design de Google. Con la experiencia que tengo trabajando con distintos frameworks de CSS, la opción que más me atrae es MUI5 con Emotion o Styled Components. Permite la utilización de componentes de mayor orden y una mejor modularización y separación de intereses.

  </details>

## ChatGPT para recabar información

Utilicé esta tecnología que está en boga, y no por nada, para obtener toda la información necesaria para rellenar la página con un contenido mínimo.

<details>
  
  <summary>Algunas imágenes de qué hice:</summary>
  
  ![Personajes de hey Arnold](/assets/chatgpt/1-hey-arnold-characters.png)
  
  ![Descripción de salón](/assets/chatgpt/2-room-description.png)
  
  ![Personajes de Rugrats](/assets/chatgpt/3-rugrats-characters.png)
  
  ![Hermanos en Rugrats](/assets/chatgpt/4-rugrats-siblings.png)
  
  ![Hermanos en Los Simpsons y Hey Arnold](/assets/chatgpt/5-siblings-arnold-simpson.png)
  
</details>

## Documentación de la API

La API se encuentra documentada con Postman [en este sitio](https://documenter.getpostman.com/view/16003276/2s93RRvCnk). Tiene ejemplos de lo que solicita cada petición y de lo que se puede esperar como respuesta. También se puede cargar en Postman para probarlo en local con el siguiente botón:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/16003276-0fd7cea5-6958-457a-b85c-b79c13d9aa53?action=collection%2Ffork&collection-url=entityId%3D16003276-0fd7cea5-6958-457a-b85c-b79c13d9aa53%26entityType%3Dcollection%26workspaceId%3D88f8a20c-a33c-4ea4-a9e6-6c025602e4bd)

## Estado del proyecto

El proyecto cumple con lo requerido y algunas de las funcionalidades extra. Por cuestiones de tiempo algunas cosas no se terminaron de desarrollar en el cliente. Un ejemplo de esto es la autenticación y autorización de usuarios, que está desarrollada (y temporalmente desactivada) en el servidor pero no en el cliente. A su vez se vieron modificadas algunas expectativas de cómo hacer distintas visualizaciones en relación al rol de usuario, o la posibilidad de crear grupos que no sean visibles al público en general si fuera necesario. Asimismo, los estilos podrían mejorarse y algo que sí es necesario de hacer es la responsividad para dispositivos móviles. En las últimas ramas de trabajo, por los mismos motivos nombrados, que el tiempo apremiaba, algunos archivos se pueden ver un poco más desprolijos que otros, o encontrarse alguna desprolijidad en la repetición de código, nada de lo que no sea conciente, pero dejando el perfeccionismo a un lado hay debía poder adaptarme a la situación. De todas formas, el código escrito, sobretodo el referente al servidor que no sufrió de estas complicaciones, es muestra de un buen trabajo y la capacidad de resolver, lo solicitado y lo que pueda acontecer.

## Instalación en local

Para instalar esta aplicación y probarla en desarrollo necesitas tener instaladas en tu computadora versiones actualizadas de `Node.js`, `NPM` y `Git` para poder:

1. Crear e ir a un nuevo directorio.
2. Inicializar un nuevo repositorio con el comando `git init`.
3. Obtener este repositorio remoto con el comando `git pull https://github.com/andressiri/Treehouse`.
4. Instalar las dependencias del directorio raíz con el comando `npm install`.
5. Ir al directorio `/client` e instalar las dependencias con el comando `npm install` nuevamente.
6. Ir al directorio `/server` e instalar las dependencias con el comando `npm install` una vez más.
7. Crear un bucket con el servicio S3 de AWS.
8. Crear la base de datos PostgreSQL requerida:

   <details>

     <summary>Instalar el servidor PostgreSQL en tu computadora.</summary>

   - Descargar el instalador en [el sitio oficial](https://www.postgresql.org/download/).
   - En Windows considerar que es necesario haber ingresado como administrador o superusuario para realizar la instalación. De ser necesario, se recomienda seguir [las instrucciones para Windows provistas en el sitio oficial](https://www.enterprisedb.com/docs/supported-open-source/postgresql/installer/02_installing_postgresql_with_the_graphical_installation_wizard/01_invoking_the_graphical_installer/).
   - En Mac OS considerar que hay que correr el paquete dmg descargado como usuario administrador. De ser necesario, se recomienda seguir [las instrucciones para Mac OS provistas en el sitio oficial](https://www.enterprisedb.com/postgres-tutorials/installation-postgresql-mac-os).
   - En Ubuntu para Linux seguir [ las instrucciones provistas en el sitio oficial para Ubuntu](https://www.enterprisedb.com/postgres-tutorials/how-install-postgres-ubuntu).
   - Necesitarás la constraseña que ingreses en la instalación para conectarte a la base de datos.

   </details>

9. Crear un archivo `.env` en el directorio `/server` con las siguientes variables:
   <pre>
   NODE_ENV = development
   PORT = 8080
   JWT_SECRET = < una cadena que quieras usar como secreto para el token de JWT >
   MAILER_MAIL = < tu dirección de email de <em><strong>gmail</strong></em> >
   MAIL_APP_PASSWORD" = < tu "contraseña de aplicación" generada desde google (no es la constraseña de tu email) >
   AWS_ACCESS_KEY = < tu llave de acceso AWS >
   AWS_SECRET_ACCESS_KEY = < tu llave de accesso secreta de AWS >
   AWS_BUCKET_NAME = < el nombre del bucket del servicio S3 de AWS >
   ALLOW_CORS = http://localhost:300 (o el puerto en el que corras el cliente)
   DB_USER = < "postgres" (default) o tu nombre de usuario para la base de datos de PostgreSQL >
   DB_PASSWORD = < la contraseña para ese usuario de PostgreSQL >
   DB_NAME = < el nombre que elijas para tu base de datos PostgreSQL >
   DB_HOST = localhost
   DB_PORT = 5432
   </pre>

   <details>

   <summary>Cómo generar una contraseña de aplicación en Google</summary>

   Para generar una nueva contraseña de aplicación seguir los siguientes pasos:

   1. En una nueva pestaña de Chrome ir a "Gestionar tu cuenta de Google".

      ![gestionar tu cuenta de google](/assets/README/gmail%20application%20password/1.%20Gestionar%20tu%20cuenta%20de%20Google.png)

   2. Ir a "Iniciar sesión en Google" en la sección de "Seguridad" y clickear en "Contraseñas de aplicaciones". Notar que es necesario tener la verificación en dos pasos activada para poder hacer esto.

      ![ir a contraseñas de aplicaciones](/assets/README/gmail%20application%20password/2.%20Ir%20a%20contrase%C3%B1as%20de%20aplicaciones.png)

   3. Crear una nueva constraseña de aplicación, el nombre es indistinto.

      ![crear una nueva constraseña de aplicación](/assets/README/gmail%20application%20password/3.%20Crear%20una%20nueva%20contrase%C3%B1a%20de%20aplicaci%C3%B3n.png)

   4. Obtener la nueva contraseña de aplicación creada.

      ![obtener la nueva contraseña de aplicación](/assets/README/gmail%20application%20password/4.%20Obtener%20la%20constrase%C3%B1a%20de%20aplicaci%C3%B3n.png)

   </details>
   
10. Crear un archivo `.env.local` en el directorio `/client` con las siguientes variables:
   <pre>
   NEXT_PUBLIC_API_ORIGIN = http://localhost:8080 (o el puerto en el que elijas correr el servidor)
   </pre>

11. Crear la base de datos, hacer las migraciones y poblarla con el comando `npm run createdb` en el directorio server. Esto correrá tres comandos del cliente de Sequelize. El primero creará la base de datos, el segundo creará las tablas necesarias con las condiciones necesarias para el funcionamiento de la API y el tercero poblará la base de datos. Para el correcto funcionamiento es necesario mantener actualizadas las carpetas de migraciones, modelos y seeds de la carpeta `/server/db/sequelizeCLI` con las carpetas correspondientes creadas al hacer el build de `Typescript`, ya que el client de sequelize (sequelize-cli) sólo corre en "runtime". Carpetas iniciales son provistas, pero debe considerarse al hacer cambios.
12. Finalmente, para correr el cliente en el puerto 3000 usar el comando `npm run dev` en el directorio `/client`, y para el servidor en el puerto 8080 usar el comando `npm run dev` en el directorio `/server`.
