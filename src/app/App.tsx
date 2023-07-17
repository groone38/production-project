import React, { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavBar } from 'widgets/NavBar';
import SideBar from 'widgets/SideBar/ui/SadeBar/SideBar';
import { AppRouter } from './provider/router';
import { useTheme } from './provider/theme/useTheme';

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <NavBar />
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
