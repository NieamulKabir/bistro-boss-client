import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        console.log(imgResponse);
      });
  };
  console.log(errors);
  return (
    <div className="w-full">
      <SectionTitle
        subHeading="What's new"
        heading="Add an item"
      ></SectionTitle>

      <form onSubmit={handleSubmit(onSubmit)} className="mx-16">
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </div>
          <input
            {...register("name", { required: true, maxLength: 120 })}
            type="text"
            placeholder="Recipe Name"
            className="input input-bordered w-full "
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Category*</span>
          </div>
          <select
            defaultValue="Pick One"
            {...register("category", { required: true })}
            className="select select-bordered"
          >
            <option disabled>Pick One</option>
            <option>Pizza</option>
            <option>soup</option>
            <option>Salad</option>
            <option>Dessert</option>
            <option>Drinks</option>
          </select>
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text font-semibold">Price*</span>
          </div>
          <input
            {...register("price", { required: true })}
            type="number"
            placeholder="Price"
            className="input input-bordered w-full "
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text font-semibold">Recipe Details*</span>
          </div>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered"
            placeholder="Bio"
          ></textarea>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Item Image*</span>
          </div>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input w-full "
          />
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
