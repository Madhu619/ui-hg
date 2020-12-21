import React from 'react';
import LoaderGif from './LoaderSvg';

export default function Loader () {
    const style = {
        imageWrapper: {
            position:'absolute',
            maxWidth:'45%',
            maxHeight:'45%',
            top:'50%',
            left:'50%',
            overflow:'visible',
        },
        imageWidth : {
            position:'relative',
            maxWidth:'100%',
            maxHeight:'100%',
            marginTop:'-50%',
            marginLeft:'-50%',
        }
      }
    return (
        <div style={style.imageWrapper}> 
            <LoaderGif />
        </div>
    )
}
