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
      <div className="mb-28 ml-auto mr-auto max-w-screen-lg gap-9 lg:grid lg:grid-cols-2">
        {events &&
          events.map((event) => (
            <Teaser
              key={event.data.event_name}
              teaser={{
                img: event.data.main_image,
                byline: event.data.byline,
                title: event.data.event_name,
                description: event.data.meta_description,
              }}
              img={<Teaser.Image />}
              info={
                <Teaser.Info>
                  <Teaser.Byline />
                  <Teaser.Title />
                  <Teaser.Description />
                </Teaser.Info>
              }
            />
          ))}
      </div>
    </IonContent>
  );
}

export default Events;
