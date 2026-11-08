"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const ProfilePage = () => {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  const [name, setName] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const user = session?.user;

  // Update Profile Name
  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("নাম লিখতে হবে।");
      return;
    }

    setIsUpdating(true);
    setMessage("");
    setError("");

    try {
      const { error } = await authClient.updateUser({
        name: name.trim(),
      });

      if (error) {
        setError(error.message);
        return;
      }

      setMessage("প্রোফাইল সফলভাবে আপডেট হয়েছে।");
      setName("");
    } catch {
      setError("প্রোফাইল আপডেট করা যায়নি। আবার চেষ্টা করো।");
    } finally {
      setIsUpdating(false);
    }
  };

  // Sign Out
  const handleSignOut = async () => {
    setIsSigningOut(true);

    try {
      await authClient.signOut();
      router.replace("/sign-in");
      router.refresh();
    } catch {
      setError("Sign out করা যায়নি। আবার চেষ্টা করো।");
      setIsSigningOut(false);
    }
  };

  // Loading State
  if (isPending) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F3FBF4]">
        <p className="text-sm text-gray-500">প্রোফাইল লোড হচ্ছে...</p>
      </main>
    );
  }

  // Unauthenticated User
  if (!user) {
    router.replace("/sign-in");
    return null;
  }

  return (
    <main className="min-h-screen bg-[#F3FBF4] px-4 py-8 sm:px-6 md:py-10">
      <div className="mx-auto max-w-5xl">
        {/* Page Heading */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            আমার প্রোফাইল
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        {/* User Information Card */}
        <section className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-[#dfe8df] bg-[#fafcfb] p-5 sm:flex-row sm:items-center sm:p-6">
          <div className="flex min-w-0 items-center gap-4">
            {/* Profile Image */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#edf2ed] sm:h-20 sm:w-20">
              {user.image ? (
                <img
                  src={user.image}
                  alt={user.name || "Profile"}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-3xl font-bold text-green-700">
                  {user.name?.charAt(0)?.toUpperCase() || "U"}
                </span>
              )}
            </div>

            {/* User Details */}
            <div className="min-w-0">
              <h2 className="break-words text-lg font-semibold text-gray-800 sm:text-xl">
                {user.name}
              </h2>

              <p className="mt-1 break-all text-sm text-gray-500 sm:text-base">
                {user.email}
              </p>
            </div>
          </div>

          {/* Sign Out Button */}
          <button
            onClick={handleSignOut}
            disabled={isSigningOut}
            className="w-full rounded-lg border border-red-400 px-5 py-2.5 text-sm font-medium text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {isSigningOut ? "সাইন আউট হচ্ছে..." : "↩ সাইন আউট"}
          </button>
        </section>

        {/* Profile Information Form */}
        <section className="mt-5 rounded-2xl border border-[#dfe8df] bg-[#fafcfb] p-5 sm:p-7 md:p-8">
          <h2 className="mb-7 text-lg font-semibold text-gray-800">তথ্য</h2>

          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                নাম
              </label>

              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={user.name}
                className="w-full rounded-lg border border-[#dfe8df] bg-transparent px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>

            {/* Success Message */}
            {message && <p className="text-sm text-green-700">{message}</p>}

            {/* Error Message */}
            {error && <p className="text-sm text-red-500">{error}</p>}

            <button
              type="submit"
              disabled={isUpdating || !name.trim()}
              className="w-full rounded-lg bg-green-700 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isUpdating ? "আপডেট হচ্ছে..." : "আপডেট"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default ProfilePage;
