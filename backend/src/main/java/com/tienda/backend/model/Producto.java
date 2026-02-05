package com.tienda.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

import org.springframework.cglib.core.Local;

@Data
@Entity
//@Table(name = "productos")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        private String nombre;
        private String categoria;
        private Double precio;
    @Column(name = "stock_actual")
        private Integer stockActual;

    @Column(name = "fecha_ingreso")
        private LocalDate fechaIngreso;

    @Column(name = "fecha_caducidad")
        private LocalDate fechaCaducidad;
    
}
