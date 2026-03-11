"use client";


import { z } from "zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GeneratedAvatar } from "@/components/ui/generated-avatar";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";


import { AgentGetOne } from "../../types";
import { agentInsertSchema } from "../../schemas";
import { zodResolver } from "@hookform/resolvers/zod";

interface AgentFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
  initialValues?: AgentGetOne;
}

export const AgentForm = ({
  onSuccess,
  onCancel,
  initialValues,
}: AgentFormProps) => {
  const trpc = useTRPC();   
  const router = useRouter();
  const queryClient = useQueryClient();

  const createAgent = useMutation(
    trpc.agents.create.mutationOptions({
      onSuccess: () => {

      if (initialValues?.id) {
        queryClient.invalidateQueries(
          trpc.agents.getOne.queryOptions({ id: initialValues.id }),
        );
      }
      onSuccess?.();
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }),
  );

  const form = useForm<z.infer<typeof agentInsertSchema>>({
    resolver: zodResolver(agentInsertSchema),
    defaultValues: {
        name: initialValues?.name ?? "",
        instructions: initialValues?.instructions ?? "",
    },
  });

  const isEdit = !!initialValues?.id;
  const isPending = createAgent.isPending;

  const onSubmit = (values: z.infer<typeof agentInsertSchema>) => {
    if (isEdit) {
        console.log("TODO: updateAgent")
    } else {
        createAgent.mutate(values);
    }
  };
return (
  <Form {...form}>
    <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
      <GeneratedAvatar
        seed={form.watch("name")}
        variant="botttsNeutral"
        className="border size-16"
      />

      <FormField
        name="name"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input {...field} placeholder="e.g Jhon" />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        name="instructions"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Instructions</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Commands" />
            </FormControl>
          </FormItem>
        )}
      />
      <div className="flex justify-between gap-x-2">
        {onCancel && (
            <Button 
            variant="ghost"
            disabled={isPending}
            type="button"
            onClick={onCancel}>
                Cancel
            </Button>
        )}
        <Button disabled={isPending} type="submit">
            {isEdit ? "Update" : "Create"}
        </Button>
      </div>
    </form>
  </Form>
);
}
