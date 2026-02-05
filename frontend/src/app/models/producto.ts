export interface Producto {
    id?: number;
    nombre: string;
    categoria: string;
    precio: number;
    stockActual: number;
    stock_actual: string;
    fechaCaducidad: string; // Formato ISO 8601 (YYYY-MM-DD)
}
