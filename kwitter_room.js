var firebaseConfig = {
    apiKey: "AIzaSyA_7FwqYRhVyNSXrXD8-hwEJ0wIbjj3UfQ",
    authDomain: "practice-app-18dff.firebaseapp.com",
    databaseURL: "https://practice-app-18dff-default-rtdb.firebaseio.com",
    projectId: "practice-app-18dff",
    storageBucket: "practice-app-18dff.appspot.com",
    messagingSenderId: "1074845455576",
    appId: "1:1074845455576:web:2ccd4d6d496640857673ad"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()

{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}