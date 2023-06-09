import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import { PrismicProvider } from '@prismicio/react';
import { client } from '../../prismic';
import '../../App.css';
import Events, { EventsDetails } from '../sections/events';
import Home from '../sections/home';
import Navbar from '../../features/navbar/Navbar';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import SliceSimulatorPage from '../../features/slice-simulator';

setupIonicReact({ mode: 'ios' });
function App() {
  return (
    <PrismicProvider client={client}>
      <IonApp className="bg-zinc-950">
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/events" component={Events} />
            <Route exact path="/events/:id" component={EventsDetails} />
            <Route
              exact
              path="/slice-simulator"
              component={SliceSimulatorPage}
            />
            <Route exact path="/" component={Home} />
          </IonRouterOutlet>
          <Navbar />
        </IonReactRouter>
      </IonApp>
    </PrismicProvider>
  );
}

export default App;
