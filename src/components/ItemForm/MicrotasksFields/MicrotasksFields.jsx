import styles from "./MicrotasksFields.module.css";
import { FormInput } from "../FormInput/FormInput";
import { FormSelect } from "../FormSelect/FormSelect";
import { Button } from "../Button/Button";

export const MicrotasksFields = ({
  fields,
  register,
  errors,
  append,
  remove,
}) => {
  return (
    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
      <h3>Microtasks</h3>
      {fields.map((field, index) => (
        <div key={field.id} className={`${styles.formGrid} ${styles.grid2}`}>
          <FormInput
            label={`Task ${index + 1}*`}
            id={`microtasks.${index}.task`}
            register={register(`microtasks.${index}.task`)}
            error={errors.microtasks?.[index]?.task}
            placeholder={`Microtask ${index + 1}`}
          />
          <FormSelect
            label="Status*"
            id={`microtasks.${index}.status`}
            register={register(`microtasks.${index}.status`)}
            options={[
              { value: "notStarted", label: "Not Staged" },
              { value: "inProgress", label: "In Progress" },
              { value: "completed", label: "Completed" },
              { value: "onHold", label: "On Hold" },
              { value: "canceled", label: "Cancelled" },
            ]}
            error={errors.microtasks?.[index]?.status}
          />
          <Button
            type="button"
            className={styles.removeMicrotaskButton}
            onClick={() => remove(index)}
            label="Remove"
          />
        </div>
      ))}

      <Button
        type="button"
        className={styles.addMicrotaskButton}
        onClick={() => append({ task: "", status: "" })}
        label="Add microtask"
      />
    </div>
  );
};
