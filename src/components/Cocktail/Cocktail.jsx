export const Cocktail = (props) => {
  return (
    <div className='bg-green-300 cursor-pointer'>
      <div className='border-b-2 border-navBorder'>
        <img className='w-64 h-64' src={props.img} alt={props.name} />
        <p>{props.name}</p>
      </div>
      <div className='bg-purple-300 flex justify-around'>
        <span>
          <p>{props.taste}</p>
        </span>
        <span>
          <p>{props.level}</p>
        </span>
      </div>
    </div>
  );
};
