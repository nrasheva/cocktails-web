export const Input = (props) => {
  if (props.type === 'radio') {
    const { type, name, value, text, onClick, isActive } = props;

    const labelClasses = `px-8 py-2 border border-blueberry text-${isActive ? 'white' : 'blueberry'} cursor-pointer ${
      isActive ? 'bg-blueberry' : 'hover:bg-blueberry'
    } hover:text-white`;

    return (
      <label className={labelClasses}>
        <input type={type} name={name} value={value} className='sr-only' onClick={onClick} />
        {text}
      </label>
    );
  }
};
