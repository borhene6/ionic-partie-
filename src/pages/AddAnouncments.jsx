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

  // Utilisation de useParams pour obtenir l'ID de l'utilisateur depuis l'URL
  const { id } = useParams();

  // Utilisation de useState pour gérer l'état des données du formulaire
  const [ann, setAnn] = useState({ name: null, description: null, user: id });

  // Fonction pour mettre à jour l'état lorsqu'un champ du formulaire est modifié
  const onChange = (e) => {
    const { name, value } = e;
    setAnn((prevCred) => ({
      ...prevCred,
      [name]: value,
    }));
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async () => {
    try {
      // Vérifier si les champs du formulaire sont renseignés
      if (ann.name && ann.description) {
        // Appel à l'API pour ajouter une annonce
        const response = await api.post('/addann', ann);

        // Si la réponse est réussie, rediriger l'utilisateur
        if (response.data) {
          history.goBack();
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
          <IonTitle>Ajouter une annonce</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {/* Champ de saisie du titre de l'annonce */}
        <IonItem>
          <IonLabel position="stacked">Titre</IonLabel>
          <IonInput type="text" onIonChange={(e) => { onChange({ name: 'name', value: e.detail.value }) }} name='name' />
        </IonItem>

        {/* Champ de saisie du contenu de l'annonce */}
        <IonItem>
          <IonLabel position="stacked">Contenu</IonLabel>
          <IonInput type="text" onIonChange={(e) => { onChange({ name: 'description', value: e.detail.value }) }} name="description" />
        </IonItem>

        {/* Bouton pour soumettre le formulaire */}
        <IonButton onClick={handleSubmit} expand="block" >
          <IonIcon slot="start" icon={addCircle} />
          Sauvegarder l'annonce
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AddAnnouncementPage;
