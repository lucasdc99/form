import { FieldValues, Path } from "react-hook-form";

export { zodResolver } from "@hookform/resolvers/zod";
export {
  Controller,
  FormProvider,
  useController,
  useFieldArray,
  useForm,
  useFormContext,
  useFormState,
  useWatch,
  UseControllerProps,
  UseFormRegister,
} from "react-hook-form";
export type {
  Control,
  ControllerProps,
  ControllerRenderProps,
  DeepPartial,
  FieldError,
  FieldPath,
  FieldPathByValue,
  FieldPathValue,
  FieldValues,
  Path,
  UseFormReturn,
  FieldErrors,
} from "react-hook-form";

export type TFieldName<TFieldValues extends FieldValues> = Path<TFieldValues>;
