import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { AngularFirestore } from '@angular/fire/compat/firestore'  

declare let google;

@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor(private firestore: AngularFirestore) {}

  async create(collection, dato){
    try {
      return await this.firestore.collection(collection).add(dato);
    }  catch(error){
      console.log("error en: getAll ",error)
    }
      
           
   }

  async initMap() {
    const map = await new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }
  printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();

    console.log('Current position:', coordinates);
  };
}