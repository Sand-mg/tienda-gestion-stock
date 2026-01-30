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
    private Integer stockActual;
    private LocalDate fechaIngreso;
    private LocalDate fechaCaducidad;
    
}
