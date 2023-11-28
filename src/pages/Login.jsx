import axios from 'axios';
import React from 'react'
import { useEffect } from 'react'

export default function Login() {

    useEffect(() => {
        
        axios.post('https://1ede-222-108-73-38.ngrok-free.app/user/kakao/callback', {
            code:'xoSsFq2cINotrFXMZP4_6WD9fSeqacEYgNhBWhXF9D9al_wgUUiG9722UeAKPXKYAAABjBaVQO3Nsk3jZ7dWzg'
        }, {
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': '69420',
                'Accept': 'application/json'
            }
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.error(error);
        });
      }, []);

  return (
    <div>
      test
    </div>
  )
}
