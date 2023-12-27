import React, { useState } from 'react';
import {
 IonPage,
 IonHeader,
 IonToolbar,
 IonTitle,
 IonContent,
 IonButton,
 IonItem,
 IonLabel, 
 IonInput,
 IonIcon,
} from '@ionic/react';
import { addCircle } from 'ionicons/icons';
import { useHistory, useParams } from 'react-router';
import api from '../axios';

const AddAnnouncementPage = () => {
  const history = useHistory();

  const {id } = useParams();
  const [ann, setAnn] = useState({ name: null, description: null ,user:id });
  const onChange = (e) => {
    const { name, value } = e;
    setAnn((prevCred) => ({
      ...prevCred,
      [name]: value,
    }));
  }; 
  const handleSubmit = async() => {
    try {
              if(ann.name && ann.description){
      const response = await api.post('/addann',ann);
    
      if(response.data){
        history.goBack()
      }
    }
    } catch (error) {
      console.error(error);
    }
  };
 return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add Announcement</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonItem>
          <IonLabel position="stacked">Title</IonLabel>
          <IonInput type="text" onIonChange={(e)=>{onChange({name:'name',value:e.detail.value})}} name='name'/>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Content</IonLabel>
          <IonInput type="text"  onIonChange={(e)=>{onChange({name:'description',value:e.detail.value})}}  name="description" />
        </IonItem>
        <IonButton onClick={handleSubmit} expand="block" >
          <IonIcon  slot="start" icon={addCircle} />
          Save Announcement
        </IonButton>
      </IonContent>
    </IonPage>
 );
};

export default AddAnnouncementPage;