export class Cliente{
    id: number;
    nombreCliente: string;
    email: string;
    telefono: number;
    direccion: string;
    company: string;

    constructor (
        id:number, 
        nombreCliente: string,
        email: string,
        telefono: number,
        direccion: string,
        company: string
        ){
            this.id = id;
            this.nombreCliente = nombreCliente;
            this.email = email;
            this.telefono = telefono;
            this.direccion = direccion;
            this.company = company; 

    }
}