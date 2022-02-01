import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";


export const Add = ({addnewmovie}) => {
  const [show, setShow] = useState(false);
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addMovie,setAddMovie]=useState(
    {
  Title:"",
  description:"",
  posterURL:"",
  rating:0,
  year: "",
  type: "",
  length: "",
});
  console.log(addMovie);
  const AddMovie = (e) => {
    setAddMovie({...addMovie,[e.target.name]:e.target.value})
    
}

  const HandelSubmit=(e)=>{
    if (addMovie.title =="" || addMovie.description =="" || addMovie.posterURL =="" || addMovie.year=="" || addMovie.type=="" ){
      return alert("fill all the blanks")
    }
    addnewmovie(addMovie)
    setAddMovie({title:"",
    description:"",
    posterURL:"",
    rating:0,
    year: "",
    type: "",
    length: "",
  })

    handleClose()
  }
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h1>Add Movie</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text"  placeholder="title" required onChange={AddMovie} name="Title" value={addMovie.Title} />

          <input type="text"  placeholder="desc"  required onChange={AddMovie} name="description" value={addMovie.description}/>

          <input type="url"  placeholder="image"  required onChange={AddMovie} name="posterURL" value={addMovie.posterURL}/>

          <input type="number"  placeholder="rating" required onChange={AddMovie} name="rating" value={addMovie.rating} min={0} max={100} />

          <input type="text"  placeholder="year"  required onChange={AddMovie} name="year" value={addMovie.year}/>

          <input type="text"  placeholder="type"  required onChange={AddMovie} name="type" value={addMovie.type}/>

          <input type="text"  placeholder="length"  required onChange={AddMovie} name="length" value={addMovie.length} />
          
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={HandelSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
