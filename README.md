# insulinum.io [![Build Status](https://magnum.travis-ci.com/orggue/insulinum-dash.svg?token=x3vLcsQVEzf1kfJyx1Uv&branch=master)](https://magnum.travis-ci.com/orggue/insulinum-dash) [![Circle CI](https://circleci.com/gh/orggue/insulinum-dash.svg?style=svg&circle-token=3be7bbbd9f3f6ae7ed53bd3cb83f9a54fbef9ffc)](https://circleci.com/gh/orggue/insulinum-dash)

Firsht JSON API for INSULINUM build in node.js and express

## Install

```shell
  $ git clone https://github.com/orggue/insulinum-dash.git
  $ cd insulinum-dash
  $ npm install
```

## Run

```shell
  $ node server
```

## Tests

```shell
  $ make test
```

## Gulp

Si estas en modo desarrollo el archivo gulpfile corre el servidor a cada cambio que haces en el directirio, corre las pruebas del api y compila struls a css y minifica tanto el css como js en un solo archivo añadiendo la tesminacion ".min".

```shell
  $ gulp
```
<img src="https://raw.githubusercontent.com/orggue/insulinum-dash/master/landing.png?token=AEPo-0RHib6hN7Y5-8bOM-ypKRipkJSoks5VJPXgwA%3D%3D" height="800px"/>
# API Rest
Insulinum is an app allow you in an intuitive and funny way to make a control of your levels of insulin.

## HTTP method allowed

|  Method  |              Description                  |
| -------- | ----------------------------------------- |
| `GET`    | Get a resource or get a list of resources |
| `POST`   | Create a control                          |
| `PUT`    | Update (next version)                     |
| `DELETE` | Delete a resource                         |

## Code Response

|  Code  |                         Description                          |
| ------ | ------------------------------------------------------------ |
| `200`  | Success                                                      |
| `201`  | Success - new resource build.                                |
| `204`  | Success - there is not a resource to response                |
| `400`  | Bad Request - i.e. invalid request                           |
| `401`  | Unauthorized - no token for this resource                    |
| `404`  | Not Found - resource doesn't exist                           |
| `422`  | Unprocessable Entity - i.e. validation error                 |
| `429`  | Request exceeded the limit                                   |
| `500`  | Server error                                                 |
| `503`  | Server holidays                                              |

## Create a new control

  [POST] /api/controls

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

  Response

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


## Get a control
  GET /api/controls/1234

  Response

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


## Delete a control

  DELETE /api/controls/id (204)


## Get a list of controls
  GET /api/controls/

  Response

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


## Update a control
  PUT /controls/123

    {

    }

  Response

    {

    }
