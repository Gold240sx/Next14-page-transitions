# Next 14 App Router Page Transitions

1. Followed the tutorial by Hamed Bahram on the fade in effect. (being used in
   the home page.) I modified the code so instead of having the same page
   transition across all pages, I could select different transitions for
   different pages.

I followed another tutorial by Oliver Larose, on the general premise of how to
do this. He did say that it couldn't be done, in Next 14, and I trust him, but I
thought I'd give it a go anyways.

Spent a good bit of time until I was able to get the transition to work with
only one caveat, that I've found: that Framer motions, `AnimatePresence`
component, needs a `key` prop passed into it. When building a next app with the
pages router, the code looks like this:

```
	export default function App({ Component, pageProps, router}){
		...
		<AnimatePresence mode="wait">
			<Component key={router.route} />
		</AnimatePresence>
	}
```

We don't have access to the `router` object when using the app router, so I
tried the next closest thing I could think of (to no avail)...

```
	"use client"
	import { usePathname } from 'next/navigation'
	export default function ClientComponent({children}: {children: ReactNode}){
		const pathname = usePathname()
		...
		<AnimatePresence mode="wait">
			<Component key={pathname} />
		</AnimatePresence>
	}
```

It's probably not an easy fix (like Oliver said) but it would be pretty cool to
figure it out!

## Tutorial Links

Hamed Bahram: https://youtu.be/jVU3JD6qOBo?si=kvbSv-xsbGehlJ5g <br /> <br />
Oliver Larose: https://youtu.be/WmvpJ4KX30s?si=Ob8DhhX0I9oMlrbK
