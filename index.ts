import { FieldValues, Path } from "react-hook-form";

export { zodResolver } from "@hookform/resolvers/zod";
export {
  Controller,
  FormProvider,
  UseControllerProps,
  UseFormRegister,
  useController,
  useFieldArray,
  useForm,
  useFormContext,
  useFormState,
  useWatch,
} from "react-hook-form";
export type {
  Control,
  ControllerProps,
  ControllerRenderProps,
  DeepPartial,
  DefaultValues,
  FieldError,
  FieldErrors,
  FieldPath,
  FieldPathByValue,
  FieldPathValue,
  FieldValues,
  Path,
  UseFormReturn,
} from "react-hook-form";

export type TFieldName<TFieldValues extends FieldValues> = Path<TFieldValues>;
