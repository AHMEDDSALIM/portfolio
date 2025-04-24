import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import ParticalsBg from "../components/ParticalsBg";
import { motion } from "framer-motion";
function RootLayout() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <ParticalsBg />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <NavBar />
        <Outlet />
      </motion.div>
    </>
  );
}

export default RootLayout;
