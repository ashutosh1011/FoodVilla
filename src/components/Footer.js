import { useContext } from "react";
import UserConfig from "../utils/UserConfig";




const Footer = () =>{
    const { user } = useContext(UserConfig);
    return (
        <div className="footer">
        <h1>This Application is developed by :{user.name}</h1>
        <h3>Email Id:{user.email}</h3>
        </div>
    )
}

export default Footer;

