import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div className="w-full">
      <SectionTitle
        subHeading="What's new"
        heading="Add an item"
      ></SectionTitle>

      <form onSubmit={handleSubmit(onSubmit)} className="m-4">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </div>
          <input
            {...register("name", { required: true, maxLength: 120 })}
            type="text"
            placeholder="Recipe Name"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Category</span>
          </div>
          <select
            {...register("category", { required: true })}
            className="select select-bordered"
          >
            <option disabled selected>
              Pick one
            </option>
            <option>Pizza</option>
            <option>soup</option>
            <option>Salad</option>
            <option>Dessert</option>
            <option>Drinks</option>
          </select>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-semibold">Price*</span>
          </div>
          <input
            {...register("price", { required: true })}
            type="number"
            placeholder="Price"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-semibold">Recipe Details*</span>
          </div>
          <textarea
            {...register("details", { required: true })}
            className="textarea textarea-bordered"
            placeholder="Bio"
          ></textarea>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-semibold">Item Image*</span>
          </div>
          <input type="file" className="file-input w-full max-w-xs" />
        </label>

        <input
          className="btn btn-sm m-4 btn-primary"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddItem;
