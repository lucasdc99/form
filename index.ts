export {
  Controller,
  FormProvider,
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
  FieldError,
  FieldPath,
  FieldPathByValue,
  FieldPathValue,
  FieldValues,
  Path,
  UseFormReturn,
} from "react-hook-form";

export type TFieldName<TFieldValues extends FieldValues> = Path<TFieldValues>;
