import { UsuarioClass } from './UsuarioClass'

export class AdminUsuario extends UsuarioClass {
  constructor(
    public permisos: string[],
    id: number,
    nombre: string,
    edad: number,
    email: string,
    activo: boolean
  ) {
    super(id, nombre, edad, email, activo)
  }
}
