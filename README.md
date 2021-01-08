# path-composedPath-polyfill.js
(EN) Small polyfill script of Event.path and Event.composedPath().\
(ES) Pequeño script polyfill de Event.path y Event.composedPath().

## Compatibility - Compatibilidad

(EN) For internet explorer 9 or higher.\
(ES) Para internet explorer 9 o superior.

## How to use? - ¿Cómo utilizarlo?

(EN) This polyfill must be put in the head tag of html document.\
(ES) Este polyfill debe ser puesta en la etiqueta head del documento html.

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
(EN) The same as modern browsers.\
(ES) La misma que los navegadores modernos.

## Authors - Autores

* **Emanuel Rojas Vásquez** - *Initial work* - [erovas](https://github.com/erovas)

## License - Licencia

(EN) This project is licensed under the MIT License - see the [LICENSE](https://github.com/erovas/path-composedPath-polyfill.js/blob/main/LICENSE) file for details.\
(ES) Este proyecto está licenciado bajo Licencia MIT - ver el archivo [LICENCIA](https://github.com/erovas/path-composedPath-polyfill.js/blob/main/LICENSE) para mas detalles.