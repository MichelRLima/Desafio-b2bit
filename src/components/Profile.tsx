import { useContext, useEffect, useState } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ApiB2bit from "../api/ApiB2bit";
import { UserProfile } from "../models/interfaces/UserProfile";
import notifyInfo from "../functions/alerts/notifyInfo";
import userImage from "../images/user.png"




const Profile = () => {
    const [user, setUser] = useState<UserProfile | null>(null);

    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('LoginForm must be used within an AuthProvider');
    }
    const { token, postToken } = context;

    const logoutUser = (token: string, stateUser: boolean) => {
        postToken(token, stateUser)
        notifyInfo("Você saiu do perfil")
    }

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await ApiB2bit.get('/profile/', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('TokenUser')}`,
                        'Accept': 'application/json;version=v1_web',
                        'Content-Type': 'application/json'
                    }
                });
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user profile:', error);

            }
        };
        fetchUser()

    }, []);




    return (

        <>

            {token ? (
                <div className='w-screen h-screen overflow-auto bg-gray-200 flex flex-col items-center '>
                    <div className='w-full h-16 border-2 bg-white flex justify-end items-center'>
                        <button onClick={() => logoutUser("", false)} className=" w-272px h-44px mr-8 bg-02274F-bg borde rounded-md text-white font-nunito font-bold hover:bg-gray-900">Logout</button>
                    </div>

                    <div className="w-full sm:w-356px h-315px bg-fdfdfd-bg rounded-md mt-36 mx-4 flex items-center flex-col shadow-lg">

                        <div className="w-20 h-20 mt-9 flex justify-center items-center flex-col">
                            <p className="text-xs text-center font-nunito">Profile picture</p>
                            <div className="w-14 h-14  mt-2 rounded-md">
                                <img className="rounded-lg border" src={userImage} alt="image" />
                            </div>
                        </div>

                        <div className="w-72 h-16 mt-5">
                            <p className="text-sm font-nunito mb-1">Your <b>Name</b></p>
                            <div className="w-full h-11 bg-f4f4f4-bg rounded-lg flex items-center pl-3">
                                <p className="text-xs">{user?.name}</p>
                            </div>

                        </div>

                        <div className="w-72 h-16 mt-5">
                            <p className="text-sm font-nunito mb-1">Your <b>E-mail</b></p>
                            <div className="w-full h-11 bg-f4f4f4-bg rounded-lg flex items-center pl-3">
                                <p className="text-xs">{user?.email}</p>
                            </div>

                        </div>

                    </div>


                </div>
            ) : (
                <Navigate to="/" />

            )}

        </>


    )

}

export default Profile