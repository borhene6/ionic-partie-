import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonIcon, IonButton } from '@ionic/react';
import { arrowBack, arrowForward } from 'ionicons/icons';
import api from '../axios';

const AllAnnouncements = () => {
  const [announcements,setAnnouncements]=useState([])
  
useEffect(()=>{
 
   loadAnoun()
},[])
const loadAnoun=async()=>{
  try {
   
const response = await api.get(`/allann`,);


if(response.data){
  setAnnouncements(response.data)

}
} catch (error) {
console.error(error);
}
}

 return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton slot="start" routerLink="/home">
            <IonIcon slot="icon-only" icon={arrowBack} />
          </IonButton>
          <IonTitle>AllAnnouncements</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {announcements.map(announcement => (
            <IonItem key={announcement.id}>
              <IonLabel>
                <h2>{announcement.title}</h2>
                <p>{announcement.description}</p>
              </IonLabel>
              <IonButton slot="end" routerLink={`/announcements/${announcement.id}`}>
                <IonIcon slot="icon-only" icon={arrowForward} />
              </IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
 );
};

export default AllAnnouncements;