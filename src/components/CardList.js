import Card from './Card';

const CardList = ({ robots }) => {
  const cardsArray = robots.map(({ id, name, email }) => (
    <Card key={id} id={id} name={name} email={email} />
  ));
  return <div>{cardsArray}</div>;
};

export default CardList;
