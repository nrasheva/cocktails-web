import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Cocktail } from '../../components/Cocktail/Cocktail';
import { Intro } from '../../components/Intro/Intro';
import { setCocktails } from '../../redux/reducers/cocktails';
import { getCocktails } from '../../services/cocktails.service';

export const Cocktails = () => {
  const cocktails = useSelector((state) => state.cocktails.cocktails);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { cocktails } = await getCocktails();

        dispatch(setCocktails(cocktails));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  return (
    <main className='flex flex-col'>
      <Intro
        text='FIND YOUR PERFECT COCKTAIL'
        description='Explore our variety of cocktail recipes. From timeless classics to original creations, learn how to make the
          perfect drink.'
      />
      <div className='flex xl:px-60 px-16 pt-8 text-blueberry font-semibold'>
        <p>{cocktails.length} COCKTAILS FOUND</p>
      </div>
      <div className='flex flex-wrap justify-center gap-4 xl:px-36 py-12'>
        {cocktails.map((cocktail) => (
          <Cocktail
            key={cocktail._id}
            name={cocktail.name}
            img={cocktail.img}
            taste={cocktail.taste}
            level={cocktail.level}
            onClick={() => navigate(`/details/${cocktail._id}`)}
          />
        ))}
      </div>
    </main>
  );
};
