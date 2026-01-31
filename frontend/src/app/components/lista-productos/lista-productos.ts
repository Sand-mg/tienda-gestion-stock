import { Component, inject, OnInit, computed } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-lista-productos',
  imports: [CommonModule],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.scss',
})
export class ListaProductos implements OnInit {
  protected productoService = inject(ProductoService);

  // Signal derivada: nos dice cuántos productos están bajo mínimos de stock
  productosEnAlerta = computed(() => 
    this.productoService.productos$().filter(p => p.stockActual < 5).length
  );

  ngOnInit() {
    this.productoService.actualizarProductos();
  }

  esProximoACaducar(fecha: string): boolean {
    if (!fecha) return false;
    const diasRestantes = (new Date(fecha).getTime() - new Date().getTime()) / (1000 * 3600 * 24);
    return diasRestantes < 7 && diasRestantes > 0;
  }

}
