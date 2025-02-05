import SectionTitle from "../../../assets/Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import ChefRecommends from "./ChefRecommends";

const Recommends = () => {
  const [recommends, setRecommends] = useState([])
  console.log(recommends);

  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        const chefRecommend = data.filter(item => item.category === "salad")
        setRecommends(chefRecommend)
      })
  }, [])
  return (
    <div>
      <SectionTitle
        subHeading={'Should Try'}
        heading={'CHEF RECOMMENDS'}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-4">
        {
          recommends.map(item => <ChefRecommends
            key={item._id}
            item={item}
          ></ChefRecommends>)
        }
      </div>
    </div>
  );
};

export default Recommends;