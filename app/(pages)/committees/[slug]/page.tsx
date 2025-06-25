import { notFound } from "next/navigation";
import { committeeDetails } from "@/data";
import CommitteeDetail from "@/app/components/CommitteeDetail";

export default async function CommitteePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const param = await params;
  const committee = committeeDetails.find((c) => c.slug === param.slug);

  if (!committee) {
    notFound();
  }

  return <CommitteeDetail committee={committee} />;
}
