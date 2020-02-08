import React from 'react';
import 'firebase/firestore';
import firebaseApp, {db} from '../conf/Firebase'
class User extends React.Component {
  render() {
    return (
        <form>
          <input
            type="text"
            name="fullname"
            placeholder="Full name"
          />
          <input
            type="email"
            name="email"
            placeholder="Full name"
          />
          <button type="submit">Submit</button>
        </form>
        );
      }
   }
export default User;