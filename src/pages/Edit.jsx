/* eslint-disable react/prop-types */
import { BiSolidUser } from "react-icons/bi";
import { LiaUserEditSolid } from "react-icons/lia";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import AuthContext from "../components/authContext";
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/slice/user";
import { useEffect } from "react";

function FormInput({ label, type, name, inputs, handleChange, bio = false }) {
  return (
    <>
      <div className="w-full px-5 translate-y-3">
        <label className="bg-label-blue px-[0.5rem] py-[0.25rem] border-[3px] border-black rounded-full font-bold">
          {label}
        </label>
      </div>
      {bio === false ? (
        <input
          required
          type={type}
          name={name}
          defaultValue={inputs[name] || ""}
          onChange={handleChange}
          className={`w-full h-16 px-[0.5rem] py-[0.25rem] border-[3px] border-black rounded-2xl hover:ring hover:ring-label-blue focus:ring focus:ring-label-blue items-center ml-auto`}
        />
      ) : (
        <textarea
          required
          type={type}
          name={name}
          defaultValue={inputs[name] || ""}
          onChange={handleChange}
          className={`w-full h-48 px-[0.5rem] py-[1rem] border-[3px] border-black rounded-2xl hover:ring hover:ring-label-blue focus:ring focus:ring-label-blue items-center ml-auto`}
        ></textarea>
      )}
    </>
  );
}

function Form() {

  const {user}=useSelector((state)=>state.user);  
  const [inputs, setInputs] = useState({});
  const [imageBase64, setImageBase64] = useState('');
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: 'image/*', // Specify the accepted file types
    onDrop: (acceptedFiles) => {
      // Convert the accepted image to base64
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = () => {
          setImageBase64(reader.result);
        };

        reader.readAsDataURL(file);
      }
    },
  });

  console.log(user);
  useEffect(() => {
    if(user){
      setInputs({
        username: user?.name,
        instagram: user?.socials?.instagram,
        twitter: user?.socials?.twitter,
        bio: user?.bio,
        pic: user?.pic,
      });
    }
  }, [user]);

  const { token } = useContext(AuthContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!token) {
      navigate("/login");
      return;
    }

    let newInputs= {
      ...inputs,
      pic:imageBase64
    }

    let updateUser = async () => {
      return await axios({
        method: "post",
        url: "http://localhost:8888/user",
        data: newInputs,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
    };

    const updatedUser = await updateUser();
    let formedData = updatedUser?.data?.data;
    dispatch(userActions.updateUser(formedData));
    navigate("/profile");
  };

  return (
    <form onSubmit={handleSubmit} className="translate-y-16 flex flex-col items-center w-[90vw] sm:max-w-xl border-4 border-black px-4 pt-4 pb-2 rounded-2xl bg-gradient-to-r from-card-grad-l to-card-grad-r "> 
      <img
        alt="profile pic"
        src={inputs?.pic||imageBase64 || '/src/assets/avatar (1).png'} // Display the uploaded image or a default one
        className="absolute -translate-y-20 mt-2 w-28 h-28 border-4 border-black rounded-full"
      />
      <div {...getRootProps({ className: "dropzone absolute -translate-y-20 mt-2 w-28 h-28 border-4 border-black rounded-full" })}>
        <input name='pic' type="file" accept="image/*" {...getInputProps()} />
        <LiaUserEditSolid className='w-full h-full border-black rounded-full  flex justify-center items-center bg-black text-white p-6 opacity-0 hover:opacity-80'/>
      </div>
      <div className='w-full flex flex-col items-center mt-14'>
        <FormInput label="Your Name" type="text" name="username" inputs={inputs} handleChange={handleChange}/>
        <FormInput label="Instagram" type="text" name="instagram" inputs={inputs} handleChange={handleChange}/>
        <FormInput label="Twitter" type="text" name="twitter" inputs={inputs} handleChange={handleChange}/>
        <FormInput label="Bio" type="text" name="bio" inputs={inputs} handleChange={handleChange} bio={true}/>
      </div>
      <input type="submit" value="Save" className='translate-y-8 bg-button-green hover:bg-button-green-dark px-[1rem] py-[0.5rem] border-4 border-black rounded-full font-bold text-lg'/>
    </form>
  );
}

function Edit() {
  return (
    <div className="flex flex-col items-center mb-40">
      <h1 className='text-4xl pt-4 pb-2 font-["League_Spartan"]'>
        ListenSphere
      </h1>
      <BiSolidUser className="text-nav-yellow bg-black p-2 rounded-full text-4xl" />
      <Form />
    </div>
  );
}

export default Edit;
