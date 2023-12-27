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
} from '@ionic/react';
import { person } from 'ionicons/icons';
import api from '../axios';
import { useHistory } from 'react-router';

const Login = () => {
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
      const response = await api.get(`/getuser/${cred.username}/${cred.password}`,);
      console.log('response.data :>> ', response.data);
      if(response.data){
        console.log('response.data :>> ', response.data);
        history.push(`/annList/${response.data?._id}`);
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
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Username</IonLabel>
                <IonInput  onIonChange={(e)=>{onChange({name:'username',value:e.detail.value})}} type="text" name="username"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Password</IonLabel>
                <IonInput onIonChange={(e)=>{onChange({name:'password',value:e.detail.value})}} type="password" name="password"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton expand="block" onClick={handleSubmit}>
                Login
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton expand="block" fill="clear" routerLink="/register">
                <IonIcon slot="start" icon={person}></IonIcon>
                Don't have an account?
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
