import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
	return (
		<nav className={styles.nav}>
			<div className={styles.inner}>
				<div className={styles.brandWrap}>
					<Link href="/" className={styles.brand}>
						KB Jewels
					</Link>
				</div>
				<ul className={styles.links}>
					<li>
						<Link href="/about" className={styles.link}>About</Link>
					</li>
					<li>
						<Link href="/contact" className={styles.link}>Contact</Link>
					</li>
					<li>
						<Link href="/portfolio" className={styles.link}>Portfolio</Link>
					</li>
					<li>
						<Link href="/testimonials" className={styles.link}>Testimonials</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
