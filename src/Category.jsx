import { TiThSmallOutline } from "react-icons/ti";
import { FaPizzaSlice } from "react-icons/fa";
import { LuSoup } from "react-icons/lu";
import { MdFastfood } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { SiBurgerking } from "react-icons/si";

const Categories = [
  {
    id: 1,
    name: "All",
    icon: <TiThSmallOutline className="w-[60px] h-[60px] text-green-600" />
  },
  {
    id: 2,
    name: "Breakfast",
    icon: <MdFastfood className="w-[60px] h-[60px] text-green-600" />
  },
  {
    id: 3,
    name: "Soups",
    icon: <LuSoup className="w-[60px] h-[60px] text-green-600" />
  },
  {
    id: 4,
    name: "Pasta",
    icon: <GiFullPizza className="w-[60px] h-[60px] text-green-600" />
  },
  {
    id: 5,
    name: "Main Course",
    icon: <MdFastfood className="w-[60px] h-[60px] text-green-600" />
  },
  {
    id: 6,
    name: "Pizza",
    icon: <FaPizzaSlice className="w-[60px] h-[60px] text-green-600" />
  },
  {
    id: 7,
    name: "Burger",
    icon: <SiBurgerking className="w-[60px] h-[60px] text-green-600" />
  }
];

export default Categories;