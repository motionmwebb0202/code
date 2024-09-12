import React from 'react';
import Aboutcontacts from '../aboutcontacts/Aboutcontacts';
import Ourcontacts from '../ourcontacts/Ourcontacts';
import Theysay from '../theysay/Theysay';
import Telephone from '../telephone/Telephone';
import Where from '../where/Where';

const Contacts = () => {
   return (
      <div>
           <Aboutcontacts/>
           <Ourcontacts/>
           <Telephone/>
           <Where/>
      </div>
   );
};

export default Contacts;