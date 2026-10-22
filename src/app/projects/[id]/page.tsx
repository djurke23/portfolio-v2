import { notFound } from "next/navigation";
import { projects, getProjectById } from "@/data/projects";
import type { Metadata } from "next";
import CaseStudyView from "./CaseStudyView";

export async function generateStaticParams() {
  return projects
    .filter((p) => p.caseStudy)
    .map((p) => ({
      id: p.id,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found | Luka Đurić",
    };
  }

  const title = `${project.title} — Technical Case Study | Luka Đurić`;
  const description = project.tagline;
  const pageUrl = `https://lukadjuric.dev/projects/${project.id}`;
  const imageUrl = project.image.startsWith("http")
    ? project.image
    : `https://lukadjuric.dev${project.image}`;

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "article",
      url: pageUrl,
      title,
      description,
      siteName: "Luka Đurić Portfolio",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${project.title} Case Study Preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project || !project.caseStudy) {
    notFound();
  }

  // Sequential case study cycle
  const caseStudyProjects = projects.filter((p) => p.caseStudy);
  const currentIndex = caseStudyProjects.findIndex((p) => p.id === project.id);
  const nextProject =
    caseStudyProjects.length > 1
      ? caseStudyProjects[(currentIndex + 1) % caseStudyProjects.length]
      : null;

  return <CaseStudyView project={project} nextProject={nextProject} />;
}
