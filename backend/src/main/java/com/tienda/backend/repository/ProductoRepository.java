package com.tienda.backend.repository;

import com.tienda.backend.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductoRepository extends JpaRepository<Producto, Long> {
    
    // Método para buscar productos próximos a caducar en los próximos 'dias' días
   List<Producto> findByFechaCaducidadBefore(java.time.LocalDate fecha);
}
