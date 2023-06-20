import { IonContent } from '@ionic/react';
import { SliceZone, usePrismicDocumentByUID } from '@prismicio/react';
import { useParams } from 'react-router-dom';
import { EventDocument } from '../../../../prismicio-types';
import { components } from '../../../slices';
import ArticleHeader from '../../article-header';

function EventsDetails() {
  const { id }: { id: string } = useParams();
  const [document] = usePrismicDocumentByUID<EventDocument>('event', id);

  console.log(document);
  return (
    <IonContent className="ion-padding">
      {document && (
        <section className="text-slate-200">
          <ArticleHeader
            articleName={document.data.event_name}
            mainImage={document.data.main_image}
            byline={document.data.byline}
            heading={document.data.title}
          />
          <div className="ml-auto mr-auto lg:max-w-screen-lg">
            <SliceZone slices={document.data.slices} components={components} />
          </div>
        </section>
      )}
    </IonContent>
  );
}

export default EventsDetails;
