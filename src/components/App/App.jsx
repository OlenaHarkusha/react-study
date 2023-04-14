import { EventBoard } from '../EventBoard/EventBoard';
import { PageTitle } from '../PageTitle/PageTitle';
import upcomingEvents from '../../upcomingEvents.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} />
    </Container>
  );
};
