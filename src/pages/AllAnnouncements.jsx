import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonIcon, IonButton } from '@ionic/react';
import { arrowBack, arrowForward } from 'ionicons/icons';
import api from '../axios';

const AllAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([]);

  // Utilisation de useEffect pour charger les annonces au chargement de la page
  useEffect(() => {
    loadAnnouncements();
  }, []);

  // Fonction asynchrone pour charger les annonces depuis l'API
  const loadAnnouncements = async () => {
    try {
      const response = await api.get(`/allann`);

      // Mettre à jour l'état avec les annonces récupérées depuis l'API
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
          {/* Bouton de retour vers la page d'accueil */}
          <IonButton slot="start" routerLink="/home">
            <IonIcon slot="icon-only" icon={arrowBack} />
          </IonButton>
          <IonTitle>Toutes les annonces</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* Liste d'annonces à afficher */}
        <IonList>
          {announcements.map((announcement) => (
            <IonItem key={announcement.id}>
              <IonLabel>
                {/* Titre et description de l'annonce */}
                <h2>{announcement.title}</h2>
                <p>{announcement.description}</p>
              </IonLabel>
              {/* Bouton de redirection vers la page d'une annonce spécifique */}
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
