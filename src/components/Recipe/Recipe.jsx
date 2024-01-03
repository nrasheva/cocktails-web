export const Recipe = (props) => {
  return (
    <div>
      <ul>
        {props.recipe.map((step) => {
          return <li key={step}>{step}</li>;
        })}
      </ul>
    </div>
  );
};
