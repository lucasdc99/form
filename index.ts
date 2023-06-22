import { zodResolver } from "@hookform/resolvers/zod";
import type {
  ControllerProps,
  ControllerRenderProps,
  DeepPartial,
  FieldPath,
  FieldPathByValue,
  FieldPathValue,
  FieldValues,
  Path,
  UseFormReturn,
} from "react-hook-form";
import {
  Controller,
  FormProvider,
  useController,
  useFieldArray,
  useForm,
  useFormContext,
  useFormState,
  useWatch,
} from "react-hook-form";

export {
  Controller,
  FormProvider,
  useController,
  useFieldArray,
  useForm,
  useFormContext,
  useFormState,
  useWatch,
  zodResolver,
};
export type {
  ControllerProps,
  ControllerRenderProps,
  DeepPartial,
  FieldPath,
  FieldPathByValue,
  FieldPathValue,
  FieldValues,
  UseFormReturn,
};

export type TFieldName<TFieldValues extends FieldValues> = Path<TFieldValues>;
