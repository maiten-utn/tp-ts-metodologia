import { UsuarioInterface } from '../types/user.types'

export class UsuarioClass implements UsuarioInterface {
  id: number
  nombre: string
  edad: number
  email: string
  activo: boolean

  constructor(
    id: number,
    nombre: string,
    edad: number,
    email: string,
    activo: boolean
  ) {
    this.id = id
    this.nombre = nombre
    this.edad = edad
    this.email = email
    this.activo = activo
  }

  /**
   * cambie el estado de activo de true a false y viceversa.
   */
  public toggleActivo() {
    this.activo = !this.activo
  }
}
