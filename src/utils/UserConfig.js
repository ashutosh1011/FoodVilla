import { createContext } from "react";

const UserConfig = createContext({
    user:{
        name: "dummy name",
        email:"dummy@gmail.com"
    }
})

export default UserConfig;