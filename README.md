# Avent JS - 2021

En este repositorio estare subiendo mi resolucion a los ejercicios del Advent JS edición de 2021, los test a los retos, una breve explicación de resolución, además de algunas alternativas a la resolucion de los retos.

Si quieres poner en practica tus conocimientos en JavaScript puedes intentar resolver los retos entrando a [AdventJS2021](https://2021.adventjs.dev/)

![AdventJS2021](https://i.pinimg.com/564x/e1/e0/8d/e1e08d9c5c113cd586d1dca56ae8eac9.jpg "AdventJS")

## <img src="https://adventjs.dev/android-icon-192x192.png" width="20" height="20" /> <strong> [AdventJS](https://adventjs.dev/es) es una iniciativa de [@midudev](https://midu.dev/)</strong>

## Retos 
---

| Reto | Titulo | Solución | Dificultad[^1] |
| :--: | :----: | :------: | :------------: |
| #01  | [Contando ovejas para dormir](https://2021.adventjs.dev/challenges/01)   | [Ver Solucion](./src/challenge-01/)       | 🟢 |
| #02  | [¡Ayuda al elfo a listar los regalos!](https://2021.adventjs.dev/challenges/02)   | [Ver Solucion](./src/challenge-02/)       | 🟢 |
| #03  | [El Grinch quiere fastidiar la Navidad](https://2021.adventjs.dev/challenges/03)   | [Ver Solucion](./src/challenge-03/)       | 🟠 |
| #04  | [¡Es hora de poner la navidad en casa!](https://2021.adventjs.dev/challenges/04)   | [Ver Solucion](./src/challenge-04/)       | 🟠 |
| #05  | [Contando los días para los regalos](https://2021.adventjs.dev/challenges/05)   | [Ver Solucion](./src/challenge-05/)       | 🟢 |
| #06  | [Rematando los exámenes finales](https://2021.adventjs.dev/challenges/06)   | [Ver Solucion](./src/challenge-06/)       | 🟠 |
| #07  | [Buscando en el almacén...](https://2021.adventjs.dev/challenges/07)   | [Ver Solucion](./src/challenge-07/)       | 🟠 |
| #08  | [La locura de las criptomonedas](https://2021.adventjs.dev/challenges/08)   | [Ver Solucion](./src/challenge-08/)       | 🟠 |
| #09  | [Agrupando cosas automáticamente](https://2021.adventjs.dev/challenges/09)   | [Ver Solucion](./src/challenge-09/)       | 🔴 |
| #10  | [La máquina de cambio](https://2021.adventjs.dev/challenges/10)   | [Ver Solucion](./src/challenge-10/)       | 🔴 |
| #11  | [¿Vale la pena la tarjeta fidelidad del cine?](https://2021.adventjs.dev/challenges/11)   | [Ver Solucion](./src/challenge-11/)       | 🟠 |
| #12  | [La ruta perfecta para dejar los regalos](https://2021.adventjs.dev/challenges/12)   | [Ver Solucion](./src/challenge-12/)       | 🔴 |
| #13  | [Envuelve regalos con asteriscos](https://2021.adventjs.dev/challenges/13)   | [Ver Solucion](./src/challenge-13/)       | 🟢 |
| #14  | [En busca del reno perdido](https://2021.adventjs.dev/challenges/14)   | [Ver Solucion](./src/challenge-14/)       | 🟠 |
| #15  | [El salto perfecto](https://2021.adventjs.dev/challenges/15)   | [Ver Solucion](./src/challenge-15/)       | 🟠 |
| #16  | [Descifrando los números...](https://2021.adventjs.dev/challenges/16)   | [Ver Solucion](./src/challenge-16/)       | 🟢 |
| #17  | [La locura de enviar paquetes en esta época](https://2021.adventjs.dev/challenges/17)   | [Ver Solucion](./src/challenge-17/)       | 🔴 |
| #18  | [El sistema operativo de Santa Claus](https://2021.adventjs.dev/challenges/18)   | [Ver Solucion](./src/challenge-18/)       | 🟢 |
| #19  | [¿Qué deberíamos aprender en Platzi?](https://2021.adventjs.dev/challenges/19)   | [Ver Solucion](./src/challenge-19/)       | 🟠 |
| #20  | [¿Una carta de pangramas? ¡QUÉ!](https://2021.adventjs.dev/challenges/20)   | [Ver Solucion](./src/challenge-20/)       | 🟢 |
| #21  | [La ruta con los regalos](https://2021.adventjs.dev/challenges/21)   | [Ver Solucion](./src/challenge-21/)       | 🔴 |
| #22  | [¿Cuantos adornos necesita el árbol?](https://2021.adventjs.dev/challenges/22)   | [Ver Solucion](./src/challenge-22/)       | 🟠 |
| #23  | [¿Puedes reconfigurar las fábricas para no parar de crear regalos?](https://2021.adventjs.dev/challenges/23)   | [Ver Solucion](./src/challenge-23/)       | 🟣 |
| #24  | [Comparando árboles de Navidad](https://2021.adventjs.dev/challenges/24)   | [Ver Solucion](./src/challenge-24/)       | 🟠 |
| #25  | [El último juego y hasta el año que viene 👋](https://2021.adventjs.dev/challenges/25)   | [Ver Solucion](./src/challenge-25/)       | 🟠 |
| #26  | [El reto Screto! WTF!!!](https://2021.adventjs.dev/challenges/26)   | [Ver Solucion](./src/challenge-26/)       | 🟢 |

[^1]: **Dificultad**: 🟢 Facil 🟠 Normal 🔴 Dificil 🟣 Muy Dificil

## Instalación

Clona este repositorio usando: 

```bash
git clone https://github.com/chicho69-cesar/adventJS-2021.git
```

Instala Jest para realizar los tests de los retos: 

```bash
npm install jest, @types/jest
```

## Tests

Puedes comprobar todos los tests de los retos usando el comando: 

```bash
npm run jest
```

O Tambie puedes ejecutar los siguientes comandos, para ejecutar tanto todos los tests como los tests individuales de cada reto:

```bash
npm run test # Para correr todos los test de todos los retos
npm run test:n # n siendo el numero del reto, por ejemplo
npm run test:1 # Correra el test del reto 1
```