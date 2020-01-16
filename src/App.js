import React from 'react';
import Home from "./pages/Home/Home";
import {withFirebase} from "./components/Firebase";


const App = props => {

    // props.firebase.users().on('value', snapshot => {
    //
    //     console.log(snapshot.val())
    // });


    var query = props.firebase.users().orderByKey();
    query.once("value")
        .then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                // key will be "ada" the first time and "alan" the second time
                var key = childSnapshot.key;
                // childData will be the actual contents of the child
                var childData = childSnapshot.val();


                console.log(childData)


            });
        });
    
    
    

    return (
        <Home/>
    );
};

export default withFirebase(App);
