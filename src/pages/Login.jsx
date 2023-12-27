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

  // Fonction pour mettre à jour l'état lorsqu'un champ du formulaire est modifié
  const onChange = (e) => {
    const { name, value } = e;
    setCred((prevCred) => ({
      ...prevCred,
      [name]: value,
    }));
  };

  // Fonction pour gérer la soumission du formulaire de connexion
  const handleSubmit = async () => {
    try {
      // Vérifier si les champs du formulaire sont renseignés
      if (cred.password && cred.username) {
        // Appel à l'API pour vérifier les informations d'identification
        const response = await api.get(`/getuser/${cred.username}/${cred.password}`);
        
        // Si les informations d'identification sont valides, rediriger l'utilisateur vers la liste d'annonces
        if (response.data) {
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
          {/* Champ de saisie du nom d'utilisateur */}
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Nom d'utilisateur</IonLabel>
                <IonInput onIonChange={(e) => { onChange({ name: 'username', value: e.detail.value }) }} type="text" name="username"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          {/* Champ de saisie du mot de passe */}
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Mot de passe</IonLabel>
                <IonInput onIonChange={(e) => { onChange({ name: 'password', value: e.detail.value }) }} type="password" name="password"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          {/* Bouton de connexion */}
          <IonRow>
            <IonCol>
              <IonButton expand="block" onClick={handleSubmit}>
                Connexion
              </IonButton>
            </IonCol>
          </IonRow>

          {/* Bouton pour rediriger vers la page d'inscription */}
          <IonRow>
            <IonCol>
              <IonButton expand="block" fill="clear" routerLink="/register">
                <IonIcon slot="start" icon={person}></IonIcon>
                Vous n'avez pas de compte ?
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
