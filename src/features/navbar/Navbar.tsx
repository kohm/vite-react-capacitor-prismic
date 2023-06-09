import { IonButton } from '@ionic/react';
import { NavLink, useHistory } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const history = useHistory();

  return (
    <nav className="fixed	bottom-0 flex w-full justify-around bg-slate-950 pb-10">
      <IonButton
        onClick={(e) => {
          e.preventDefault();
          history.push('/');
        }}
      >
        Home
      </IonButton>
      <IonButton
        onClick={(e) => {
          e.preventDefault();
          history.push('/radio');
        }}
      >
        Radio
      </IonButton>
      <NavLink to="/events">Events</NavLink>
      <IonButton
        onClick={(e) => {
          e.preventDefault();
          history.push('/shop');
        }}
      >
        Shop
      </IonButton>
      <IonButton
        onClick={(e) => {
          e.preventDefault();
          history.push('/videos');
        }}
      >
        Videos
      </IonButton>
    </nav>
  );
}

export default Navbar;
