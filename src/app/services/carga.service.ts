import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../models/file-item';
import { FileItems } from '../models/file-items';



@Injectable()
export class cargaservie {
//Definimos el nombre de la carpeta donde se guardaran las imagenes del usuario
  private CARPETA_IMAGENES = 'img';
  private IMAGENES = 'imagenes';
  private url = 'https://personal-48424.firebaseio.com'


  constructor( private db: AngularFirestore,private http: HttpClient ) { }


  cargarImagenesFirebase( imagenes: FileItem[] ) {

    const storageRef = firebase.storage().ref();
 
    for (const item of imagenes) {
      item.estaSubiendo = true;
      if (item.progreso >= 100) {
        continue;
      }
 
      const uploadTask: firebase.storage.UploadTask =
        storageRef.child(`${this.IMAGENES}/${item.nombreArchivo}`)
          .put(item.archivo);
 
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: firebase.storage.UploadTaskSnapshot) => item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        (error) => console.error('Error uploading', error),
        // If everything goes ok
        () => {
          console.log('Image uploaded succesfully');
          uploadTask.snapshot.ref.getDownloadURL().then(
            (onfullfilled: any) => {
              console.log('(promise) the download url is:  ' + onfullfilled);
              item.url = onfullfilled;
              console.log(item.url);
              item.estaSubiendo = false;
              this.guardarImagen({
                nombre: item.nombreArchivo,
                url: item.url
              });
            },
            (onrejected: any) => {
              console.log('(promise) the download url has been rejected');
            });
        }
      );
    }
  }  


//TODO: Cambiar la vaiable para que al llamarla en el componente no se duplique.
  private guardarImagen( imagen: { nombre: string, url: string } ) {

    this.db.collection(`/${ this.CARPETA_IMAGENES }`)
            .add( imagen );

  }

  cargar( imagenes: FileItems[] ) {

//Hacemos referencia al storage de firebase
    const storageRef = firebase.storage().ref();
 //Barra de progreso de carga de imagen
    for (const item of imagenes) {
      item.estaSubiendo = true;
      if (item.progreso >= 100) {
        continue;
      }
 //Estamos utilizando una promesa para obtener la url de la imagen cargada
      const uploadTask: firebase.storage.UploadTask =
        storageRef.child(`${this.IMAGENES}/${item.nombreArchivo}`)
          .put(item.archivo);
 
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: firebase.storage.UploadTaskSnapshot) => item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        (error) => console.error('Error uploading', error),
        // If everything goes ok
        () => {
          console.log('Image uploaded succesfully');
          uploadTask.snapshot.ref.getDownloadURL().then(
            
            (onfullfilled: any) => {
              console.log('(promise) the download url is:  ' + onfullfilled);
              item.url = onfullfilled;
              console.log(item.url);
              item.estaSubiendo = false;

              this.load({
                nombre: item.nombreArchivo,
                url: item.url
                
              });

            },
            (onrejected: any) => {
              console.log('(promise) the download url has been rejected');
            });
        }
      );
    }
  }  
//Hacemos referencia al nombre de la carpeta al cual se carga al storage
  private load( imagen: { nombre: string, url: string } ) {

    this.db.collection(`/${ this.IMAGENES }`)
            .add( imagen );

  }





}
