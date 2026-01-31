export interface Producto {
    id?: number;
    nombre: string;
    categoria: string;
    precio: number;
    stockActual: number;
    fechaCaducidad: string; // Formato ISO 8601 (YYYY-MM-DD)
}
