import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  doc,
  setDoc,
  getDoc,
  addDoc,
  collection,
  query,
  where,
  getDocs,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 회원가입
export async function signup(email, password, username) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await setDoc(doc(db, "users", cred.user.uid), {
    username,
    createdAt: serverTimestamp()
  });
}

// 로그인
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// 로그아웃
export function logout() {
  return signOut(auth);
}

// 익명 메시지 전송
export async function sendMessage(username, content) {
  const q = query(collection(db, "users"), where("username", "==", username));
  const snap = await getDocs(q);
  if (snap.empty) throw "사용자 없음";

  const toUid = snap.docs[0].id;
  await addDoc(collection(db, "messages"), {
    toUid,
    content,
    createdAt: serverTimestamp(),
    isRead: false
  });
}

// 받은 메시지 불러오기
export async function loadMessages(uid) {
  const q = query(collection(db, "messages"), where("toUid", "==", uid));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}
