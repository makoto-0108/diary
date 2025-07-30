// Firebaseの設定（ご自身の設定に置き換えてください）
const firebaseConfig = {
  apiKey: "あなたのAPIキー",
  authDomain: "あなたのauthDomain",
  projectId: "あなたのprojectId",
  appId: "あなたのappId",
};

// 初期化
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// ログイン処理
document.getElementById("loginBtn").addEventListener("click", () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
});

// ログアウト処理
document.getElementById("logoutBtn").addEventListener("click", () => {
  auth.signOut();
});

// 状態監視
auth.onAuthStateChanged((user) => {
  const userInfo = document.getElementById("userInfo");
  if (user) {
    userInfo.innerHTML = `<p>こんにちは、${user.displayName}さん！<br>メール: ${user.email}</p>`;
  } else {
    userInfo.innerHTML = `<p>ログインしていません。</p>`;
  }
});
