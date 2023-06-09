import { useEffect } from 'react';
import App from './App';
import { StatusBar, Style } from '@capacitor/status-bar';

const setStatusBarStyleDark = async () => {
  await StatusBar.setStyle({ style: Style.Dark });
};

function AppShell() {
  useEffect(() => {
    setStatusBarStyleDark();
  }, []);
  return <App />;
}

export default AppShell;
