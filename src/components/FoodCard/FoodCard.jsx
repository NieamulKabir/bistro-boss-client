const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl text-center">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-3 py-1 rounded-md bg-slate-900 text-white">
        $ {price}
      </p>
      <div className="card-body">
        <h2 className="text-xl font-bold">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
