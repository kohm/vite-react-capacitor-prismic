import { useAllPrismicDocumentsByType } from '@prismicio/react';
import { EventDocument } from '../../../../prismicio-types';
import { IonContent } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import Teaser from '../../teaser';

function Events() {
  const [events] = useAllPrismicDocumentsByType<EventDocument>('event');
  const history = useHistory();

  return (
    <IonContent className="ion-padding">
      {events &&
        events.map((event) => (
          <Teaser
            className="pb-4"
            key={event.uid}
            subtitle={event.data.byline}
            img={event.data.main_image?.url}
            clickAction={() => {
              history.push(`/events/${event.uid}`);
            }}
          />
        ))}
    </IonContent>
  );
}

export default Events;
