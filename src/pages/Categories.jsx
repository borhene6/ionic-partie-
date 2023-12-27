import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';
import { useHistory, useParams } from 'react-router';

const Categories = () => {
 const history = useHistory();
 const {id } = useParams();
 const navigateToCategory1 = () => {
    history.push(`/cat/${id}`);
 }

 const navigateToCategory2 = () => {
    history.push(`/all`);
 }

 return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Choose a Category</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard button onClick={navigateToCategory1}>
                <IonCardHeader>
                 <IonCardTitle>Your Anouncments</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>Your Anouncments</IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard button onClick={navigateToCategory2}>
                <IonCardHeader>
                 <IonCardTitle>All Anouncments</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>All Anouncments</IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
 );
};

export default Categories;