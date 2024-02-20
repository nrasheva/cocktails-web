import {
  faClock,
  faFaceGrinTongueSquint,
  faHeart,
  faPenToSquare,
  faTrashCan,
} from '@fortawesome/free-regular-svg-icons';
import { faMartiniGlassCitrus, faRankingStar, faWineBottle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useMedia } from 'use-media';

import { Button } from '../../components/Button/Button';
import { CocktailAttributes } from '../../components/CocktailAttributes/CocktailAttributes';
import { Ingredients } from '../../components/Ingredients/Ingredients';
import { Recipe } from '../../components/Recipe/Recipe';
import { getCocktail } from '../../services/cocktails.service';

export const Details = () => {
  const { cocktailId } = useParams();
  const [activeTab, setActiveTab] = useState('ingredients');
  const [cocktail, setCocktail] = useState({});
  const isDesktop = useMedia({ minWidth: '1200px' });

  const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated);
  const isAuthorized = useSelector((state) => state.authorization.isAuthorized);

  const navigate = useNavigate();

  useEffect(() => {
    if (cocktailId && cocktailId !== 'undefined') {
      (async () => {
        try {
          const { cocktail } = await getCocktail(cocktailId);
          setCocktail(cocktail);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [cocktailId]);

  return (
    <main>
      <div className='bg-orangada flex flex-col lg:px-80 px-4 py-10 justify-center'>
        <div className='flex flex-col gap-4'>
          <h1 className='lg:text-5xl text-2xl font-oswald font-medium uppercase text-blueberry'>
            {cocktail ? cocktail.name : 'Cocktail Not Found'}
          </h1>
          {isAuthenticated && !isAuthorized && (
            <span className='text-white flex justify-center items-center gap-2 text-sm hover:scale-110 cursor-pointer'>
              <FontAwesomeIcon icon={faHeart} size='xl' />
              <p>Save to favourites</p>
            </span>
          )}
          {isAuthorized && (
            <div className='text-white flex justify-center items-center gap-6 text-sm'>
              <span
                className='flex gap-2 hover:scale-110 cursor-pointer'
                onClick={() => navigate(`/details/${cocktail._id}/edit`)}>
                <FontAwesomeIcon icon={faPenToSquare} size='xl' />
                <p>Edit</p>
              </span>
              <span className='flex gap-2 hover:scale-110 cursor-pointer'>
                <FontAwesomeIcon icon={faTrashCan} size='xl' />
                <p>Delete</p>
              </span>
            </div>
          )}
        </div>
      </div>
      <div className='lg:px-36 py-12'>
        {/* CocktailAttributes */}
        <div className='flex flex-col'>
          <div className='flex justify-center pb-2 text-blueberry'>
            <CocktailAttributes icon={faFaceGrinTongueSquint} text={cocktail.taste} />
            <CocktailAttributes icon={faClock} text={cocktail.time} />
            <CocktailAttributes icon={faRankingStar} text={cocktail.level} />
          </div>
          <div className='flex justify-center py-4 2xl:px-20 px-4 text-justify text-blueberry'>
            <p>{cocktail.description}</p>
          </div>
        </div>
        {/* Image and Ingredients */}
        <div>
          <div className='grid xl:grid-cols-2 gap-4 py-2'>
            <div className='flex justify-center'>
              <img className='xl:h-imageHeight xl:w-imageWidth w-96 h-96' src={cocktail.img} alt={cocktail.name} />
            </div>
            {!isDesktop && (
              <div className='flex gap-2 px-1'>
                <Button
                  type='choice'
                  text='INGREDIENTS'
                  icon={faWineBottle}
                  onClick={() => setActiveTab('ingredients')}
                  isActive={activeTab === 'ingredients'}
                />
                <Button
                  type='choice'
                  text='HOW TO MAKE'
                  icon={faMartiniGlassCitrus}
                  onClick={() => setActiveTab('recipe')}
                  isActive={activeTab === 'recipe'}
                />
              </div>
            )}
            {/* Ingredients */}
            <div className='flex flex-col'>
              {(isDesktop || activeTab === 'ingredients') && cocktail.ingredients && (
                <Ingredients ingredients={cocktail.ingredients} recipe={cocktail.recipe} />
              )}
            </div>
          </div>
          {(isDesktop || activeTab === 'recipe') && cocktail.recipe && <Recipe recipe={cocktail.recipe} />}
        </div>
      </div>
    </main>
  );
};
