import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CocktailAttributes = (props) => (
  <span className='flex items-center lg:gap-2 gap-1 lg:px-8 px-2'>
    <FontAwesomeIcon icon={props.icon} style={{ color: '#fa4616' }} />
    <p>{props.text}</p>
  </span>
);
