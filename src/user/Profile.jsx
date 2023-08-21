import { useState } from "react";
function Profile(){
    const [login,setLogin]=useState(2)

    return(
        <>
        <div>
            {login==1?<h1>Welcom Awais</h1>:login==2?<h1>Welcom Asad</h1>:<h1>Welcom Guest</h1>}
        </div>
        </>
    )

}
export default Profile;