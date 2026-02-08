# G29 elearning – MVP CRUD con React

## Índice
1. [Resumen del proyecto y objetivos](#resumen-del-proyecto-y-objetivos)  
2. [Criterios mínimos (MVP)](#criterios-mínimos-mvp)  
3. [Stack y recursos](#stack-y-recursos)  
4. [Estructura del proyecto sugerida](#estructura-del-proyecto-sugerida)  
5. [Cómo iniciar el proyecto](#cómo-iniciar-el-proyecto)  
6. [Entregables y criterios de evaluación](#entregables-y-criterios-de-evaluación)  
7. [Etapas de desarrollo](#etapas-de-desarrollo)  
8. [Cronograma y soporte](#cronograma-y-soporte)

---

## Resumen del proyecto y objetivos

### ¿Qué vamos a construir?
Van a crear una aplicación web **funcional** usando **React** que permita gestionar información (un CRUD básico).  

**CRUD** significa:
- **C**reate (Crear): agregar nuevos datos
- **R**ead (Leer): ver la lista de datos
- **U**pdate (Actualizar): modificar datos existentes
- **D**elete (Eliminar): borrar datos

### ¿Qué es un MVP?
MVP significa **Producto Mínimo Viable**. Es una versión simple pero **que funciona**. No necesita ser perfecto, pero **sí debe funcionar correctamente**.

### Objetivo principal
Aplicar lo que han aprendido de JavaScript y React para crear una aplicación real:

**JavaScript:**
- Trabajar con arrays (listas) y objetos
- Hacer peticiones a una API con `fetch`
- Validaciones básicas (por ejemplo, que un campo no esté vacío)

**React:**
- Crear y organizar componentes
- Manejar el estado con `useState` (guardar información en la aplicación)
- Usar `useEffect` para cargar datos cuando se abre la página
- Pasar información entre componentes con props
- Crear formularios que React controle

> [!IMPORTANT]  
> **Lo más importante:** Tu proyecto **DEBE FUNCIONAR**. Es mejor tener 2 operaciones del CRUD funcionando bien, que 4 a medias. Si necesitas, puedes omitir Update o Delete, pero asegúrate de tener al menos **Create y Read funcionando correctamente**.

---

## Criterios mínimos (MVP)
Tu proyecto debe trabajar con **una sola entidad** (por ejemplo: `tareas`, `productos`, `usuarios`, `películas`, etc.).

### 💡 Elige tu propia temática
**La temática del proyecto la propones tú.** Piensa en algo que te sea útil o interesante:

- **Relacionado con tu trabajo:** ¿Qué podrías gestionar que te ayude en tu día a día laboral?
  - Ejemplo: control de clientes, inventario de productos, registro de ventas, etc.
  
- **Relacionado con tus estudios:** ¿Qué información necesitas organizar?
  - Ejemplo: lista de cursos, apuntes, tareas pendientes, libros leídos, etc.
  
- **Relacionado con tus intereses:** ¿Qué hobby o actividad podrías gestionar?
  - Ejemplo: películas vistas, recetas de cocina, rutinas de ejercicio, gastos personales, etc.

> [!TIP]  
> Elegir algo que te interese hará el proyecto más motivador y útil. Además, será más fácil entender qué datos necesitas y cómo organizarlos.

### Funcionalidades requeridas:

1. **Read (Listar):** 
   - Mostrar todos los datos en una lista, tabla o tarjetas
   - Los datos deben venir de tu API (MockAPI o backend propio)

2. **Create (Crear):** 
   - Un formulario para agregar nuevos datos
   - Validaciones básicas (ejemplo: campos obligatorios)
   - Guardar en la API y actualizar la lista automáticamente

3. **Update (Editar) - OPCIONAL:**
   - Poder modificar un dato existente
   - Actualizar en la API

4. **Delete (Eliminar) - OPCIONAL:**
   - Botón para borrar un elemento
   - Pedir confirmación antes de eliminar
   - Actualizar la lista después de borrar

5. **Interfaz básica:**
   - Debe verse bien en computadora (desktop)
   - Bonus si también funciona en celular (mobile)

> [!TIP]  
> Pueden usar como referencia el proyecto **admin** que vimos en clase. No necesitan copiarlo, pero pueden ver cómo está estructurado.

---

## Stack y recursos
**Tecnologías principales**
- React  
- Fetch API o Axios para peticiones HTTP  
- API desarrollada en backend o MockAPI

**Recursos de apoyo**  
- [Guía para Planificar MVP de CRUD](./recursos/README.md)
- [Resources/README.md](https://github.com/jmontes50/G9Java/blob/master/Info/Resources/README.md)  
- Documentación oficial de React: <https://react.dev>  

---

## Estructura del proyecto sugerida
Una estructura mínima y clara:

```
/project-root
├─ /src
│  ├─ /components
│  │  ├─ ItemForm.jsx       # formulario crear/editar
│  │  └─ ItemList.jsx       # lista del recurso + acciones
│  ├─ /services
│  │  └─ api.js             # funciones para CRUD
│  ├─ /styles               # opcional, estilos globales o modulares
│  ├─ App.jsx
│  └─ main.jsx
├─ .env.local               # VITE_API_BASE_URL="https://...miapi.io/api/v1"
├─ package.json
└─ README.md
```

---

## Cómo iniciar el proyecto
Con React:

```bash
# 1) Crear proyecto
npm create vite@latest

#dar nombre de proyecto

cd nombre_del_proyecto

# 2) Instalar dependencias
npm install

# 4) Arrancar en desarrollo
npm run dev
```

---

## Entregables y criterios de evaluación

### � Modalidad de trabajo

El proyecto puede realizarse de **dos formas**:

- **Individual:** Trabajas solo en tu proyecto
- **En pareja (2 personas):** Pueden trabajar juntos y compartir el mismo repositorio

> [!NOTE]  
> Si trabajan en pareja, ambos deben contribuir al código (visible en los commits de Git) y ambos deben entender todo el proyecto, ya que pueden ser evaluados individualmente.

---

### �📦 ¿Qué deben entregar?

1. **Repositorio en GitHub** con:
   - Todo el código del proyecto
   - README actualizado explicando:
     - Qué hace tu aplicación
     - Cómo instalarla y ejecutarla
     - Qué tecnologías usaste
   - Archivo `.env.local` de ejemplo (sin datos sensibles)

2. **Aplicación funcionando:**
   - Mínimo 2 operaciones CRUD funcionando (recomendado: Create + Read)
   - Conexión exitosa con la API

3. **BONUS (opcional):**
   - Aplicación desplegada (deployed) en Vercel, Netlify u otro servicio
   - Las 4 operaciones CRUD completas

---

### ✅ ¿Cómo se va a evaluar?

> [!IMPORTANT]  
> **Estos son los aspectos MÁS IMPORTANTES que se van a revisar:**

| Aspecto | ¿Qué se evalúa? | Peso |
|---------|----------------|------|
| **🎯 Funcionalidad** | ¿El CRUD funciona? ¿Se conecta con la API? ¿Se pueden crear y ver datos? | ⭐⭐⭐⭐⭐ |
| **📝 Código limpio** | ¿Los componentes están bien organizados? ¿El código se entiende? ¿Tiene nombres claros? | ⭐⭐⭐⭐ |
| **⚛️ Uso de React** | ¿Usa `useState` correctamente? ¿Usa `useEffect` para cargar datos? ¿Los componentes reciben props? | ⭐⭐⭐⭐ |
| **🎨 Interfaz** | ¿Se ve presentable? ¿Es fácil de usar? | ⭐⭐⭐ |
| **📚 README** | ¿Explica bien el proyecto? ¿Tiene instrucciones claras? | ⭐⭐ |

**Recuerden:** Es mejor tener **pocas funciones que funcionen bien**, que muchas funciones a medias o con errores.  

---

## Etapas de desarrollo

### 📋 Guía paso a paso

Sigue estas etapas en orden. Cada una tiene ejemplos concretos de qué hacer:

| Etapa | ¿Qué hacer? | Ejemplo concreto | ✅ ¿Cómo sé que lo logré? |
|-------|-------------|------------------|---------------------------|
| **1. Planificar** | Decidir qué entidad vas a gestionar y qué campos tendrá | **Ejemplo:** Voy a hacer un gestor de "Tareas" con campos: `id`, `title`, `description`, `completed` | Tengo claro qué datos voy a manejar |
| **2. Configurar API** | Crear tu API en MockAPI o conectar con tu backend | **Ejemplo:** Crear proyecto en mockapi.io con endpoint `/tasks` y agregar 2-3 tareas de prueba | Puedo ver los datos en el navegador visitando la URL de la API |
| **3. Crear proyecto React** | Iniciar proyecto con Vite y configurar variables de entorno | **Ejemplo:** `npm create vite@latest` y crear archivo `.env.local` con `VITE_API_BASE_URL` | El proyecto arranca con `npm run dev` sin errores |
| **4. READ - Listar datos** | Crear componente que muestre todos los datos de la API | **Ejemplo:** Componente `TaskList.jsx` que use `useEffect` + `fetch` para traer tareas y las muestre en tarjetas | Veo la lista de tareas en pantalla cuando abro la app |
| **5. CREATE - Crear datos** | Hacer un formulario para agregar nuevos elementos | **Ejemplo:** Componente `TaskForm.jsx` con inputs controlados (`useState`) y botón que haga POST a la API | Puedo llenar el formulario, dar click en "Crear" y ver la nueva tarea en la lista |
| **6. DELETE - Eliminar** *(opcional)* | Agregar botón de eliminar en cada elemento | **Ejemplo:** Botón "🗑️ Eliminar" que pida confirmación (`window.confirm`) y haga DELETE a la API | Puedo eliminar una tarea y desaparece de la lista |
| **7. UPDATE - Editar** *(opcional)* | Permitir editar elementos existentes | **Ejemplo:** Botón "✏️ Editar" que cargue los datos en el formulario y haga PUT a la API | Puedo modificar una tarea y ver los cambios reflejados |
| **8. Mejorar UI** | Agregar estilos, mensajes de carga y errores | **Ejemplo:** Mostrar "Cargando..." mientras se obtienen datos, mensaje si hay error | La app se ve presentable y maneja errores |
| **9. Documentar** | Actualizar README con instrucciones | **Ejemplo:** Explicar cómo instalar, configurar `.env.local` y ejecutar el proyecto | Otra persona puede seguir tu README y ejecutar tu proyecto |
| **10. Entregar** | Subir a GitHub y opcionalmente desplegar | **Ejemplo:** Push a GitHub y deploy en Vercel | El repositorio está público y (bonus) la app está en línea |

### 💡 Consejos para cada etapa:

- **Etapas 1-3:** Dedica tiempo a esto. Una buena base hace todo más fácil.
- **Etapa 4 (READ):** Esta es la MÁS IMPORTANTE. Si logras esto, ya tienes mucho avanzado.
- **Etapa 5 (CREATE):** Segunda más importante. Con READ + CREATE ya tienes un proyecto funcional.
- **Etapas 6-7:** Solo si ya tienes READ y CREATE funcionando bien.
- **Etapas 8-10:** Para pulir y presentar profesionalmente.

---

## Cronograma y soporte

### 📅 Tiempo disponible
Tienen **4 semanas** para completar el proyecto (hasta la **primera semana de marzo**).

**Distribución sugerida:**
- **Semana 1:** Etapas 1-3 (Planificar, configurar API, crear proyecto)
- **Semana 2:** Etapas 4-5 (READ y CREATE funcionando)
- **Semana 3:** Etapas 6-7 (DELETE y UPDATE si aplica) + mejoras de UI
- **Semana 4:** Documentación, pruebas finales y entrega

### 🆘 ¿Qué hacer si te bloqueas?

> [!WARNING]  
> **REGLA DE ORO: No te quedes bloqueado más de 1 día**

**Si llevas más de un día sin poder resolver un error:**

1. ✅ **Escribe INMEDIATAMENTE** en el grupo o canal de soporte
2. ✅ Comparte:
   - Qué estás intentando hacer
   - Qué error te sale (captura de pantalla)
   - Qué has intentado para solucionarlo
3. ✅ Mientras esperas ayuda, **avanza con otra parte** del proyecto

**Recuerda:**
- Es normal tener errores, todos los desarrolladores los tienen
- Pedir ayuda NO es trampa, es parte del aprendizaje
- Es mejor preguntar "temprano" que quedarse bloqueado
- Si un error te tiene bloqueado, trabaja en otra funcionalidad mientras

### 🎯 Mentalidad para el proyecto

- ✅ **Avanza constantemente:** Mejor poco pero todos los días, que todo de golpe
- ✅ **Prioriza lo funcional:** Primero que funcione, luego que se vea bonito
- ✅ **Prueba frecuentemente:** No escribas mucho código sin probar que funciona
- ✅ **Commits frecuentes:** Guarda tu progreso en Git regularmente
- ✅ **Pide ayuda a tiempo:** No esperes a estar desesperado

---

**¡Éxito con su proyecto! 🚀**
