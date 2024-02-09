# Ejercicio4: Pensamiento lógico
## Descripción 
Imagina que estás construyendo un sistema de gestión de vídeos. Diseña un modelo de
base de datos que incluya tablas para vídeos, autores, colaboradores, comentarios, reviews
y usuarios. Asegúrate de incluir las claves primarias, las claves foráneas y las restricciones
de integridad necesarias para que el sistema funcione correctamente.


## Modelo de Base de Datos

### Tabla: Video
- **idvideo (PK):** Identificador único del vídeo.
- **titulo:** Título del vídeo.
- **descripcion:** Descripción del vídeo.
- **duración:** Duración(tiempo) del vídeo.
- **fecha_publicacion:** Fecha de publicación del vídeo.
- **url:** URL  del vídeo.

### Tabla: Autor
- **autor_id (PK):** Identificador único del autor.
- **nombre:** Nombre del autor.
- **correo:** Correo electrónico del autor.

### Tabla: Colaborador
- **idcolaborador (PK):** Identificador único del colaborador.
- **nombre:** Nombre del colaborador.
- **apellido:** Apellido del colaborador.
- **correo:** Correo electrónico del colaborador.
- **rol:** Rol del colaborador en el video (Ej: Editor).

### Tabla: Comentario
- **idcomentario (PK):** Identificador único del comentario.
- **fecha_publicacion (PK):** Fecha de publicación del comentario.
- **texto_comentario:** Contenido del comentario.
- **video_idvideo (FK):** Clave foránea que referencia al video relacionado
- **usuario_idusuario (FK):** Clave foránea que referencia al usuario que realizo el comentario.

### Tabla: Review
- **idreview (PK):** Identificador único de la review.
- **puntaje:** Puntuación asignada a la review.
- **contenido:** Contenido de la review.
- **usuario_idusuario (FK):** Clave foránea que referencia al usuario que hizo la review.
- **video]_idvideo (FK):** Clave foránea que referencia al vídeo relacionado.

### Tabla: Usuario
- **idusuario (PK):** Identificador único del usuario.
- **nombre:** Nombre del usuario.
- **correo:** Correo electrónico del usuario.

## Significado de Cada Tabla

- **Vídeo:** Almacena información sobre los vídeos.
- **Autor:** Contiene detalles sobre los autores.
- **Colaborador:** Registra información sobre los colaboradores involucrados en la creación de los vídeos.
- **Comentario:** Almacena comentarios realizados por usuarios en relación con los vídeos.
- **Review:** Guarda las diferentes reseñas que los usuarios hacen sobre los vídeos.
- **Usuario:** Contiene información sobre los usuarios del sistema.

## Restricciones de integridad:

* Cada vídeo debe tener varios autores.
* Un autor puede tener varios vídeos.
* Un colaborador puede participar en varios vídeos.
* Un usuario puede realizar varios comentarios y reviews.
* Un vídeo puede tener varios comentarios y reviews.