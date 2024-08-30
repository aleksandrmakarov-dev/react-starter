import { api } from "@/lib/api-client";
import { MutationConfig } from "@/lib/react-query";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

export const exampleInputSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export type ExampleInput = z.infer<typeof exampleInputSchema>;

export const example = ({ data }: { data: ExampleInput }): Promise<string> => {
  return api.post("/example", data);
};

type UseExampleOptions = {
  mutationConfig?: MutationConfig<typeof example>;
};

export const useExample = ({ mutationConfig }: UseExampleOptions = {}) => {
  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    ...restConfig,
    mutationFn: example,
  });
};
