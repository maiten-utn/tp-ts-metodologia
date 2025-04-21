// 📌 Diferencia entre `interface` y `type` en TypeScript:
//
// - Ambos se usan para definir la forma de un objeto o estructura de datos.
// - `interface` está pensado específicamente para describir la forma de objetos y puede extenderse fácilmente.
// - `type` es más flexible: puede representar uniones, primitivas, funciones, y más.
// - Si solo vas a definir la forma de un objeto, `interface` suele ser preferido.
// - Si necesitas tipos complejos (como uniones o funciones), `type` es más adecuado.

export interface UsuarioInterface {
  id: number
  nombre: string
  edad: number
  email: string
  activo: boolean
}

export type UsuarioType = {
  id: number
  nombre: string
  edad: number
  email: string
  activo: boolean
}
