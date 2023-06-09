import { IonContent } from '@ionic/react';
import { usePrismicDocumentByUID } from '@prismicio/react';
import { useParams } from 'react-router-dom';
import { EventDocument } from '../../../../prismicio-types';

function EventsDetails() {
  const { id }: { id: string } = useParams();
  const [document] = usePrismicDocumentByUID<EventDocument>('event', id);

  console.log(document);
  return (
    <IonContent className="ion-padding">
      {document && (
        <div className="text-slate-200">
          <h1>{document.data.title}</h1>
          <h2>asd</h2>
        </div>
      )}
    </IonContent>
  );
}

export default EventsDetails;
