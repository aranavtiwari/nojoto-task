import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import {AiFillHeart,AiTwotoneEdit,AiOutlineClose,AiFillDelete,AiOutlineMail,AiOutlinePhone} from "react-icons/ai";
import {BsGlobe} from "react-icons/bs";

const User = (para) => {
    const [like, setLike] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState(para.name)
    const [phone, setPhone] = useState(para.phone)
    const [email, setEmail] = useState(para.email)
    const [website, setWebsite] = useState(para.website)
    

    const likef = () => {
        return setLike(!like)
    }


    

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);

      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setOpen(false);
        para.update(para.id, {name , email, phone,website})

    }

      const handleChangeName = (e) => {
          console.log(e.target.value)
          setName(e.target.value)
      }

      const handleChangeEmail = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    const handleChangePhone = (e) => {
        console.log(e.target.value)
        setPhone(e.target.value)
    }

    const handleChangeWebsite = (e) => {
        console.log(e.target.value)
        setWebsite(e.target.value)
    }
    

    return (
            <div className="card">
                    <div className="profile">
                        <div>
                        <img 
                        className="img"
                        src={`https://avatars.dicebear.com/v2/avataaars/{{${para.username}}}.svg?options[mood][]=happy `}
                        alt="new"
                    />
                        </div>
                    
                    </div>
                    <div className="name">
                        {para.name}
                    </div>
                    <p className="info"><AiOutlineMail className="info-i"/> {para.email} </p>
                    <p className="info"><AiOutlinePhone className="info-i"/> {para.phone}</p>
                    <p className="info"><BsGlobe className="info-i"/> {para.website}</p>
                    <div className="funbox">
                        <div className={like ? 'red fun fun1' : 'notred fun'} onClick={() => likef()}><AiFillHeart className="icon"/></div>
                        


                        <div>
                            <Button className="edit-btn" onClick={handleClickOpen}>
                                <AiTwotoneEdit className="edit"/>
                            </Button>
                            
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <Button className="closebtn" onClick={handleClose} color="primary">
                                    <AiOutlineClose className="closeicon"/>
                                </Button>
                                <DialogTitle id="alert-dialog-title">{"Edit User Info"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText className="user-info" id="alert-dialog-description">
                                        
                                            <label className="lab">
                                                Name: &nbsp; &nbsp;&nbsp;<input  t type="text" defaultValue={para.name} onChange={handleChangeName}/>
                                            </label>
                                            <label className="lab">
                                                Email: &nbsp; &nbsp;&nbsp;<input type="email" defaultValue={para.email} onChange={handleChangeEmail} />
                                            </label>

                                            <label className="lab labp">
                                                Phone: &nbsp;&nbsp; <input type='text' defaultValue={para.phone} onChange={handleChangePhone} />
                                            </label>
                                            
                                            <lable className="lab labi">
                                                Website: &nbsp; <input type="text" defaultValue={para.website} onChange={handleChangeWebsite} />
                                            </lable>
                                        
                                        
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                
                                <Button onClick={handleSubmit} color="primary" autoFocus>
                                    Agree
                                </Button>
                                </DialogActions>
                            </Dialog>
                        </div>




                        <div className="fun" onClick={para.remove}><AiFillDelete className="icon-del"/></div>
                    </div>
                 </div>
    )

}

export default User;