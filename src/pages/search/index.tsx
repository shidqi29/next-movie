import { useRouter } from "next/router";
import React from "react";

export default function SearchPage() {
  const router = useRouter();

  console.log(router.query);

  return <div>SearchPage: {router.query.query}</div>;
}
