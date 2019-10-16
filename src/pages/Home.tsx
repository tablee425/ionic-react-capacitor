import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonCheckbox, IonLabel, IonNote, IonBadge } from '@ionic/react';
import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Ionic Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            <IonItem>
              <IonCheckbox slot="start"/>
              <IonLabel>
                <h2>Create Idea</h2>
                <IonNote>Run Idea by Brandy</IonNote>
              </IonLabel>
              <IonBadge color="success" slot="end">
                5 Days
              </IonBadge>
            </IonItem>
            <IonItem>
              <IonCheckbox slot="start"/>
              <IonLabel>
                <h2>Create Idea</h2>
                <IonNote>Run Idea by Brandy</IonNote>
              </IonLabel>
              <IonBadge color="success" slot="end">
                5 Days
              </IonBadge>
            </IonItem>
          </IonList>

          The world is your oyster.
          <p>
            If you get lost, the{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/">
              docs
            </a>{' '}
            will be your guide.
          </p>
        </IonContent>
      </IonPage>
    );
  }
}

export default Home;
