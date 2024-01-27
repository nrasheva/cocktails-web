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

  if (props.type === 'text' || props.type === 'password' || props.type === 'email') {
    return (
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className='bg-white rounded w-full py-1 px-4'
      />
    );
  }
};
