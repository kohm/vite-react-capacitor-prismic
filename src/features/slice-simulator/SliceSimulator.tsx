// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { SliceSimulator } from '@slicemachine/adapter-next/simulator';
import { SliceZone, SliceZoneProps } from '@prismicio/react';

import { components } from '../../slices';
import { IonContent } from '@ionic/react';
import { JSX } from 'react/jsx-runtime';

function SliceSimulatorPage() {
  return (
    <IonContent>
      <SliceSimulator
        sliceZone={(
          props: JSX.IntrinsicAttributes & SliceZoneProps<unknown>
        ) => <SliceZone {...props} components={components} />}
      />
    </IonContent>
  );
}

export default SliceSimulatorPage;
