import PropTypes from 'prop-types';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import { formatEventDuration, formatEventStart } from 'Utils';
import { iconSize } from 'Constants';
import { Card, CardInfo, CardName, Chip } from './eventCard.styles';

export const Event = ({ name, location, speaker, type, start, end }) => {
  const formattedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);
  return (
    <Card>
      <CardName>{name}</CardName>
      <CardInfo>
        <FaMapMarkerAlt size={iconSize.sm} />
        {location}
      </CardInfo>
      <CardInfo>
        <FaUserAlt size={iconSize.sm} />
        {speaker}
      </CardInfo>
      <CardInfo>
        <FaCalendarAlt size={iconSize.sm} />
        {formattedStart}
      </CardInfo>
      <CardInfo>
        <FaClock size={iconSize.sm} />
        {duration}
      </CardInfo>
      <Chip Cardtype={type}>{type}</Chip>
    </Card>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
