import React, {useState} from "react";
import {collection, addDoc} from "firebase/firestore"
import {db} from "../../firebase";

export default function CreatePost() {
    const [inputText, setInputText] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(inputText){
            try{
                addDoc(collection(db,"posts"),{
                    text: inputText,
                    date: new Date(),
                })
                setInputText("");
            }catch (error){
                console.error("An error accured: "+error)
            }
        } 
    }

  return (
    <section className="create-post">
      <div className="container">
        <h1 className="title">New Post</h1>
        <button type="submit" className="btn_create-post" onClick={handleSubmit}>Create post</button>
      </div>
      <form className="form create-post_form" onSubmit={handleSubmit}>
        <input 
        type="text" 
        id="inputText" 
        placeholder="Type something here..." 
        value={inputText} onChange={(e) =>setInputText(e.target.value)} 
        />
      </form>
    </section>
  );
}
