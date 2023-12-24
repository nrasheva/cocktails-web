import { Toolbox } from '../Footer-toolbox/Footer-toolbox';

export const Footer = () => {
  return (
    <div>
      <Toolbox />
      <div className='bg-orangada text-white py-5 flex flex-col items-center gap-4'>
        <p>&copy; Cocktailandia 2023</p>
        <h1 className='border-y border-white py-2 px-10'>PLEASE DRINK RESPONSIBLY</h1>
      </div>
    </div>
  );
};
