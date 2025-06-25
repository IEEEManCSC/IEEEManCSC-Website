import { notFound } from "next/navigation";
import { committeeDetails } from "@/data";
import CommitteeDetail from "@/app/components/CommitteeDetail";

export default async function CommitteePage({
  params,
}: {
  params: { slug: string };
}) {
  const committee = committeeDetails.find((c) => c.slug === params.slug);

  if (!committee) {
    notFound();
  }

  return <CommitteeDetail committee={committee} />;
}
