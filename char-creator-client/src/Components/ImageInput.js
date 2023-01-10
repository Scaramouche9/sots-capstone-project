import React, { useState } from "react";  
import axios from "axios";
import {Image} from 'cloudinary-react'
import { upload } from "@testing-library/user-event/dist/upload";

export default function ImageInput(props){


    return(
        <div className='form-group'>
            <label htmlFor='image-input'>Character Image Upload: </label>
            <input name="image-input" id="image-input" type='file' accept='image/*' 
            onChange={(event)=>{props.setSelectedImage(event.target.files[0])}}></input>
            <Image 
            style={{width: 200}}
            cloudName='dr8dbzjws'
            publicId={props.characterImageUrl}
            />
        </div>
    )
}