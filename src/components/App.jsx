import { EventBoard } from './EventBoard/EventBoard';
import { PageTitle } from './PageTitle/PageTitle';
import upcomingEvents from '../upcomingEvents.json';

export const App = () => {
  return (
    <>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} />
    </>
  );
};
