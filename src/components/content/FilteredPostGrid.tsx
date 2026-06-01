"use client"

import { useState, type ReactNode } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { BRAND_EASE } from "@/lib/motion"
import { CategoryFilter, type FilterOption } from "./CategoryFilter"
import { PostCard, type PostCardData } from "./PostCard"
import { PressCard, type PressCardData } from "./PressCard"

type PostItem = PostCardData & { category: string }
type PressItem = PressCardData & { category: string }

type CommonProps = {
  options: FilterOption[]
  featured?: ReactNode
  gridBg?: "canvas" | "page"
}

type FilteredPostGridProps = CommonProps &
  (
    | {
        kind: "post"
        items: PostItem[]
        basePath: string
      }
    | {
        kind: "press"
        items: PressItem[]
      }
  )

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: BRAND_EASE } },
}

export function FilteredPostGrid(props: FilteredPostGridProps) {
  const [active, setActive] = useState("all")

  const filtered =
    active === "all"
      ? props.items
      : props.items.filter((item) => item.category === active)

  const gridBgClass =
    props.gridBg === "page" ? "bg-[var(--bg-page)]" : "bg-[var(--bg-canvas)]"

  return (
    <>
      {/* Filter chips on page background */}
      <section className="bg-[var(--bg-page)] pb-10">
        <Container>
          <CategoryFilter
            options={props.options}
            active={active}
            onChange={setActive}
          />
        </Container>
      </section>

      {/* Optional featured post on canvas */}
      {props.featured && (
        <section className="bg-[var(--bg-canvas)] py-14 md:py-16">
          <Container>{props.featured}</Container>
        </section>
      )}

      {/* Grid */}
      <section className={`${gridBgClass} py-16 md:py-20`}>
        <Container>
          <motion.div
            key={active}
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => {
                const key = "slug" in item ? item.slug : item.title
                return (
                  <motion.div
                    key={key}
                    variants={cardVariants}
                    layout
                    exit={{ opacity: 0, y: 10 }}
                  >
                    {props.kind === "post" ? (
                      <PostCard
                        post={item as PostItem}
                        basePath={props.basePath}
                      />
                    ) : (
                      <PressCard press={item as PressItem} />
                    )}
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
