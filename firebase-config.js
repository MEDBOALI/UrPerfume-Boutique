// Firebase Configuration - UrPerfume
const firebaseConfig = {
  apiKey: "AIzaSyCkyLGPQD_5TaZqqz-WwP5lDuoijf-MDMY",
    authDomain: "urperfume-3fb81.firebaseapp.com",
      projectId: "urperfume-3fb81",
        storageBucket: "urperfume-3fb81.firebasestorage.app",
          messagingSenderId: "1070808182720",
            appId: "1:1070808182720:web:4b9c35dab6f18b179aa226",
              measurementId: "G-BMCC5H4Y75"
              };

              // Initialize Firebase
              if (typeof firebase !== 'undefined') {
                  firebase.initializeApp(firebaseConfig);
                      const db = firebase.firestore();
                          window.db = db; // Make db accessible globally
                              console.log("Firebase initialized successfully");
                              } else {
                                  console.error("Firebase SDK not found. Make sure scripts are included in index.html");
                                  }
                                  
