import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonIcon, IonButton } from '@ionic/react';
import { addCircleOutline, arrowBack, arrowForward } from 'ionicons/icons';
import { useParams } from 'react-router';
import api from '../axios';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const { id } = useParams();

  // Utilisation de useEffect pour charger les annonces de l'utilisateur au chargement de la page
  useEffect(() => {
    loadAnnouncements();
  }, []);

  // Fonction asynchrone pour charger les annonces de l'utilisateur depuis l'API
  const loadAnnouncements = async () => {
    try {
      const response = await api.get(`/useran/${id}`);
      console.log('response :>> ', response);

      // Mettre à jour l'état avec les annonces de l'utilisateur récupérées depuis l'API
      if (response.data) {
        setAnnouncements(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* Bouton pour ajouter une annonce */}
          <IonButton slot="end" routerLink={`/add/${id}`}>
            <IonIcon icon={addCircleOutline} />
          </IonButton>
          <IonTitle>Annonces</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* Liste des annonces de l'utilisateur */}
        <IonList>
          {announcements.map((announcement) => (
            <IonItem key={announcement.id}>
              <IonLabel>
                {/* Titre et description de l'annonce */}
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
