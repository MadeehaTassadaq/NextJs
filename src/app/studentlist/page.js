import Link from "next/link";
export default function StudentList() {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/studentlist/mira">mira </Link>
                </li>
                <li>
                    <Link href="/studentlist/nawaz">nawaz</Link>
                </li>
                <li>
                    <Link href="/studentlist/ali">ali</Link>
                </li>
            </ul>
        </div>
    )
}