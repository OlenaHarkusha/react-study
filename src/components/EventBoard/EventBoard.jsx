import { Board } from './EventBoard.styled';
import { Event } from 'components/EventCard/eventCard';
import PropTypes from 'prop-types';

export const EventBoard = ({ events }) => {
  return (
    <Board>
      {events.map(({ name, location, speaker, type, time }) => (
        <Event
          key={name}
          name={name}
          location={location}
          speaker={speaker}
          type={type}
          start={time.start}
          end={time.end}
        />
      ))}
    </Board>
  );
};

EventBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape(
      PropTypes.exact({
        name: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        speaker: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        time: PropTypes.exact({
          start: PropTypes.string.isRequired,
          end: PropTypes.string.isRequired,
        }),
      })
    )
  ).isRequired,
};
