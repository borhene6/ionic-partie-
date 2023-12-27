import React, { useState } from 'react';
import {
 IonContent,
 IonHeader,
 IonPage,
 IonTitle,
 IonToolbar,
 IonItem,
 IonLabel,
 IonInput,
 IonButton,
 IonIcon,
 IonGrid,
 IonRow,
 IonCol,
 useIonRouter,
} from '@ionic/react';
import { person, key } from 'ionicons/icons';
import api from '../axios';
import { useHistory } from 'react-router';

const Register  = () => {

  const [cred, setCred] = useState({ password: null, username: null });
  const history = useHistory();
  const onChange = (e) => {
    const { name, value } = e;
    setCred((prevCred) => ({
      ...prevCred,
      [name]: value,
    }));
  }; 
 
  const handleSubmit = async() => {
    try {
              if(cred.password && cred.username){
      const response = await api.post('/adduser',{ username: cred.username, password: cred.password });
    
      if(response.data){
        history.push('/');
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
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Username</IonLabel>
                <IonInput type="text" onIonChange={(e)=>{onChange({name:'username',value:e.detail.value})}} name="username"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel  position="stacked">Password</IonLabel>
                <IonInput onIonChange={(e)=>{onChange({name:'password',value:e.detail.value})}} type="password" name="password"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton onClick={handleSubmit} expand="block" type="submit">
                Register
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton expand="block" fill="clear" routerLink="/">
                <IonIcon slot="start" icon={key}></IonIcon>
                Already have an account?
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
 );
};

export default Register;