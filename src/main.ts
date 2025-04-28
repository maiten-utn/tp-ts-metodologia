import './style.css'

//----------🔵 PARTE 2 -------------
//📌 Punto 1
import { UsuarioInterface } from './types/user.types'

//📌 Punto 2
import { usuarios } from './constants/users'

const filterUsersByActive = (arr: UsuarioInterface[]): UsuarioInterface[] => {
  const activeUsers = arr.filter(item => item.activo === true)
  return activeUsers
}

console.log('📌 Punto 2:', filterUsersByActive(usuarios))

//----------🔵 PARTE 3 -------------
//📌 Punto 3
import { UsuarioClass } from './class/UsuarioClass'
import { AdminUsuario } from './class/AdminUsuario'

const userInstance = new UsuarioClass(
  11,
  'Juan Perez',
  22,
  'mail@example.com',
  false
)
const userInstance2 = new UsuarioClass(
  12,
  'Martin Gonzalez',
  38,
  'mail@example.com',
  true
)

console.log(`📌 Punto 3 \nUser Instance 1 - ${userInstance.nombre} \nEdad: ${userInstance.edad} \nCorreo:${userInstance.email} \nActive: ${userInstance.activo} \n\nUser Instance 2 - ${userInstance2.nombre} \nEdad: ${userInstance2.edad} \nCorreo:${userInstance2.email} \nActive: ${userInstance2.activo}
  `)
userInstance.toggleActivo()
console.log(
  `🔸 Probando el metodo toggleActivo \nActive: ${userInstance.activo}`
)

//📌 Punto 4
const adminUser = new AdminUsuario(
  ['READ', 'CREATE', 'DELETE', 'UPDATE'],
  13,
  'Mario',
  44,
  'mario@example.com',
  true
)
console.log(
  `📌 Punto 4 \nUser Instance 1 - ${adminUser.nombre} \nEdad: ${
    adminUser.edad
  } \nCorreo:${adminUser.email} \nActive: ${
    adminUser.activo
  } \nPermisos: ${adminUser.permisos.join(', ')}`
)

//----------🔵 PARTE 4 -------------
//📌 Punto 5

import { productos } from './constants/products'
import { Product } from './types/product.type'

const productosDisponibles = productos.filter(product => product.stock > 0)

console.log(
  `📌 Punto 5 \n\nUSANDO MAP() \n\n${productos
    .map(product => `${product.nombre.trim()}\n`)
    .join('')} \nUSANDO FILTER() \n\n${productosDisponibles
    .map(
      product =>
        `${product.nombre} | Stock: ${product.stock} | Precio: ${product.precio} \n`
    )
    .join('')}`
)

//📌 Punto 6
const newProduct: Product = { id: 33, nombre: 'Pepe', precio: 1231, stock: 23 }
console.log(
  `📌 Punto 6\n\nUSANDO SORT()\n\n${JSON.stringify(
    productos.sort((a, b) => a.precio - b.precio),
    null,
    2
  )}\n\nUSANDO PUSH()\n\n${productos.push(
    newProduct
  )}\n\nUSANDO POP()\n\n${JSON.stringify(productos.pop())}`
)

//----------🔵 PARTE 5 -------------
//📌 Punto 7

function getRandomItem<T>(array: Array<any>): T {
  const length = array.length
  const ramdon = Math.floor(Math.random() * (length - 0))
  return array[ramdon]
}

const numberArray = [1, 2, 4, 54, 65, 19, 3, 24]
const stringArray = ['hola', 'mundo', 'en', 'typescript']
const objectsArray = productos

console.log(
  `📌 Punto 7\n\nENVIANDO UN ARRAY DE NUMEROS\n\n${JSON.stringify(
    getRandomItem(numberArray)
  )}\n\nENVIANDO UN ARRAY DE STRINGS\n\n${JSON.stringify(
    getRandomItem(stringArray)
  )}\n\nENVIANDO UN ARRAY DE OBJETOS\n\n${JSON.stringify(
    getRandomItem(objectsArray)
  )}`
)

//📌 Ejercicio 8

interface Caja<T> {
  contenido: T
}

class CajaClass<T> implements Caja<T> {
  contenido: T

  constructor(contenido: T) {
    this.contenido = contenido
  }
}

const cajaDeNumero = new CajaClass<number>(123)
const cajaDeTexto = new CajaClass<string>('Hola mundo')
const cajaDeObjeto = new CajaClass<{ id: number; nombre: string }>({
  id: 1,
  nombre: 'Producto',
})

console.log(
  `📌 Ejercicio 8\n\nCAJA DE NUMERO\n\n${JSON.stringify(
    cajaDeNumero,
    null,
    2
  )}\n\nCAJA DE TEXTO\n\n${JSON.stringify(
    cajaDeTexto,
    null,
    2
  )}\n\nCAJA DE OBJETO\n\n${JSON.stringify(cajaDeObjeto, null, 2)}`
)

//----------🔵 PARTE 6 -------------
//📌 Ejercicio 9

function obtenerDatos(): Promise<{ id: number; nombre: string }[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, nombre: 'Juan' },
        { id: 2, nombre: 'Ana' },
        { id: 3, nombre: 'Pedro' },
      ])
    }, 3000)
  })
}

async function mostrarDatos() {
  const datos = await obtenerDatos()
  console.log(
    `📌 Ejercicio 9\n\nDATOS OBTENIDOS:\n\n${JSON.stringify(datos, null, 2)}`
  )
}

mostrarDatos()

//📌 Ejercicio 10

async function obtenerUsuarios() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const usuarios = await response.json()
    console.log(
      `📌 Ejercicio 10\n\nUSUARIOS OBTENIDOS:\n\n${JSON.stringify(
        usuarios,
        null,
        2
      )}`
    )
  } catch (error) {
    console.error('Error al obtener usuarios:', error)
  }
}

obtenerUsuarios()

//----------🔵 PARTE 7 -------------
//📌 Ejercicio 11

async function renderizarUsuarios() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const usuarios = await response.json()

    const lista = document.getElementById('lista-usuarios')

    if (lista) {
      lista.innerHTML = usuarios
        .map(
          (usuario: { name: string; email: string }) =>
            `<li><strong>${usuario.name}</strong> - ${usuario.email}</li>`
        )
        .join('')
    }
  } catch (error) {
    console.error('Error al renderizar usuarios:', error)
  }
}

// 📌 Ejercicio 12

const btn = document.getElementById('btn-lista')

btn?.addEventListener('click', () => {
  renderizarUsuarios()
})
