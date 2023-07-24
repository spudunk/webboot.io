import styles from "../styles/Contact.module.css";
import { useState } from "react";
import initFirebase from "../../firebase/initFirebase";
import { getDatabase, ref, push } from "firebase/database";


export default function Contact() {
  const app = initFirebase();
  const db = getDatabase(app);
  
  const initialFormData = {
    email: "",
    name: "",
    phone: "",
    company: "",
    location: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (formData.email == "") {
      setError("email required");
      return;
    }
    setError("");
    setSubmitting(true);
    push(ref(db, 'submissions'),formData)
    .then((r) => {
      setSubmitting(false);
      setFormData(initialFormData);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      // console.log(r);
    })
  }

  const handleChange = (e) => {
    e.preventDefault();
    setFormData((s) => {
      let d = { ...s };
      d[e.target.name] = e.target.value;
      return d;
    });
  };

  return (
        <div className={styles.content}>
          <form action="" className={styles.form}>
            <div className={styles.formitem}>
              <label htmlFor="email">Email
              <input
                onChange={handleChange}
                name="email"
                type="email"
                value={formData.email}
              />
              </label>
            </div>
            <div className={styles.formitem}>
              <label htmlFor="name">Name
              <input
                onChange={handleChange}
                name="name"
                type="text"
                value={formData.name}
              />
              </label>
            </div>
            <div className={styles.formitem}>
              <label htmlFor="phone">Phone
              <input
                onChange={handleChange}
                name="phone"
                type="phone"
                value={formData.phone}
              />
              </label>
            </div>
            <div className={styles.formitem}>
              <label htmlFor="company">Company
              <input
                onChange={handleChange}
                name="company"
                type="text"
                value={formData.company}
              />
              </label>
            </div>
            <div className={styles.formitem}>
              <label htmlFor="phone">Location
              <input
                onChange={handleChange}
                name="location"
                type="text"
                value={formData.location}
              />
              </label>
            </div>
            <button
              className={`btn btn-primary ${styles.formbtn}`}
              onClick={handleSubmit}
            >
              Submit
            </button>
            <div className={styles.formmsg}>
              {submitting && <div>Submitting Form...</div>}
              {submitted && <div>Form Submitted!</div>}
              {error}
            </div>
          </form>
        </div>
  );
}
