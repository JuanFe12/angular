

export class FileItem {
   
    public archivo: File;
    public nombreArchivo: string;
    public url: string;
    public estaSubiendo: boolean;
    public progreso: number;

    constructor( archivo: File ) {

        this.archivo = archivo;
        this.nombreArchivo = archivo.name;
        this.url

        this.estaSubiendo = false;
        this.progreso = 0;

    }

}
