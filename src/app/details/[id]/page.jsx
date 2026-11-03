import React from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
const Detailspage = async ({ params }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
  redirect(`/sign-in?callbackURL=/details/${(await params).id}`);
}
  const { id } = await params;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${id}`,
  );
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <h1>{data.nameBn}</h1>
    </div>
  );
};

export default Detailspage;
