"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { useState } from "react";

import { Loader2Icon } from "lucide-react";
import { is } from "drizzle-orm";

const formSchema = z.object({
  email: z.email(),
  password: z.string().min(8).max(50),
});

export function SignInForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [loading, setLoading] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    let isSuccess = false;
    const { data, error } = await authClient.signIn.email(
      {
        email: values.email,
        password: values.password,
      },
      {
        onRequest: (_ctx) => {
          setLoading(true);
        },
        onSuccess: (_ctx) => {
          setLoading(false);
          isSuccess = true;
        },
        onError: (ctx) => {
          setLoading(false);
          // display the error message
          alert(ctx.error.message);
        },
      }
    );

    if (isSuccess) {
      redirect("/home");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormDescription>This is your email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" type="password" {...field} />
              </FormControl>
              <FormDescription>This is your password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={loading}>
          {loading ? (
            <>
              <Loader2Icon className="animate-spin" /> Loading...
            </>
          ) : (
            "Submit"
          )}
        </Button>
        <p className="text-xs">
          Don't have an account?{" "}
          <Link href="/auth/sign-up" className="underline">
            Sign up
          </Link>
        </p>
      </form>
    </Form>
  );
}
