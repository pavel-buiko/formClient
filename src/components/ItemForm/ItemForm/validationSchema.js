import * as yup from "yup";

export const schema = yup.object().shape({
  title: yup
    .string()
    .required("Name is required")
    .max(50, "Max length is 50 characters"),
  type: yup.string().required("Category is required"),
  location: yup.string().notRequired(),
  description: yup.string().notRequired(),
  price: yup
    .number()
    .transform((value, originalValue) => (originalValue === "" ? 0 : value)),
  showServices: yup
    .string()
    .oneOf(["yes", "no"], "Please select an option")
    .required("Please select an option"),
  service: yup.string().notRequired(),
  comment: yup.string().notRequired(),
  microtasks: yup.array().of(
    yup.object({
      task: yup.string().required("microtasks is required"),
      status: yup.string().required("Status is required"),
    })
  ),
});
