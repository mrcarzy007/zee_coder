import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import styles from "./Admission.module.css";

const Admission = () => {
  return (
    <>
      <Header title="Admssion" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos voluptatum
        delectus impedit Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. In, possimus.
      </Header>

      <div className={styles.container}>
        <header className={styles.header}>Registration form</header>

        <form className={styles.form} action="#">
          {[
            { type: "title", label: "personal details" },
            {
              type: "text",
              label: "name",
              placeholder: "Enter Your Name",
              required: true,
            },
            { type: "date", label: "Date of Birth", required: true },
            {
              type: "text",
              label: "Admitting in Class",
              required: true,
              placeholder: "Admitting",
            },
            {
              type: "text",
              label: "Mother Tongue",
              required: true,
              placeholder: "Enter mother tongue",
            },
            {
              type: "text",
              label: "Religion",
              required: true,
              placeholder: "Religion",
            },
            {
              type: "text",
              label: "Aadhar No",
              required: true,
              placeholder: "Enter aadhar",
            },
            {
              type: "text",
              label: "Category",
              required: true,
              placeholder: "Categogy",
            },
            {
              type: "text",
              label: "Father's Name",
              required: true,
              placeholder: "Enter father's name",
            },
            {
              type: "text",
              label: "Qualification",
              required: true,
              placeholder: "Enter father's qualification",
            },
            {
              type: "text",
              label: "Occupation",
              required: true,
              placeholder: "Enter father's occupation",
            },
            {
              type: "number",
              label: "Phone",
              required: true,
              placeholder: "Enter father's phone",
            },
            {
              type: "text",
              label: "Aadhar No",
              required: true,
              placeholder: "Enter father's aadhar",
            },
            {
              type: "text",
              label: "Mother's Name",
              required: true,
              placeholder: "Enter mother's name",
            },
            {
              type: "text",
              label: "Qualification",
              required: true,
              placeholder: "Enter mother's qualification",
            },
            {
              type: "text",
              label: "Occupation",
              required: true,
              placeholder: "Enter mother's occupation",
            },
            {
              type: "text",
              label: "Phone",
              required: true,
              placeholder: "Enter mother's phone",
            },
            {
              type: "text",
              label: "Aadhar No",
              required: true,
              placeholder: "Enter mother's aadhar",
            },
            {
              type: "text",
              label: "Local Guardian's Name",
              required: true,
              placeholder: "Enter local guardian's name",
            },
            { type: "title", label: "Contact Information" },
            {
              type: "number",
              label: "Local Guardian's Phone",
              required: true,
              placeholder: "Enter local guardian's phone",
            },
            {
              type: "mutiple",
              name: "address",
              id: "address",
              rows: "3",
              label: "Local/Current (Residing) Address",
              required: true,
              placeholder: "Enter current address ",
            },

            {
              type: "mutiple",
              name: "address",
              id: "address",
              rows: "3",
              label: "Permanent Address",
              required: true,
              placeholder: "Enter permanent address",
            },
          ].map(({ type, label, placeholder, required, ...rest }, i) => {
            if (type === "title")
              return (
                <div key={i} className={styles.title}>
                  {label}
                </div>
              );

            if (type === "multiple")
              return (
                <div key={i} className={styles.formGroup}>
                  <label>{label}</label>
                  <textarea
                    placeholder={placeholder}
                    required={required}
                    {...rest}
                  ></textarea>
                </div>
              );

            return (
              <div key={i} className={styles.formGroup}>
                <label>{label}</label>
                <input
                  type={type}
                  placeholder={placeholder}
                  required={required}
                  {...rest}
                />
              </div>
            );
          })}
        </form>

        <div className="acknowleged">
          <div className="acknowleged__container">
            <h2
              style={{
                textAlign: "center",
                color: "black",
                fontSize: "1.2rem",
                paddingBottom: "15px",
                borderBottomStyle: "solid",
                borderBottomWidth: "3.1px",
              }}
            >
              Acknowledgement
            </h2>
            <p style={{ textAlign: "center", color: "brown" }}>
              I hereby certify that all of the information provided by me in
              this application (or any other accompanying or required documents)
              is correct. accurate and complete to the best of my knowledge
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admission;
