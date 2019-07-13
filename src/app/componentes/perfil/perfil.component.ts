import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { FileItem } from '../../models/file-item';
import { cargaservie } from '../../services/carga.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';





export interface Item { nombre: string; url: string; }
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.sass']
})



export class PerfilComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  usuario: UsuarioModel = new UsuarioModel()
  archivos:FileItem[] = []
  estasobredrop = false
  nombre: any = ""
  index: any =""
  event: any
  megusta = 0;
  Comments: any = "";
  comentarios: any = []


  private contador = 0
//Estoy mostrando las imagenes cargadas por en el usuario
  constructor(private _Carga: cargaservie,private afs: AngularFirestore) { 
    this.itemsCollection = afs.collection<Item>('imagenes');

    this.items = this.itemsCollection.valueChanges();
  }

//Mostrar el nombre del usuario registrado
  ngOnInit() {
    this.usuario.nombre = localStorage.getItem('nombre');
    
  }
//TODO: Organizar que al cargar la imagen no se duplique.
  cargarImagenes() {
    this._Carga.cargarImagenesFirebase( this.archivos );
  }
  //TODO: al subir la imagen, que actualice por la nueva y elimine la vieja.

  subir() {
    this._Carga.cargar(this.archivos)
  }
  prueba(event){
     console.log(event)
  }

   myFunction(megusta) {
    megusta = megusta + 1;
    this.megusta = megusta;
    document.getElementById("demo").textContent = megusta;
    console.log(this.megusta)
  }

   comentar(){


  //Agregamos un array y lo ordenamos al revez.
   this.comentarios.push(this.Comments);
   this.comentarios.sort(this.Comments)
   console.log(this.comentarios)

        
    }
    
}



 




 

