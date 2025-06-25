import { notFound } from "next/navigation";
import { committeeDetails } from "@/data";
import CommitteeDetail from "@/app/components/CommitteeDetail";

interface PageProps {
  params: { slug: string };
}

export default function CommitteePage({ params }: PageProps) {
  const committee = committeeDetails.find((c) => c.slug === params.slug);

  if (!committee) {
    notFound();
  }

  // Pass the full committee object into the client component
  return <CommitteeDetail committee={committee} />;
}
