import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Login from './Login';

const Home = () => {
  return (
    <IonPage>
     
      <IonContent fullscreen>
      <Login />
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
