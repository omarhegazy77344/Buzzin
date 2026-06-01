import type { MetadataRoute } from "next"
import { newsPosts, blogPosts } from "@/lib/content-defaults"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://buzzin.ae"
  const langs = ["en", "ar"]

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/platform", priority: 0.9, changeFrequency: "monthly" },
    { path: "/platform/visitor-management-system", priority: 0.9, changeFrequency: "monthly" },
    { path: "/platform/work-permit-system", priority: 0.9, changeFrequency: "monthly" },
    { path: "/platform/event-management", priority: 0.8, changeFrequency: "monthly" },
    { path: "/platform/attendance-management", priority: 0.8, changeFrequency: "monthly" },
    { path: "/platform/queue-management", priority: 0.8, changeFrequency: "monthly" },
    { path: "/platform/booking-management", priority: 0.8, changeFrequency: "monthly" },
    { path: "/platform/safeguarding", priority: 0.8, changeFrequency: "monthly" },
    { path: "/platform/patrolling", priority: 0.7, changeFrequency: "monthly" },
    { path: "/platform/parking-management", priority: 0.7, changeFrequency: "monthly" },
    { path: "/platform/key-management", priority: 0.6, changeFrequency: "monthly" },
    { path: "/industries", priority: 0.9, changeFrequency: "monthly" },
    { path: "/industries/residential-real-estate", priority: 0.9, changeFrequency: "monthly" },
    { path: "/industries/hospitality", priority: 0.9, changeFrequency: "monthly" },
    { path: "/industries/education", priority: 0.9, changeFrequency: "monthly" },
    { path: "/why-buzzin", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/security-compliance", priority: 0.8, changeFrequency: "monthly" },
    { path: "/book-demo", priority: 0.9, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/press", priority: 0.7, changeFrequency: "monthly" },
    { path: "/news", priority: 0.8, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/sitemap", priority: 0.3, changeFrequency: "monthly" },
  ] as const

  const detailRoutes = [
    ...newsPosts.map((p) => ({
      path: `/news/${p.slug}`,
      priority: 0.6,
      changeFrequency: "monthly" as const,
    })),
    ...blogPosts.map((p) => ({
      path: `/blog/${p.slug}`,
      priority: 0.6,
      changeFrequency: "monthly" as const,
    })),
  ]

  const urls: MetadataRoute.Sitemap = []

  for (const lang of langs) {
    for (const route of [...routes, ...detailRoutes]) {
      urls.push({
        url: `${baseUrl}/${lang}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency as MetadataRoute.Sitemap[0]["changeFrequency"],
        priority: route.priority,
      })
    }
  }

  return urls
}
