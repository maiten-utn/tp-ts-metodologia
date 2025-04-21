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

//📌 Punto 5
