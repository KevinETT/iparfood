import { Plato } from './plato'; // Ajusta la ruta a tu interfaz

export class PlatoMapper {
  
  // Convierte lo que el formulario entiende (Objeto) 
  // a lo que el DTO de Java espera (ID plano)
  static toPostDto(plato: Plato) {
    return {
      nombre: plato.nombre,
      precio: plato.precio,
      descripcion: plato.descripcion,
      tipoComidaId: plato.tipoComida.id // <--- El truco está aquí
    };
  }

  static toPutDto(plato: Plato) {
    return {
      id: plato.id,
      ...this.toPostDto(plato)
    };
  }
}