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
import { person, key } from 'ionicons/icons';
import api from '../axios';
import { useHistory } from 'react-router';

const Register = () => {
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

  // Fonction pour gérer la soumission du formulaire d'inscription
  const handleSubmit = async () => {
    try {
      // Vérifier si les champs du formulaire sont renseignés
      if (cred.password && cred.username) {
        // Appel à l'API pour créer un nouvel utilisateur
        const response = await api.post('/adduser', { username: cred.username, password: cred.password });

        // Si l'utilisateur est créé avec succès, rediriger vers la page de connexion
        if (response.data) {
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
          <IonTitle>Inscription</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          {/* Champ de saisie du nom d'utilisateur */}
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Nom d'utilisateur</IonLabel>
                <IonInput type="text" onIonChange={(e) => { onChange({ name: 'username', value: e.detail.value }) }} name="username"></IonInput>
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

          {/* Bouton d'inscription */}
          <IonRow>
            <IonCol>
              <IonButton onClick={handleSubmit} expand="block" type="submit">
                S'inscrire
              </IonButton>
            </IonCol>
          </IonRow>

          {/* Bouton pour rediriger vers la page de connexion */}
          <IonRow>
            <IonCol>
              <IonButton expand="block" fill="clear" routerLink="/">
                <IonIcon slot="start" icon={key}></IonIcon>
                Vous avez déjà un compte ?
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;
