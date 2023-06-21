import { zodResolver } from "@hookform/resolvers/zod";
import type {
  ControllerRenderProps,
  DeepPartial,
  FieldPathByValue,
  FieldPathValue,
  FieldValues,
  Path,
  UseFormReturn,
} from "react-hook-form";
import {
  FormProvider,
  useController,
  useFieldArray,
  useForm,
  useFormContext,
  useFormState,
  useWatch,
} from "react-hook-form";

export type { FieldValues, UseFormReturn, DeepPartial, FieldPathValue, FieldPathByValue, ControllerRenderProps };
export { useController, zodResolver, useFormState, useWatch, useFormContext, useForm, useFieldArray, FormProvider };

export type TFieldName<TFieldValues extends FieldValues> = Path<TFieldValues>;
