import { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInput } from "../FormInput/FormInput";
import { FormSelect } from "../FormSelect/FormSelect";
import { RadioGroup } from "../RadioGroup/RadioGroup";
import { MicrotasksFields } from "../MicrotasksFields/MicrotasksFields";
import { Button } from "../Button/Button";
import { schema } from "./validationSchema";
import { extractChangedFields, extractFilledFields } from "./formHelpers";
import styles from "./ItemForm.module.css";

export const ItemForm = ({ defaultValues = {}, onSubmit }) => {
  const isEdit = Boolean(
    defaultValues && Object.keys(defaultValues).length > 0
  );

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, dirtyFields },
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "microtasks",
  });

  const showServices = watch("showServices") === "yes";

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const handleFormSubmit = (data) => {
    let payload = {};

    if (isEdit) {
      payload = extractChangedFields(data, dirtyFields);
    } else {
      payload = extractFilledFields(data);
    }
    console.log("Payload: ", payload);
    onSubmit(payload);
  };

  return (
    <div className={styles.formContainer}>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className={styles.formWrapper}
      >
        <div className={`${styles.formGrid} ${styles.grid3}`}>
          <FormInput
            label="Title"
            id="title"
            register={register("title")}
            error={errors.title}
          />
          <FormSelect
            label="Type"
            id="Type"
            register={register("type")}
            options={[
              { value: "", label: "Select project type" },
              { value: "residential", label: "Residential" },
              { value: "commercial", label: "Commercial" },
              { value: "public-park", label: "Public Park" },
            ]}
            error={errors.type}
          />
          <FormInput
            label="Price*"
            id="price"
            type="number"
            register={register("price")}
            error={errors.price}
          />
        </div>
        <div className={`${styles.formGrid} ${styles.grid2}`}>
          <FormInput
            label="Location"
            id="location"
            register={register("location")}
            error={errors.location}
          />
          <FormInput
            label="Description"
            id="description"
            register={register("description")}
            error={errors.description}
          />
        </div>

        <RadioGroup
          label="Please, select one additional service"
          register={register("showServices")}
          options={[
            {
              value: "yes",
              label: "Yes",
              defaultChecked: defaultValues?.showServices === "yes",
            },
            {
              value: "no",
              label: "No",
              defaultChecked: defaultValues?.showServices !== "yes",
            },
          ]}
          error={errors.showServices}
        />
        {showServices && (
          <div className={`${styles.formGrid} ${styles.grid2}`}>
            <FormSelect
              label="Service"
              id="service"
              register={register("service")}
              options={[
                { value: "", label: "Select service" },
                { value: "lighting", label: "Lighting" },
                { value: "irrigation", label: "Irrigation" },
                { value: "maintenance", label: "Maintenance" },
                {
                  value: "installation",
                  label: "Installation",
                },
                {
                  value: "design-consultation",
                  label: "Design Consultation",
                },
              ]}
              error={errors.service}
            />
            <FormInput
              label="Comment"
              id="serviceComment"
              type="text"
              register={register("serviceComment")}
              error={errors.serviceComment}
              placeholder="Enter comment"
            />
          </div>
        )}
        <MicrotasksFields
          fields={fields}
          register={register}
          errors={errors}
          append={append}
          remove={remove}
        />
        <div className={styles.formActions}>
          <Button
            type="submit"
            className={styles.actionButton}
            label="Submit"
          />
        </div>
      </form>
    </div>
  );
};
