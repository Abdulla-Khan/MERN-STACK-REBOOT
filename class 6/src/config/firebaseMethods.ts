import app from "./firebaseConfig";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";

const db = getDatabase(app);

export const getData = (nodeName: string, id?: any) => {
  return new Promise((resolve, reject) => {
    const reference = ref(db, `${nodeName}/${id ? id : ""}`);

    onValue(reference, (data) => {
      if (data.exists()) {
        if (id) {
          resolve(data.val());
        } else {
          let arr = Object.values(data.val());
          resolve(arr);
        }
      } else {
        reject({ message: "No data found" });
      }
    });
  });
};

export const sendData = (nodeName: string, data: any) => {
  return new Promise((resolve, reject) => {
    data.id = push(ref(db, `${nodeName}`)).key;
    const reference = ref(db, `${nodeName}/${data.id}`);

    // set(reference, data);
    set(reference, data)
      .then(() => {
        resolve("Data Sent Successfully");
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const updateData = (nodeName: string, id: any, data: any) => {
  return new Promise((resolve, reject) => {
    const reference = ref(db, `${nodeName}/${id}`);

    set(reference, data)
      .then(() => {
        resolve("Data Updated Successfully");
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const deleteData = (nodeName: string, id: any) => {
  return new Promise((resolve, reject) => {
    const reference = ref(db, `${nodeName}/${id}`);

    remove(reference)
      .then(() => {
        resolve("Data Deleted Successfully");
      })
      .catch((error) => {
        reject(error);
      });
  });
};
