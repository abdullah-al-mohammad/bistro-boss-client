import { useForm } from "react-hook-form"
import SectionTitle from "./../../../assets/Components/SectionTitle/SectionTitle";

const AddItems = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div>
      <SectionTitle subHeading={"What's new?"} heading={'add an item'}></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} />
          <select {...register(category)} className="select select-ghost w-full max-w-xs">
            <option disabled selected>Pick the best JS framework</option>
            <option value={'salad'}>salad</option>
            <option value={'pizza'}>pizza</option>
            <option value={'soups'}>soups</option>
            <option value={'desserts'}>desserts</option>
            <option value={'drinks'}>drinks</option>
          </select>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;