# path-composedPath-polyfill.js
Small polyfill script of Event.path and Event.composedPath().

## Compatibility
For internet explorer 9 or higher.

## How to use it?

This polyfill must be put in the head tag of html document.

``` html
<html>
    <head>
        <title> My page - Mi página </title>
        <script src="path-composedPath-polyfill.js"></script>
    </head>
    <body>
        <!-- page content - contenido de la página -->        

        <button> Click me! - ¡Clickeame! </button>

        <script>
            document.onclick = function(event){
                console.log(event);                 //Object - Objeto
                console.log(event.path);            //Array
                console.log(event.composedPath());  //Array
            }
        </script>
    </body>
</html>
```

## API
The same as modern browsers.

## Authors - Autores

* **Emanuel Rojas Vásquez** - *Initial work* - [erovas](https://github.com/erovas)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/erovas/path-composedPath-polyfill.js/blob/main/LICENSE) file for details.\


# Spanish

# path-composedPath-polyfill.js
Pequeño script polyfill de Event.path y Event.composedPath().

## Compatibilidad
Para internet explorer 9 o superior.

## ¿Cómo utilizarlo?

Este polyfill debe ser puesta en la etiqueta head del documento html.

``` html
<html>
    <head>
        <title> My page - Mi página </title>
        <script src="path-composedPath-polyfill.js"></script>
    </head>
    <body>
        <!-- page content - contenido de la página -->        

        <button> Click me! - ¡Clickeame! </button>

        <script>
            document.onclick = function(event){
                console.log(event);                 //Object - Objeto
                console.log(event.path);            //Array
                console.log(event.composedPath());  //Array
            }
        </script>
    </body>
</html>
```

## API
La misma que los navegadores modernos.

## Autores

* **Emanuel Rojas Vásquez** - *Initial work* - [erovas](https://github.com/erovas)

## Licencia

Este proyecto está licenciado bajo Licencia MIT - ver el archivo [LICENCIA](https://github.com/erovas/path-composedPath-polyfill.js/blob/main/LICENSE) para mas detalles.
