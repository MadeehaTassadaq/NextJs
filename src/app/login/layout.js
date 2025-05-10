"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
export default function Layout({
    children}) {
        const pathname=usePathname();

    return (
        <div>
            {pathname!=="/login/loginteacher"?
            <ul className="login-menu">
                <li>
                    <h4>login navbar</h4>
                </li>
                <li>
                    <Link href="/login">Main Login</Link>
                </li>
                <li>
                    <Link href="/login/loginstudent">Student Login</Link>
                </li>
                <li>
                    <Link href="/login/loginteacher">Teacher login</Link>
                </li>
            </ul>
            :<Link href="/login">Main Login Page</Link>}
            {children}
        </div>
    )
}