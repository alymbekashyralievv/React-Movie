import { CiSearch } from "react-icons/ci";
import Input from "../UI/Input/Input";

const Search = () => {
  return (
    <div>
      <div className="app-container">
        <h3 className="text-[24px] mb-[15px]">Поиск по сайту</h3>
        <p>На нашем сайте вы найдете подходящее вам фильмы и сериалы</p>
        <div className="flex items-center rounded-[10px] pr-[20px] bg-[#1a1a1a]">
          <Input hintText="Поиск..." />
          <CiSearch color="red" className="text-[33px]" />
        </div>
      </div>
    </div>
  );
};

export default Search;
