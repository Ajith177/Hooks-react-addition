// function AddTask({ setDate }) {
//     const [text, setText] = useState("");
//     const [title, setTitle] = useState("");
    
//     function onAddTask(text) {
//       setDate((prevValue) => [
//         ...prevValue,
//         { name: title, value: text, id: Math.floor(Math.random() * 100) },
//       ]);
//     }
//     return (
//       <div>
//         <label>Title</label>
//         <br></br>
//         <input
//           type="text"
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Create Title"
//           id="title"
//         ></input>
//         <br></br>
//         <label>Create Content</label>
//         <br></br>
//         <textarea
//           rows="10"
//           cols="30"
//           placeholder="Enter the content"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//         <br></br>
//         <button onClick={() => onAddTask(text)}>Add</button>
//       </div>
//     );
//   }
  
//   export default AddTask;
  