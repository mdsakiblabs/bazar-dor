"use client";
import React, { Suspense } from "react";
import Link from "next/link";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation";
const SignInPage = () => {
  const searchParams = useSearchParams();
  const callbackURL = searchParams.get("callbackURL") || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [socialLoading, setSocialLoading] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL,
    });

    if (data) {
      toast.success("Sign in Successful");
    }

    if (error) {
      toast.error(error.message);
    }
  };

  const handleSocialSignIn = async (provider) => {
    setSocialLoading(provider);

    const { data, error } = await authClient.signIn.social({
      provider,
      callbackURL,
    });

    if (error) {
      toast.error(error.message);
      setSocialLoading("");
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#F3FBF4] px-4 py-5 text-[#26352b] sm:py-8">
      <header className="mb-6 text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">সাইন ইন করুন</h1>

        <p className="mt-2 text-sm text-[#78827a]">
          আপনার অ্যাকাউন্টে লগইন করুন।
        </p>
      </header>

      <section className="w-full max-w-[420px] rounded-2xl border border-[#dfe8df] bg-[#fbfdfb] p-5 sm:p-6">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm">
              ইমেইল
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-[#dfe8df] bg-transparent px-3 py-2.5 text-sm outline-none transition focus:border-green-700 focus:ring-1 focus:ring-green-700"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm">
              পাসওয়ার্ড
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              placeholder="আপনার পাসওয়ার্ড"
              className="w-full rounded-lg border border-[#dfe8df] bg-transparent px-3 py-2.5 text-sm outline-none transition focus:border-green-700 focus:ring-1 focus:ring-green-700"
            />
          </div>

          <p className="text-red-600 text-[12px] font-sans">{errorMessage}</p>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#07883e] px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#067333] disabled:cursor-not-allowed disabled:opacity-60"
          >
            সাইন ইন
          </button>
        </form>

        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#dfe5df]" />
          <span className="text-sm text-[#68736a]">অথবা</span>
          <div className="h-px flex-1 bg-[#dfe5df]" />
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => handleSocialSignIn("google")}
            className="flex items-center justify-center gap-2 rounded-lg border border-[#dfe8df] px-2 py-2.5 text-sm font-medium transition hover:bg-[#f0f5f0] disabled:opacity-60"
          >
            <svg viewBox="0 0 48 48" className="h-4 w-4 shrink-0">
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z"
              />
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.73 7.18l7.65 5.93c4.47-4.13 7.12-10.2 7.12-17.58Z"
              />
              <path
                fill="#FBBC05"
                d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.12.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.52 2.56 10.78l7.97-6.19Z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.87-5.87l-7.65-5.93c-2.13 1.43-4.86 2.3-8.22 2.3-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z"
              />
            </svg>

            {socialLoading === "google"
              ? "অপেক্ষা করো..."
              : "Google দিয়ে চালিয়ে যান"}
          </button>

          <button
            type="button"
            onClick={() => handleSocialSignIn("github")}
            className="flex items-center justify-center gap-2 rounded-lg border border-[#dfe8df] px-2 py-2.5 text-sm font-medium transition hover:bg-[#f0f5f0] disabled:opacity-60"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current">
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.7-1.48-2.47-.28-5.06-1.24-5.06-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.41.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.67.11 2.95.72.78 1.15 1.78 1.15 3 0 4.27-2.59 5.22-5.07 5.5.4.35.75 1.02.75 2.06v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>

            {socialLoading === "github"
              ? "অপেক্ষা করো..."
              : "GitHub দিয়ে চালিয়ে যান"}
          </button>
        </div>

        <p className="mt-4 text-center text-sm">
          নতুন অ্যাকাউন্ট তৈরি করতে চান?{" "}
          <Link
            href={`/sign-up?callbackURL=${encodeURIComponent(callbackURL)}`}
          >
            সাইন আপ করুন
          </Link>
        </p>
      </section>

      <Link
        href="/"
        className="mt-5 text-sm text-[#7c877e] transition hover:text-[#07883e]"
      >
        ← হোম পেজে ফিরে যান
      </Link>
    </main>
  );
};

const SignInPageWithSuspense = () => {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f0f5f0]" />}>
      <SignInPage />
    </Suspense>
  );
};

export default SignInPageWithSuspense;
