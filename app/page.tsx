'use client'

import dynamic from 'next/dynamic'

const Nav = dynamic(() => import('@/components/Nav'), { ssr: false })
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false })
const Stats = dynamic(() => import('@/components/Stats'), { ssr: false })
const Chapter = dynamic(() => import('@/components/Chapter'), { ssr: false })
const Vision = dynamic(() => import('@/components/Vision'), { ssr: false })
const Waitlist = dynamic(() => import('@/components/Waitlist'), { ssr: false })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })
const ProgressBar = dynamic(() => import('@/components/ProgressBar'), { ssr: false })

const chapter1Beats = [
  {
    html: `It didn&apos;t happen overnight.<br/><br/>It was the fifth pre-roll in a row.<br/>The pop-up that covered the thing<br/>you were actually trying to read.<br/>The ad that followed you across<br/>three different websites for a shoe<br/>you&apos;d already bought.`,
  },
  {
    html: `People got tired.<br/><br/>Not of brands. Not of buying things.<br/>Just of being interrupted<br/>in the middle of something<br/>they&apos;d chosen to be part of.`,
  },
  {
    html: `So they installed a blocker.<br/><br/>Then <strong style="color:#111111;font-weight:500">912 million of them did.</strong><br/>YouTube went after them.<br/>Downloads went up 336%.<br/><br/>You cannot fight your way<br/>back into a room<br/>you were asked to leave.`,
  },
  {
    html: `The industry kept trying anyway.<br/><br/>Better targeting. Shorter formats.<br/>Skippable ads. Unskippable ads.<br/><br/>None of it worked<br/>because none of it addressed<br/><strong style="color:#111111;font-weight:500">the actual problem.</strong>`,
  },
]

const chapter2Beats = [
  {
    html: `The same people who block every ad<br/>on the internet<br/><br/>will sit and watch a creator<br/>hold a product for ten seconds<br/><br/>and actually think about buying it.`,
  },
  {
    html: `<strong style="color:#111111;font-weight:500">54% of ad blocker users</strong><br/>engage with branded content<br/>inside creator videos.<br/><br/>Not because they forgot<br/>they hate ads.<br/><br/>Because it didn&apos;t feel like one.`,
  },
  {
    html: `The format was never the problem.<br/><br/>Product inside content<br/>has worked since the beginning of television.<br/><br/>What never existed was a way to do it at scale —<br/>for any brand, any creator, any video —<br/><strong style="color:#111111;font-weight:500">without a film crew.</strong>`,
  },
  {
    html: `Computer vision changed that.<br/>Large language models changed that.<br/><br/>Both became capable<br/>at roughly the same time.<br/><br/><strong style="color:#111111;font-weight:500">We were paying attention.</strong>`,
  },
]

const chapter3Beats = [
  {
    html: `Our AI reads the campaign.<br/>Understands the product.<br/>Finds the creators whose audience<br/>would actually care.<br/><br/>No spreadsheets.<br/>No emails.<br/>No middlemen.`,
  },
  {
    html: `When a creator accepts,<br/>the computer vision pipeline finds<br/>the right object in the right frame —<br/>a shoe, a bottle, a piece of clothing —<br/>and <strong style="color:#111111;font-weight:500">replaces it with the brand&apos;s product at pixel level.</strong><br/><br/>Frame by frame.<br/>Without anyone directing it.`,
  },
  {
    html: `Viewer A sees Nike.<br/>Viewer B sees something else.<br/><br/><strong style="color:#111111;font-weight:500">Same video.<br/>No reshooting.<br/>Nobody knew it was coming.</strong>`,
  },
  {
    html: `There is no overlay.<br/>No script running in the background.<br/>No ad unit for a blocker to find.<br/><br/>The product is in the frames themselves.<br/><br/><strong style="color:#111111;font-weight:500">There is nothing to block<br/>because technically<br/>there is no ad.</strong>`,
  },
]

const chapter4Beats = [
  {
    html: `200 million creators in India.<br/><br/>Most of them are doing something<br/>genuinely difficult —<br/>building an audience from scratch,<br/>earning trust one video at a time.<br/><br/>Most of them earn less than they should.`,
  },
  {
    html: `Not because their work isn&apos;t valuable.<br/><br/>Because the infrastructure<br/>to connect them to brands fairly —<br/>and pay them automatically —<br/>has never existed.<br/><br/><strong style="color:#111111;font-weight:500">Until now.</strong>`,
  },
  {
    html: `Set up your profile once.<br/>The right brand finds you.<br/>The offer shows up in your inbox.<br/><br/>You accept.<br/>The pipeline runs.<br/><strong style="color:#111111;font-weight:500">You get paid.</strong><br/><br/>That is the entire process.<br/>We counted.`,
  },
  {
    html: `75% of every campaign<br/>goes directly to you.<br/><br/>We take 25%.<br/>Every time.<br/><strong style="color:#111111;font-weight:500">That&apos;s written down.<br/>It doesn&apos;t change.</strong>`,
  },
]

export default function Home() {
  return (
    <>
      <ProgressBar />
      <Nav />
      <div>
        <Hero />
        <Stats />
        <Chapter
          id="chapter-problem"
          chapterIndex={0}
          beatTag="Something broke"
          beats={chapter1Beats}
        />
        <Chapter
          id="chapter-insight"
          chapterIndex={1}
          beatTag="But here is what nobody said out loud"
          beats={chapter2Beats}
        />
        <Chapter
          id="chapter-how"
          chapterIndex={2}
          beatTag="What we built"
          beats={chapter3Beats}
        />
        <Chapter
          id="chapter-creators"
          chapterIndex={3}
          beatTag="And the people who make the content"
          beats={chapter4Beats}
        />
        <Vision />
        <Waitlist />
        <Footer />
      </div>
    </>
  )
}
