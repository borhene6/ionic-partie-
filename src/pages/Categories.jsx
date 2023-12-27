import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';
import { useHistory, useParams } from 'react-router';

const Categories = () => {
  const history = useHistory();
  const { id } = useParams();

  // Fonction de redirection vers la catégorie "Your Anouncements"
  const navigateToCategory1 = () => {
    history.push(`/cat/${id}`);
  }

  // Fonction de redirection vers la catégorie "All Anouncements"
  const navigateToCategory2 = () => {
    history.push(`/all`);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Choisissez une catégorie</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {/* Première ligne avec la catégorie "Your Anouncements" */}
          <IonRow>
            <IonCol>
              <IonCard button onClick={navigateToCategory1}>
                <IonCardHeader>
                  <IonCardTitle>Vos Annonces</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>Vos Annonces</IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          {/* Deuxième ligne avec la catégorie "All Anouncements" */}
          <IonRow>
            <IonCol>
              <IonCard button onClick={navigateToCategory2}>
                <IonCardHeader>
                  <IonCardTitle>Toutes les Annonces</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>Toutes les Annonces</IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Categories;
