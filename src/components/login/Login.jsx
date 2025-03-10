import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";

const Login = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    });

    const handleAvatar = (e) => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            });
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
    };

    return (
        <div className="login">
            <div className="item">
                <h2>Welcome Back</h2>
                <form onSubmit={handleLogin}> {/* Corrected from <from> to <form> */}
                    <input type="text" placeholder="Email" name="email" />
                    <input type="password" placeholder="Password" name="password" /> {/* Corrected 'passward' to 'password' */}
                    <button type="submit">Sign In</button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="item">
                <h2>Create an Account</h2>
                <form>
                    <label htmlFor="file">
                        <img src={avatar.url || "./avatar.png"} alt="" />
                        Upload an Image
                    </label>
                    <input
                        type="file"
                        id="file"
                        style={{ display: "none" }}
                        onChange={handleAvatar}
                    />
                    <input type="text" placeholder="Username" name="username" />
                    <input type="text" placeholder="Email" name="email" />
                    <input type="password" placeholder="Password" name="password" /> {/* Corrected 'passward' to 'password' */}
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Login;






// import { useState } from "react";
// import "./login.css";
// import { toast } from "react-toastify";

// const Login = () => {
//     const [avatar, setAvatar] = useState({
//         file:null,
//         url:""
//     })

//     const handleAvatar = e => {
//       if(e.target.files[0]){  
//         setAvatar({
//             file:e.target.files[0],
//             url:URL.createObjectURL(e.target.files[0])
//         })
//       }
//     }

//     const handleLogin = e =>{
//         e.preventDefault()
//         toast.warm("Hello")
//     }

//     return (
//     <div className="login">
//         <div className="item">
//             <h2>Welcome Back</h2>
//             <from onSubmit={handleLogin}>
//                 <input type="text" placeholder="Email" name="email" />
//                 <input type="passward" placeholder="Password" name="passward" />
//                 <button>Sign In</button>
//             </from>
//         </div>
//         <div className="separator"></div>
//         <div className="item">
//         <h2>Create an Account</h2>
//             <from>
//                 <label htmlFor="file">
//                     <img src={avatar.url || "./avatar.png"} alt="" />
//                     Upload an Image</label>
//                 <input type="file" id="file" style={{display:"none"}} onChange={handleAvatar}/>
//                 <input type="text" placeholder="Username" name="username" />
//                 <input type="text" placeholder="Email" name="email" />
//                 <input type="passward" placeholder="Password" name="passward" />
//                 <button>Sign Up</button>
//             </from>
//         </div>
//     </div>
//     );
// };

// export default Login;