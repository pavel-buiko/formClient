import styles from "./FormInput.module.css";

export const FormInput = ({
  label,
  register,
  id,
  type = "text",
  error,
  placeholder,
}) => (
  <div className={styles.formGroup}>
    <label htmlFor={id}>{label}:</label>
    <input
      id={id}
      type={type}
      {...register}
      className={error ? styles.inputError : ""}
      placeholder={placeholder}
    />
    {error && <p className={styles.errorMessage}>{error.message}</p>}
  </div>
);
