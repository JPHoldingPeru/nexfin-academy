const firebaseConfig = {
apiKey: "AQUI_TU_API_KEY",
authDomain: "AQUI_TU_DOMINIO",
projectId: "AQUI_TU_PROJECT_ID",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
