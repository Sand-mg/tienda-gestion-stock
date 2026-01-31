import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { Producto } from '../models/producto';
@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private http = inject(HttpClient);
  private apiUrl = '/api/productos';

  // Estado reactivo de los productos
  #productos = signal<Producto[]>([]);
  productos$ = this.#productos.asReadonly();

  // Obtener todos los productos
  async actualizarProductos(){
    try {
      const data = await firstValueFrom(this.http.get<Producto[]>(this.apiUrl));
      this.#productos.set(data);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }

  } 
}
