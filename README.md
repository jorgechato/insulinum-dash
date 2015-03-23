# insulinum.io
[![Build Status](https://travis-ci.org/orggue/MyBeat-server.svg)](https://travis-ci.org/orggue/MyBeat-server)

La primera implementación de un API de JSON para el cliente de INSULINUM, usando node.js, y express

## Instalación

```shell
  $ git clone https://github.com/orggue/insulinum-dash.git
  $ cd insulinum-dash
  $ npm install
```

## Ejecución

```shell
  $ node server
```

## Pruebas

```shell
  $ make test
```

## Gulp

Si estas en modo desarrollo el archivo gulpfile corre el servidor a cada cambio que haces en el directirio, corre las pruebas del api y compila struls a css y minifica tanto el css como js en un solo archivo añadiendo la tesminacion ".min".

```shell
  $ gulp
```
<img src="https://raw.githubusercontent.com/orggue/insulinum-dash/master/landing.png?token=AEPo--BLpbmV0fVuhWVsKnTQ-TBzmDoHks5VGXKLwA%3D%3D" height="800px"/>
# API Rest
MyBeat es una aplicacion que me permite controlar los niveles de insulina de una manera divertida e intuitiva

## Metodos HTTP permitidos

|  Método  |              Descripción               |
| -------- | -------------------------------------- |
| `GET`    | Obtener un recurso o lista de recursos |
| `POST`   | Crear un recurso                       |
| `PUT`    | Actualizar (siguiente version)         |
| `DELETE` | Eliminar un recurso                    |

## Códigos de Respuesta

| Código |                         Descripción                          |
| ------ | ------------------------------------------------------------ |
| `200`  | Success                                                      |
| `201`  | Success - nuevo recurso creado.                              |
| `204`  | Success - no hay contenido para responder                    |
| `400`  | Bad Request - i.e. su solicitud no se pudo evaluar           |
| `401`  | Unauthorized - usuario no esta autenticado para este recurso |
| `404`  | Not Found - recurso no existe                                |
| `422`  | Unprocessable Entity - i.e. errores de validación            |
| `429`  | Limite de uso excedido, intente mas tarde                    |
| `500`  | Error de servidor                                            |
| `503`  | Servicio no disponible                                       |

## Crear un control nuevo

  Solicitud [POST] /api/controls

    {
      "control" : {
          "date" : "15-12-2014",
          "time" : "15:31:12",
          "glucose" : "140",
          "insulin" : "12",
          "type" : "quickly",
          "daytime" : "breakfast",
          "note" : "something"
      }
    }

  Respuesta

    {
      "controls" : {
          "id" : "1234",
          "date" : "15-12-2014",
          "time" : "15:30:12",
          "glucose" : "140",
          "insulin" : "12",
          "type" : "quickly",
          "daytime" : "breakfast",
          "note" : "something"
      }
    }


## Obtener un control
  Solicitud GET /api/controls/1234

  Respuesta

    {
      "controls" : {
          "id" : "1234",
          "date" : "15-12-2014",
          "time" : "15:30:12",
          "glucose" : "140",
          "insulin" : "12",
          "type" : "quickly",
          "daytime" : "breakfast",
          "note" : "something"
      }
    }


## Eliminar un control

  Solicitud DELETE /api/controls/id (204)


## Obtener una lista de notas
  Solicitud GET /api/controls/

  Respuesta

    [{
      "controls" : {
          "id" : "1234",
          "date" : "15-12-2014",
          "time" : "15:30:12",
          "glucose" : "140",
          "insulin" : "12",
          "type" : "quickly",
          "daytime" : "breakfast",
          "note" : "something"
      }
    },
    {
      "controls" : {
          "id" : "1234",
          "date" : "26-04-2014",
          "time" : "10:35:12",
          "glucose" : "145",
          "insulin" : "52",
          "type" : "quickly",
          "daytime" : "breakfast",
          "note" : "something"
      }
    }]


## Actualizar un control
  Solicitud PUT /controls/123

    {

    }

  Respuesta

    {

    }
