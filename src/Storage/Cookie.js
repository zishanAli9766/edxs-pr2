import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const Cookie = () => {
   const [name, setName] = useState('');
   const [pwd, setPwd] = useState('');
   const [cookies, setCookie] = useCookies(['user']);

   const handle = (e) => {
       e.preventDefault();
      setCookie('Name', name);
      setCookie('Password', pwd);
   };
   return (
      <div >
      <h1>Name of the user:</h1>
      <form onSubmit={handle}>

      <input
         placeholder="name"
         value={name}
         onChange={(e) => setName(e.target.value)}
      />
      <h1>Password of the user:</h1>
      <input
         type="password"
         placeholder="name"
         value={pwd}
         onChange={(e) => setPwd(e.target.value)}
      />
   
         <button >Set Cookie</button>
   
      </form>
   </div>
   );
};
export default Cookie;