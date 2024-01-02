import { faClock, faFaceGrinTongueSquint, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';

import { Ingredients } from '../../components/Ingredients/Ingredients';

const COCKTAILS_DATA = [
  {
    id: 'd38238ec-d26b-4cc0-a3c5-9a00fbc34d58',
    name: 'A Quiet Cocktail',
    description: 'Inspired by the 2018 film A Quiet Place.',
    img: '/cocktails/aQuietCocktail.jpg',
    ingredients: [
      ['Triple Sec Orange Liqueur', '20 ml'],
      ['Dry vermouth', '20 ml'],
      ['Sweet vermouth', '20 ml'],
      ['Gin', '20 ml'],
    ],
    recipe: [
      '1: Stir ingredients in a mixing glass with ice.',
      '2: Strain into a chilled Nick and Nora glass. Garnish with a lemon twist.',
    ],
    taste: 'Bitter',
    time: '3 min',
    level: 'Expert',
  },
  {
    id: '907e74b7-8d0b-4259-bbf0-f5974d3554dd',
    name: 'A Royale with Rum',
    description: 'This yummy milkshake twist is the perfect sweet treat…',
    img: '/cocktails/aRoyalCocktail.jpg',
    ingredients: [
      ['Almond Butter', '1 scoop(s)'],
      ['Triple Sec Orange Liqueur', '30 ml'],
      ['Milk', '120 ml'],
      ['Black rum', '60 ml'],
      ['Vanilla Ice Cream', '3 scoop(s)'],
    ],
    recipe: [
      '1: Add all ingredients to a high-powered blender and blend to combine.',
      '2: Garnish with an orange peel',
    ],
    taste: 'Creamy',
    time: '3 min',
    level: 'Beginner',
  },
  {
    id: '874c95c1-7abc-4c60-a976-967269ca6175',
    name: 'After Dinner Special',
    description:
      'This cocktail used to be a pousse-café, to be drank layer after layer. But its orange and herbal notes work well when stirred, and served over ice.',
    img: '/cocktails/afterDinnerSpecial.jpg',
    ingredients: [
      ['Benedictine', '30 ml'],
      ['Triple Sec Orange Liqueur', '30 ml'],
      ['MilkYellow Chartreuse', '30 ml'],
    ],
    recipe: [
      '1: Combine all ingredients in a chilled mixing glass',
      '2: Add ice and stir until well-chilled',
      '3: Strain into a chilled wine glass',
      '4: Garnish with orange twist',
    ],
    taste: 'Sweet & dry',
    time: '2 min',
    level: 'Beginner',
  },
  {
    id: '9b849118-2d58-43eb-8612-87a58bcc185a',
    name: 'Berry Margarita',
    description:
      'Perfect for the fall season when berries are at their ripest. It produces a beautiful and bright pink color that is seducing even the most shy amateurs',
    img: '/cocktails/berryMargarita.jpg',
    ingredients: [
      ['Blanco tequila', '45 ml'],
      ['Triple Sec Orange Liqueur', '30 ml'],
      ['Fresh blackberries', '4 unit'],
      ['Fresh lime juice', '20 ml'],
    ],
    recipe: [
      '1: Combine all ingredients in a cocktail shaker',
      '2: Add ice and shake until well-chilled',
      '3: Strain into a chilled Old Fashioned glass',
      '4: Garnish with a blackberry',
    ],
    taste: 'Sour & fruity',
    time: '3 min',
    level: 'Intermediate',
  },
  {
    id: 'e4bff335-ab72-40be-b43e-717bc0d47d47',
    name: 'Atlas',
    description:
      'This American concoction was published in Chicago in 1937, it has a unique blend of fruits and light woody notes.',
    img: '/cocktails/atlas.jpg',
    ingredients: [
      ['Angostura Bitters', '1 dash(es)'],
      ['Triple Sec Orange Liqueur', '20 ml'],
      ['Calvados', '45 ml'],
      ['Rum', '20 ml'],
    ],
    recipe: [
      '1: Combine all ingredients in a chilled mixing glass',
      '2: Add ice and stir until well-chilled',
      '3: Strain into a chilled Old Fashioned glass',
      '4: Garnish with an lemon twist',
    ],
    taste: 'Dry & spicy',
    time: '2 min',
    level: 'Beginner',
  },
  {
    id: '4ab185c9-dd35-4557-ae65-7fc4eb53982d',
    name: 'Blue Bird',
    description:
      'Blue Bird was a land speed record that inspired two great bartenders to created a cocktail. Frank Meier from Ritz Hotel Paris in 1936, and William Tarling from the Café Royal Hotel in London in 1937.',
    img: '/cocktails/blueBird.jpg',
    ingredients: [
      ['Blue food coloring', '3 dash(es)'],
      ['Triple Sec Orange Liqueur', '20 ml'],
      ['Fresh lemon juice', '15 ml'],
      ['Maraschino', '3 dash(es)'],
      ['Vodka', '50 ml'],
    ],
    recipe: [
      '1: Combine all ingredients in a cocktail shaker',
      '2: Add ice and shake until well-chilled',
      '3: Strain into a chilled coupe or cocktail glass',
    ],
    taste: 'Fruity and bitter',
    time: '2 min',
    level: 'Intermediate',
  },
  {
    id: '8e5852ef-f7bc-4c30-8455-35a74e42923e',
    name: 'Breakfast Martini',
    description:
      'Invented in 1997 by the internationally acclaimed bartender Salvatore Calabrese, this clever Cointreau cocktail uses one of the breakfast most iconic ingredient: orange marmalade.',
    img: '/cocktails/breakfastMartini.jpg',
    ingredients: [
      ['Triple Sec Orange Liqueur', '15 ml'],
      ['Fresh lemon juice', '15 ml'],
      ['Orange marmalade', '1 Tbsp(s)'],
      ['Gin', '50 ml'],
    ],
    recipe: [
      '1: Combine all ingredients in a cocktail shaker',
      '2: Add ice and shake until well-chilled',
      '3: Strain into a chilled coupe or cocktail glass',
      '4: Garnish with an orange wedge',
    ],
    taste: 'Sour & dry',
    time: '2 min',
    level: 'Intermediate',
  },
  {
    id: '8bc806ad-e08c-4e52-b8a0-2a1a78122757',
    name: 'Coffee Merger',
    description:
      'A tasty and refreshing coffee based cocktail. This cocktail was known as Black Jack during the American prohibition and was served with a sugar rim.',
    img: '/cocktails/coffeeMerger.jpg',
    ingredients: [
      ['Triple Sec Orange Liqueur', '25 ml'],
      ['Espresso', '25 ml'],
      ['liquor', '30 ml'],
    ],
    recipe: [
      '1: Combine all ingredients in a cocktail shaker',
      '2: Add ice and shake until well-chilled',
      '3: Strain into a chilled coupe or cocktail glass',
    ],
    taste: 'Fresh & bitter',
    time: '2 min',
    level: 'Intermediate',
  },
];

export const Details = () => {
  const { cocktailId } = useParams();

  const cocktail = COCKTAILS_DATA.find((cocktail) => cocktail.id === cocktailId);

  return (
    <main>
      <div className='bg-orangada flex flex-col lg:px-80 px-4 py-10 justify-center'>
        <div className='flex flex-col gap-4'>
          <h1 className='lg:text-5xl text-2xl font-oswald font-medium uppercase text-blueberry'>
            {cocktail ? cocktail.name : 'Cocktail Not Found'}
          </h1>
          <span className='text-white flex justify-center items-center gap-2 text-sm hover:scale-110 cursor-pointer'>
            <FontAwesomeIcon icon={faHeart} size='xl' />
            <p>Save to favourites</p>
          </span>
        </div>
      </div>
      <div className='lg:px-36 py-12 bg-yellow-500'>
        <div className='flex flex-col bg-purple-300'>
          <div className='flex justify-center pb-2 text-blueberry'>
            <span className='flex items-center lg:gap-2 gap-1 lg:px-8 px-2'>
              <FontAwesomeIcon icon={faFaceGrinTongueSquint} style={{ color: '#fa4616' }} />
              <p>{cocktail.taste}</p>
            </span>
            <span className='flex items-center lg:gap-2 gap-1 lg:px-8 px-2'>
              <FontAwesomeIcon icon={faClock} style={{ color: '#fa4616' }} />
              <p>{cocktail.time}</p>
            </span>
            <span className='flex items-center lg:gap-2 gap-1 lg:px-8 px-2'>
              <FontAwesomeIcon icon={faRankingStar} style={{ color: '#fa4616' }} />
              <p>{cocktail.level}</p>
            </span>
          </div>
          <div className='flex justify-center p-4 text-justify'>
            <p>{cocktail.description}</p>
          </div>
        </div>
        <div className='bg-green-400 grid lg:grid-cols-2 gap-4 py-2'>
          <div className='bg-red-400 flex justify-center'>
            <img className='w-96 h-96' src={cocktail.img} alt={cocktail.name} />
          </div>
          <div className='bg-blue-400 flex flex-col'>
            <Ingredients ingredients={cocktail.ingredients} />
          </div>
        </div>
      </div>
    </main>
  );
};
