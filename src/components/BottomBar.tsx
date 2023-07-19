import { AccountCircleOutlined, FavoriteBorderOutlined, Search } from "@mui/icons-material";
import { useContext } from "react";
import { RentalContext } from "../context";

export default function BottomBar() {
  const {isHidden} = useContext(RentalContext)


  return (
    <div className={`fixed mx-auto bg-white flex items-center z-20 bottom-0 justify-center gap-16 w-full ${isHidden?"translate-x-16":""}`}>
      <div className="flex flex-col items-center justify-center">
        <Search fontSize="large" color="disabled" />
        <span className="text-center text-xs text-gray-300">Explore</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <FavoriteBorderOutlined fontSize="large" color="disabled" />
        <span className="text-center text-xs text-gray-400">Wishlists</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <AccountCircleOutlined fontSize="large" color="disabled" />
        <span className="text-center text-xs text-gray-400">Login</span>
      </div>
    </div>
  );
}
