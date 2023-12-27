export const Intro = (props) => {
  return (
    <div className='bg-orangada flex flex-col lg:px-80 px-4 py-10 justify-center text-white '>
      <div className='flex flex-col gap-3'>
        <h1 className='lg:text-5xl text-2xl font-oswald font-medium'>{props.text}</h1>
        <p className='lg:text-lg text-base'>{props.description}</p>
      </div>
    </div>
  );
};
