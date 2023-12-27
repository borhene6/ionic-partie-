import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonIcon, IonButton } from '@ionic/react';
import { addCircleOutline, arrowBack, arrowForward } from 'ionicons/icons';
import { useParams } from 'react-router';
import api from '../axios';

const Announcements = () => {
  const [announcements,setAnnouncements]=useState([])
  const {id } = useParams();
useEffect(()=>{
 
   loadAnoun()
},[])
const loadAnoun=async()=>{
  try {
   
const response = await api.get(`/useran/${id}`,);
console.log('response :>> ', response);

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
          <IonButton slot="end" routerLink={`/add/${id}`}>
            <IonIcon   icon={addCircleOutline} />
          </IonButton>
          <IonTitle>Announcements</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {announcements.map(announcement => (
            <IonItem key={announcement.id}>
              <IonLabel>
                <h2>{announcement.name}</h2>
                <p>{announcement.description}</p>
              </IonLabel>
              
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
 );
};

export default Announcements;