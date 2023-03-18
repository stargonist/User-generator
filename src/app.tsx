import Router, { Route } from 'preact-router'
import { StateUpdater, useState } from 'preact/hooks';
import { Footer } from './application/components/Footer';
import { Header } from './application/components/Header'
import Dashboard from './pages/Dashboard/Dashboard'
import './app.scss'

export function App() {
  const [loader, setLoader] = useState<boolean | StateUpdater<boolean>>(true);
  const [userCounter, setUserCounter] = useState<number | StateUpdater<number>>(0);
  const state = [userCounter, setUserCounter];

  return (
    <div id="app">
      <Header state={state} />
      <Router>
        <Route path='/' component={()=> Dashboard(state)} />
      </Router>
      <Footer />
    </div>
  )
}
